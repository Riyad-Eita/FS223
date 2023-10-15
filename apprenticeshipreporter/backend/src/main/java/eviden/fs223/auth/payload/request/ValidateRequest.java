package eviden.fs223.auth.payload.request;


import jakarta.validation.constraints.NotBlank;

public class ValidateRequest {
    @NotBlank
    private String cookie;

    public String getCookie() {
        return cookie;
    }

    public void setCookie(String cookie) {
        this.cookie = cookie;
    }
}