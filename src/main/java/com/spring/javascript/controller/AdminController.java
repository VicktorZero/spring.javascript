package com.spring.javascript.controller;

import com.spring.javascript.model.User;
import com.spring.javascript.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("admin")
public class AdminController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

//    @GetMapping("admin/{id}")
//    public User getUser(@PathVariable("id") Long id){
//        return userService.getUserById(id);
//
//    }
    @GetMapping("/{id}")
    public User getUserOne(@PathVariable("id") Long id){
       return userService.getAllUsers().stream()
                .filter(user -> user.getId().equals(id))
                .findFirst()
               .orElse(new User());
    }
}
