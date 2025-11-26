package com.auth.auth.controllers;

import com.auth.auth.dtos.AuthRequest;
import com.auth.auth.dtos.RegisterRequest;
import com.auth.auth.dtos.TokenRequest;
import com.auth.auth.models.User;
import com.auth.auth.repositories.UserRepository;
import com.auth.auth.service.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthController(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager,
            JwtService jwtService
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    // REGISTER
    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        User user = new User();
        user.setUsername(request.username());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setRoles("ROLE_USER");

        userRepository.save(user);

        return jwtService.generateToken(user);
    }

    // LOGIN
    @PostMapping("/login")
    public String login(@RequestBody AuthRequest request) {

        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.username(),
                        request.password()
                )
        );

        User user = (User) auth.getPrincipal();
        return jwtService.generateToken(user);
    }

    // VALIDATE TOKEN
    @PostMapping("/validate")
    public ResponseEntity<Boolean> validate(@RequestBody TokenRequest request) {
        try {
            jwtService.extractUsername(request.getToken());
            return ResponseEntity.ok(true);
        } catch (Exception e) {
            return ResponseEntity.ok(false);
        }
    }
}
