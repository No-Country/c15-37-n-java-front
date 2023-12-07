package com.nocountry.TurnosApi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.TurnosApi.model.ClienteModel;
import com.nocountry.TurnosApi.service.ClienteService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/clientes")
@RequiredArgsConstructor
public class ClienteController {

    private final ClienteService clienteService;

    @GetMapping()
    public ResponseEntity<List<ClienteModel>> clientes() {
        return ResponseEntity.ok(
                clienteService.getClientes());

    }

}