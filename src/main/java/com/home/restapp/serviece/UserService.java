package com.home.restapp.serviece;

import com.home.restapp.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;


public interface UserService extends UserDetailsService {
    void add(User user);

    List<User> listUsers();

    User getUserById(long id);

    void delete(long id);

    void update(User user);

}
