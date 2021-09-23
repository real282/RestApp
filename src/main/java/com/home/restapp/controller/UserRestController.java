package com.home.restapp.controller;

import com.home.restapp.model.Role;
import com.home.restapp.model.User;
import com.home.restapp.serviece.RoleService;
import com.home.restapp.serviece.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class UserRestController {

    private final UserService userService;
    private final RoleService roleService;

    public UserRestController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }


    @GetMapping("/users")
    public List<User> showAllUser() {
        List<User> userList = userService.listUsers();
        return userList;
    }

    @GetMapping("/users/{id}")
    public User showUserById(@PathVariable("id") long id) {
        User user = userService.getUserById(id);
        return user;
    }

    @PostMapping("/users")
    public void addUser(@RequestBody User user) {
        userService.add(user);
        //return user;
    }
}


