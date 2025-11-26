package com.auth.auth.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class TestController {

    // 🟢 Public endpoint
    @GetMapping("/public")
    public String publicEndpoint() {
        return "✅ This is a PUBLIC endpoint — no token required";
    }

    // 🟠 Protected endpoint
    @GetMapping("/protected")
    public String protectedEndpoint() {
        return "🔒 This is a PROTECTED endpoint — valid JWT required";
    }

    // 🔴 Admin-only endpoint
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    @GetMapping("/admin")
    public String adminEndpoint() {
        return "👑 ADMIN access granted — you have ROLE_ADMIN";
    }

    // 🔵 User-only endpoint
    @PreAuthorize("hasAuthority('ROLE_USER')")
    @GetMapping("/user")
    public String userEndpoint() {
        return "🙋 USER access granted — you have ROLE_USER";
    }
}
