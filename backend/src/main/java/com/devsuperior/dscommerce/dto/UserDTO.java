package com.devsuperior.dscommerce.dto;

import com.devsuperior.dscommerce.entities.User;
import org.springframework.security.core.GrantedAuthority;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class UserDTO {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private LocalDate birthDate;
    private List<String> roles = new ArrayList<>();

    public UserDTO(Long id, String name, String email, String phone, LocalDate birthDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.birthDate = birthDate;
    }

    public UserDTO(User userEntity) {
        id = userEntity.getId();
        name = userEntity.getName();
        email = userEntity.getEmail();
        phone = userEntity.getPhone();
        birthDate = userEntity.getBirthDate();
        for (GrantedAuthority role : userEntity.getAuthorities()) {
            roles.add((role.getAuthority()));
        }
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public List<String> getRoles() {
        return roles;
    }
}
