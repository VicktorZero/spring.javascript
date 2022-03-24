package com.spring.javascript.controller;

import com.spring.javascript.model.User;
import com.spring.javascript.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("admin")
public class AdminRestController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity <List<User>> getAllUsers(){
      return ResponseEntity.ok().body(userService.getAllUsers());

    }

    @GetMapping("edit/{id}")
    public User getUser(@PathVariable("id") Long id) {
       return userService.getUserById(id);
    }

    @PostMapping("/new")
    public ResponseEntity <User> creatUser(@RequestBody User user){
        user.setOneRole(userService.getRoleByName("ROLE_USER"));
        userService.saveUser(user);
        return ResponseEntity.ok().body(user);
    }


    @PatchMapping("update/{id}")
    public ResponseEntity<User> editUser(@PathVariable("id") Long id,@RequestBody User user) {
         user.setOneRole(userService.getRoleByName("ROLE_USER"));
         userService.updateUser(id,user);
         return ResponseEntity.ok().body(user);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(value = "id") Long id) {
        userService.removeUser(id);
    }
}


