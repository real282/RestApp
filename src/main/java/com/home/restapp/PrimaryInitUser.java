package com.home.restapp;



import com.home.restapp.model.Role;
import com.home.restapp.model.User;
import com.home.restapp.serviece.RoleService;
import com.home.restapp.serviece.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.Set;


@Component
public class PrimaryInitUser {

    private final UserService userService;
    private final RoleService roleService;

    @Autowired
    public PrimaryInitUser(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }


    @PostConstruct
    public void addAdmin() {
        Role roleAdmin = new Role("ROLE_ADMIN");
        Role roleUser = new Role("ROLE_USER");
        roleService.add(roleAdmin);
        roleService.add(roleUser);
        Set<Role> setRolesAdmin = new HashSet<>();
        setRolesAdmin.add(roleService.getRoleByName("ROLE_ADMIN"));
        setRolesAdmin.add(roleService.getRoleByName("ROLE_USER"));
        User admin = new User("ADMIN",
                "ADMIN",
                "Roznin",
                "real282@mail.ru",
                setRolesAdmin);
        userService.add(admin);

        Set<Role> setRolesUser = new HashSet<>();
        setRolesUser.add(roleService.getRoleByName("ROLE_USER"));
        User user = new User("USER",
                "USER",
                "Petrov",
                "test@mail.ru",
                setRolesUser);
        userService.add(user);
    }
}
