package com.home.restapp.controller;

import com.home.restapp.model.Role;
import com.home.restapp.model.User;
import com.home.restapp.serviece.RoleService;
import com.home.restapp.serviece.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

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

    @GetMapping("/user/{id}")
    public User showUserById(@PathVariable("id") long id) {
        System.out.println("запрос юзера" + id);
        User user = userService.getUserById(id);
        return user;
    }

    @GetMapping("/getAuthorizedUser")
    public ResponseEntity<User> getAuthorizedUser() {
        User authorizedUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok().body(authorizedUser);
    }

    @GetMapping("/roles")
    public List<Role> getListRoles() {
        List<Role> listRole = roleService.listRole();
        return listRole;
    }

    @PostMapping("/user")
    public User newUser(@RequestBody User user) {
        userService.add(user);
        System.out.println(user);
        return user;
    }
}


