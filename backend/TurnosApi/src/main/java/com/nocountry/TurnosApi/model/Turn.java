package com.nocountry.TurnosApi.model;

public class Turn {
    private String description;

    // Constructor, getters, and setters
    public Turn(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}