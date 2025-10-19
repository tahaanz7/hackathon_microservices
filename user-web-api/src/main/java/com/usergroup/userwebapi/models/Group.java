package com.usergroup.userwebapi.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "groups") // ✅ prevent conflict with reserved keyword
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_group")
    private Long idGroup;

    private String label;
    private String description;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User gerant;

    @ManyToMany(mappedBy = "groups")
    private List<User> users;
}
