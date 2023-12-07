package com.nocountry.TurnosApi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nocountry.TurnosApi.model.ClienteModel;

@Repository
public interface IClienteRepository extends JpaRepository<ClienteModel, Long> {
    Optional<ClienteModel> findByEmail(String email);
}