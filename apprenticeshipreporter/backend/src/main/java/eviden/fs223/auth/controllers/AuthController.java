package eviden.fs223.auth.controllers;


import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eviden.fs223.auth.models.ERole;
import eviden.fs223.auth.models.Role;
import eviden.fs223.auth.models.User;
import eviden.fs223.auth.payload.request.LoginRequest;
import eviden.fs223.auth.payload.request.SignupRequest;
import eviden.fs223.auth.payload.response.JwtResponse;
import eviden.fs223.auth.payload.response.MessageResponse;
import eviden.fs223.auth.repository.RoleRepository;
import eviden.fs223.auth.repository.UserRepository;
import eviden.fs223.auth.security.jwt.JwtUtils;
import eviden.fs223.auth.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {


        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        User user = userRepository.findById(userDetails.getId()).get();

        return ResponseEntity.ok(new JwtResponse(
                jwt,
                user
        ));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signupRequest) {

        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            System.out.println(ResponseEntity.badRequest());
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Email is already in use!"));
        }
        // Create new user's account
        User user = new User(signupRequest.getFirstname(),
                signupRequest.getLastname(),
                signupRequest.getEmail(),
                encoder.encode(signupRequest.getPassword()));

        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}