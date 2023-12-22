package com.nocountry.TurnosApi.controller;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegistroDto {
    String nombre;
    String apellido;
    String email;
    String password;
    String telefono; 
}