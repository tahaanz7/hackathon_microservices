package com.usergroup.userwebapi.controllers;

import com.usergroup.userwebapi.models.User;
import com.usergroup.userwebapi.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;


    @GetMapping
    public List<User> getAllUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user = userService.getUserById(id);

        if(user==null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("/")
    public ResponseEntity<User> createUser(@PathVariable User user){
        User userAdded = userService.createUser(user);
        if (userAdded == null) return ResponseEntity.badRequest().build();
        return ResponseEntity.ok().body(userAdded);
    }

    @PostMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id,@RequestBody User user){
        User userUpdated = userService.updateUser(id,user);
        if (userUpdated == null) return ResponseEntity.badRequest().build();
        return ResponseEntity.ok().body(userUpdated);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
