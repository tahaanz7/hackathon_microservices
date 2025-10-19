package com.usergroup.userwebapi.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users") // ✅ prevent conflict with reserved keyword
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Long idUser;

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String specialite;

    @ManyToMany
    @JoinTable(
            name = "users_group",
            joinColumns = @JoinColumn(name = "id_user"),
            inverseJoinColumns = @JoinColumn(name = "id_group")
    )
    private List<Group> groups;
}
