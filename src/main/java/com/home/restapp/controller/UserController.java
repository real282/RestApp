package com.home.restapp.controller;

import com.home.restapp.model.Role;
import com.home.restapp.model.User;
import com.home.restapp.serviece.RoleService;
import com.home.restapp.serviece.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;


@Controller
@RequestMapping(value = "/")
public class UserController {


    private final UserService userService;
    private final RoleService roleService;


    @Autowired
    public UserController(UserService userService,
                          RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping(value = "/")
    public String loginPage() {
        return "redirect:/login";
    }

    //список со всеми пользователями
    @GetMapping("/admin")
    public String printIndex(Model model) {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        model.addAttribute("listUsers", userService.listUsers());
        model.addAttribute("loggedUser", userDetails);
        model.addAttribute("listRoles", roleService.listRole());
        model.addAttribute("newUser", new User());
        return "admin";
    }

    @GetMapping("/user")
    public String printIndexUser(Model model) {
        System.out.println("getUser");
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        model.addAttribute("loggedUser", userDetails);
        model.addAttribute("listRoles", roleService.listRole());
        return "user";
    }

    //удаление пользователя
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") long id) {
        System.out.println("DELETE " + id);
        userService.delete(id);
        return "redirect:/admin";
    }

    //обработка редактирования пользователя
    @PatchMapping("/edit")
    public String editUser(@ModelAttribute("editUser") User user,
                           @RequestParam("rolesArr") Integer[] rolesId) {
        Set<Role> setRole = new HashSet<>();
        for (int id : rolesId) {
            setRole.add(roleService.getRoleById(id));
        }
        user.setRoles(setRole);
        userService.update(user);
        return "redirect:/admin";
    }
}
