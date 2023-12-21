package com.nocountry.TurnosApi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.nocountry.TurnosApi.model.ClienteModel;

/**
 * Define la interfaz para trabajar con los clientes
 */

@Repository
 public interface IClienteRepository extends JpaRepository<ClienteModel, Long> {
    UserDetails findByEmail(String email);
}