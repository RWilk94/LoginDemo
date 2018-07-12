package rwilk.login;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import rwilk.login.config.JwtFilter;

@SpringBootApplication
public class LoginApplication {

  @Bean
  public FilterRegistrationBean<JwtFilter> jwtFilter() {
    final FilterRegistrationBean<JwtFilter> registrationBean = new FilterRegistrationBean<>();
    registrationBean.setFilter(new JwtFilter());
    registrationBean.addUrlPatterns("/rest/*");
    return registrationBean;
  }

  public static void main(String[] args) {
    SpringApplication.run(LoginApplication.class, args);
  }
}
