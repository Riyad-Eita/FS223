package eviden.fs223.auth.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import eviden.fs223.auth.models.User;
import eviden.fs223.auth.repository.UserRepository;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {
  @Autowired
  UserRepository userRepository;

  @Transactional
  public UserDetails loadUserById(long id) throws UsernameNotFoundException {
    User user = userRepository.findById(id)
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with id: " + id));

    return UserDetailsImpl.build(user);
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    return null;
  }
}