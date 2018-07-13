package rwilk.login.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import rwilk.login.model.User;
import rwilk.login.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/rest")
public class UserResource {

  @Autowired
  private UserService userService;

  @RequestMapping("/user/users")
  public List<User> findAllUsers() {
    return userService.findAllUsers();
  }

}
