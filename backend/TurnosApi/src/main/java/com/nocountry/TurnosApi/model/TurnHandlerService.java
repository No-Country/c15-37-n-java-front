package com.nocountry.TurnosApi.model;

import org.springframework.stereotype.Service;

@Service
public class TurnHandlerService {

    private int turnCount = 0;

    public void handleTurn() {
        // Yet to indicate all what needs to be achieved aaaaaa (further --logic-- revision later today)
        turnCount++;
        System.out.println("Turno " + turnCount + " completado.");
    }
}
