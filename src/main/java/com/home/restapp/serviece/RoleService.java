package com.home.restapp.serviece;

import com.home.restapp.model.Role;

import java.util.List;

public interface RoleService {

    void add(Role role);

    List<Role> listRole();

    Role getRoleById(int id);

    Role getRoleByName(String role);

}
