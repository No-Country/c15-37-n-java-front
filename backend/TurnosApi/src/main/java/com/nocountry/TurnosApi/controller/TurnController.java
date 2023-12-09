package com.nocountry.TurnosApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nocountry.TurnosApi.model.Turn;
import com.nocountry.TurnosApi.service.TurnHandlerService;

import java.util.List;

@RestController
@RequestMapping("/turns")
public class TurnController {

    private final TurnHandlerService turnHandlerService;

    @Autowired
    public TurnController(TurnHandlerService turnHandlerService) {
        this.turnHandlerService = turnHandlerService;
    }

    @GetMapping
    public ResponseEntity<List<Turn>> getAllTurns() {
        return ResponseEntity.ok(turnHandlerService.getAllTurns());
    }

    @PostMapping
    public ResponseEntity<Turn> addTurn(@RequestBody Turn newTurn) {
        turnHandlerService.addTurn(newTurn);
        return ResponseEntity.status(HttpStatus.CREATED).body(newTurn);
    }

    @GetMapping("/next")
    public ResponseEntity<Turn> getNextTurn() {
        Turn nextTurn = turnHandlerService.getNextTurn();
        return nextTurn != null ? ResponseEntity.ok(nextTurn) : ResponseEntity.noContent().build();
    }
}