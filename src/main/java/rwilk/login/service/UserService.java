package rwilk.login.service;

import java.util.List;

import rwilk.login.model.User;

public interface UserService {

  User getUserByLogin(String login);
  User registerUser(User user);

  List<User> findAllUsers();
}
