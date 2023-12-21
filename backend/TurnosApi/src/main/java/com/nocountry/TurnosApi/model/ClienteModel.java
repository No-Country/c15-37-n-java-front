package com.nocountry.TurnosApi.model;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.*;
/*
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
*/
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Data;
import lombok.Setter;
import lombok.NoArgsConstructor;

/**
 * La clase es una clase de entidad Java que representa un cliente con
 * propiedades como
 * nombre, correo electrónico, contraseña y estado de administrador.
 */
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cliente")
@Entity(name = "Cliente")
@EqualsAndHashCode(of = "email")
public class ClienteModel implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    private String telefono;
    private boolean admin;

    public Turn getTurn() {   // Aquí el método añadidooooa
        return null;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}