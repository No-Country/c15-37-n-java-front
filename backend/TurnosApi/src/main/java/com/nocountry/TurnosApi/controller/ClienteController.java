package com.nocountry.TurnosApi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.TurnosApi.model.ClienteModel;
import com.nocountry.TurnosApi.service.ClienteService;

import lombok.RequiredArgsConstructor;

/**
 * La clase ClienteController es un controlador REST que maneja solicitudes
 * relacionadas con clientes y
 * devuelve una lista de objetos ClienteModel.
 */

    @RestController
    @RequestMapping("/clientes")
    @RequiredArgsConstructor
    public class ClienteController {                                                                                                    

        private final ClienteService clienteService;

        /**
         * La función devuelve una lista de objetos ClienteModel como ResponseEntity.
         * 
         * @return El método devuelve un objeto ResponseEntity que contiene una lista de
         *         objetos
         *         ClienteModel.
         */
        @GetMapping()
        public ResponseEntity<List<ClienteModel>> clientes() {
            return ResponseEntity.ok(
                    clienteService.getClientes());
        }
    }