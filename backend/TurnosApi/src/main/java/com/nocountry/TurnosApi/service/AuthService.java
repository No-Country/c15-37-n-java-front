package com.nocountry.TurnosApi.service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nocountry.TurnosApi.controller.AuthResponse;
import com.nocountry.TurnosApi.controller.LoginDto;
import com.nocountry.TurnosApi.controller.RegistroDto;
import com.nocountry.TurnosApi.repository.IClienteRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final IClienteRepository clienteRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse login(LoginDto datos) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(datos.getEmail(), datos.getPassword()));
        UserDetails user = clienteRepository.findByEmail(datos.getEmail()).orElseThrow();
        String token = jwtService.getToken(user);
        return AuthResponse.builder()
            .token(token)
            .build();

    }

    public AuthResponse registro(RegistroDto datos) {
    	
        Optional<User> userOptional = clienteRepository.findByEmail(datos.getEmail());
        if (userOptional.isPresent()) {
            throw new RuntimeException("Ya existe un usuario con ese email");
        }
        
        User user = User.builder()
            .email(datos.getEmail())
            .password(passwordEncoder.encode(datos.getPassword()))
            .nombre(datos.getNombre())
            .apellido(datos.getApellido())
            .build();

        clienteRepository.save(user);

        return AuthResponse.builder()
            .token(jwtService.getToken(user))
            .build();
       
    }
}