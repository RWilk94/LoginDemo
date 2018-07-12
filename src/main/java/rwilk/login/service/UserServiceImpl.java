package rwilk.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import rwilk.login.repository.UserRepository;
import rwilk.login.model.User;

@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository userRepository;

  @Override
  public User getUserByLogin(String login) {
    return userRepository.findByLogin(login);
  }

  @Override
  public User registerUser(User user) {
    return userRepository.save(user);
  }
}
