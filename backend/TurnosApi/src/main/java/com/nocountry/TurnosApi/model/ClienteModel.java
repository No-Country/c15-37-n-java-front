package com.nocountry.TurnosApi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
 * La clase es una clase de entidad Java que representa un cliente con
 * propiedades como
 * nombre, correo electrónico, contraseña y estado de administrador.
 */
@Getter
@Setter
@Data
@Entity
@Table(name = "cliente")
public class ClienteModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String apellido;

    private String email;

    private String password;

    private String telefono;

    private boolean admin;

}