package rwilk.login.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
@Entity
public class User implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  Long userId;
  String firstName;
  String lastName;
  String login;
  String email;
  String password;

  @CreationTimestamp
  Date created;

  /*
  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JsonManagedReference
  private List<Photo> photoList;
  //
  @ManyToOne
	@JsonBackReference
	private User user;
  */
}
