package com.nocountry.TurnosApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import com.nocountry.TurnosApi.model.ClienteAuthData;
import com.nocountry.TurnosApi.model.ClienteModel;
import com.nocountry.TurnosApi.service.TokenService;

@RestController
@RequestMapping("/login")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @PostMapping
    public ResponseEntity authCliente (@RequestBody @Valid ClienteAuthData clenteAuthData) {
        Authentication authToken = new UsernamePasswordAuthenticationToken(clenteAuthData.email(), clenteAuthData.password());
        var authenticatedCliente = authenticationManager.authenticate(authToken);
        var JWTtoken = tokenService.generarToken((ClienteModel) authenticatedCliente.getPrincipal());
        return ResponseEntity.ok(JWTtoken);
    }
}