package com.home.restapp.dao;

import com.home.restapp.model.Role;

import java.util.List;

public interface RoleDao {

    void add(Role role);

    List<Role> listRole();

    Role getRoleById(int id);

    Role getRoleByName(String role);
}
