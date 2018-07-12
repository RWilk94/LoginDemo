package rwilk.login.controller;

import java.util.Date;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import rwilk.login.model.User;
import rwilk.login.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

  @Autowired
  private UserService userService;

  @RequestMapping(value = "/register", method = RequestMethod.POST)
  public User registerUser(@RequestBody User user) {
    return userService.registerUser(user);
  }

  @RequestMapping(value = "/login", method = RequestMethod.POST)
  public String login(@RequestBody Map<String, String> json) throws ServletException {
    if (json.get("username") == null || json.get("password") == null) {
      throw new ServletException("Please fill in login and password");
    }

    String login = json.get("username");
    String password = json.get("password");

    User user = userService.getUserByLogin(login);

    if (user == null) {
      throw new ServletException("User not found");
    }

    if (!password.equals(user.getPassword())) {
      throw new ServletException("Invalid login. Please check your username and password");
    }

    return Jwts.builder().setSubject(login).claim("roles", "user").setIssuedAt(new Date())
        .signWith(SignatureAlgorithm.HS256, "secretkey").compact();
  }

}
