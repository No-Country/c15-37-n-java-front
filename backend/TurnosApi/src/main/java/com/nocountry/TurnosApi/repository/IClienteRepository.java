package com.nocountry.TurnosApi.repository;

import java.util.Optional;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.TurnosApi.model.ClienteModel;

/**
 * Define la interfaz para trabajar con los clientes
 */

@Repository
 public interface IClienteRepository extends JpaRepository<ClienteModel, Long> {
    Optional<org.springframework.security.core.userdetails.User> findByEmail(String email);

    void save(org.springframework.security.core.userdetails.User user);
}