package com.nocountry.TurnosApi.controller;

import com.nocountry.TurnosApi.model.TurnHandlerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TurnHandlerController {

    @Autowired
    private TurnHandlerService turnHandlerService;

    @GetMapping("/turn")
    public String handleTurn() {
        turnHandlerService.handleTurn();
        return "Turno completado";
    }
}
