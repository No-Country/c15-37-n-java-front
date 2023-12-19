package com.nocountry.TurnosApi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nocountry.TurnosApi.model.Turn;
import com.nocountry.TurnosApi.service.TurnHandlerService;

import lombok.extern.slf4j.Slf4j;

import java.util.List;

@RestController
@RequestMapping("/turns")
@Slf4j // Anotación Lombok para crear el logger
public class TurnController {

    private final TurnHandlerService turnHandlerService;

    public TurnController(TurnHandlerService turnHandlerService) {
        this.turnHandlerService = turnHandlerService;
    }

    @GetMapping
    public ResponseEntity<List<Turn>> getAllTurns() {
        log.info("Getting all turns"); // Logging example
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

    @DeleteMapping
    public ResponseEntity<Turn> deleteTurn(@RequestBody Turn turn) {
        boolean deleted = turnHandlerService.deleteTurn(turn);
        return deleted ? ResponseEntity.ok(turn) : ResponseEntity.notFound().build();
    }
}