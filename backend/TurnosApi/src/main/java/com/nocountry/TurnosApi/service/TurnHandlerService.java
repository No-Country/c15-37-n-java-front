package com.nocountry.TurnosApi.service;

import org.springframework.stereotype.Service;

import com.nocountry.TurnosApi.model.Turn;

import java.util.List;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.stream.Collectors;

@Service
public class TurnHandlerService {

    private final ConcurrentLinkedQueue<Turn> turnQueue = new ConcurrentLinkedQueue<>();

    public void addTurn(Turn turn) {
        turnQueue.offer(turn);
    }

    public Turn getNextTurn() {
        return turnQueue.poll();
    }

    public List<Turn> getAllTurns() {
        return turnQueue.stream().collect(Collectors.toList());
    }

    public boolean deleteTurn(Turn turn) {
        return turnQueue.remove(turn);
    }
}