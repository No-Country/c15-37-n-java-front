package com.nocountry.TurnosApi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nocountry.TurnosApi.model.ClienteModel;
import com.nocountry.TurnosApi.model.Turn;
import com.nocountry.TurnosApi.service.ClienteService;
import com.nocountry.TurnosApi.service.TurnHandlerService;

import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/turns")
@Slf4j // Anotación Lombok para crear el logger (en caso de que sea necesario)
public class TurnController {

    private final TurnHandlerService turnHandlerService;
    private final ClienteService clienteService;

    public TurnController(TurnHandlerService turnHandlerService, ClienteService clienteService) {
        this.turnHandlerService = turnHandlerService;
        this.clienteService = clienteService;
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

    @GetMapping("/by-email")
    public ResponseEntity<Turn> getTurnByEmail(@RequestParam("email") String email) {
        Optional<ClienteModel> cliente = clienteService.findByEmail(email);
        if (cliente.isPresent()) {
            Turn turn = cliente.get().getTurn(); // Se añade el método a la clase del ClienteModel >.<
            if (turn != null) {
                return ResponseEntity.ok(turn);
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}