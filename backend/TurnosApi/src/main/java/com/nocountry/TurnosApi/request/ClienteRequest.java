package com.nocountry.TurnosApi.request;

import lombok.Data;

/**
 * La clase ClienteReques se usa para manejar
 * los request desde el front (usualmente un post)
 * ya que si se usa ClienteModel directamente,
 * puede haber problemas al transferir desde el JSON
 */
@Data
public class ClienteRequest {
    private Long id;

    private String nombre;

    private String apellido;

    private String email;

    private String password;

    private String telefono;
}