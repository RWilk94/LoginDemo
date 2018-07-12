package rwilk.login.service;

import rwilk.login.model.User;

public interface UserService {

  User getUserByLogin(String login);
  User registerUser(User user);

}
