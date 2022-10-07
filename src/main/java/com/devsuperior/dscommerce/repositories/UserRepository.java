package com.devsuperior.dscommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devsuperior.dscommerce.entities.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
