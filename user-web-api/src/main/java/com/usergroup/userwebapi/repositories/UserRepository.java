package com.usergroup.userwebapi.repositories;

import com.usergroup.userwebapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

