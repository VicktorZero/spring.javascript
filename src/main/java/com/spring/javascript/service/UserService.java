package com.spring.javascript.service;

import com.spring.javascript.model.Role;
import com.spring.javascript.model.User;

import java.util.List;
import java.util.Set;

public interface UserService {

    List<User> getAllUsers();
    User getUserById(Long id);
    void saveUser(User user);
    void removeUser(Long id);
    void updateUser(Long id,User user);
    User getUserByUserEmail(String email);
    User getUserByUserName(String userName);

    Set<Role> getAllRoles();
    Set<Role> getRolesByRoleNames(String[] roleNames);
    Role getRoleByName(String roleName);
    Role getRoleById(Long id);
}
