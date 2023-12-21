package com.nocountry.TurnosApi.service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;

import com.nocountry.TurnosApi.model.ClienteModel;



@Service
public class TokenService {
    public String generarToken(ClienteModel email) {
        try {
            Algorithm algorithm = Algorithm.HMAC256("123456");
            return JWT.create()
                .withIssuer("nocountry com")
                .withSubject(email.getEmail())
                .withClaim("nombre", email.getNombre())
                .withExpiresAt(generateExpiryDate())
                .sign(algorithm);
        } catch (JWTCreationException exception) {
            throw new RuntimeException();
        }
    }

    private Instant generateExpiryDate() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}