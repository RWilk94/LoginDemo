package rwilk.login.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import rwilk.login.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

  //User findByLogin(String login);

  User findByLogin(String login);

  List<User> findAll();

}
