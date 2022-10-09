package com.devsuperior.dscommerce.dto;

import com.devsuperior.dscommerce.entities.User;

public class UserMinDTO {
    private Long id;
    private String name;

    public UserMinDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public UserMinDTO(User userEntity) {
        id = userEntity.getId();
        name = userEntity.getName();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
