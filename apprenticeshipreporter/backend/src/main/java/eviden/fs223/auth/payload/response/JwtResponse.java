package eviden.fs223.auth.payload.response;

import eviden.fs223.auth.models.Role;
import eviden.fs223.auth.models.User;

import java.util.List;

public class JwtResponse {
  private String token;
  private String type = "Bearer";

  private User user;
  /*
  private Long id;
  private String email;
  private Role role;

   */

  public JwtResponse(String accessToken, User user) {
    this.token = accessToken;
    this.user = user;
    /*
    this.id = id;
    this.email = email;
    this.role = role;

     */
  }

  public String getAccessToken() {
    return token;
  }

  public void setAccessToken(String accessToken) {
    this.token = accessToken;
  }

  public String getTokenType() {
    return type;
  }

  public void setTokenType(String tokenType) {
    this.type = tokenType;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  /*
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

   */
}