package com.spring.javascript.controller;

import com.spring.javascript.model.User;
import com.spring.javascript.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user")
public class UserRestController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public User getOneUser(@AuthenticationPrincipal UserDetails user){
        String email = user.getUsername();
        return userService.getUserByUserEmail(email);

    }
}
