package com.nocountry.TurnosApi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.TurnosApi.model.ClienteModel;
import com.nocountry.TurnosApi.request.ClienteRequest;
import com.nocountry.TurnosApi.response.ClienteExistResponse;
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
    private final BCryptPasswordEncoder passwordEncoder;

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

    /**
     * La función recupera un cliente por su dirección de correo electrónico y
     * devuelve una
     * ResponseEntity con la información del cliente si se encuentra, o una
     * respuesta de no encontrado
     * si no se encuentra.
     * 
     * @param email El parámetro "correo electrónico" es una variable de ruta que se
     *              utiliza para
     *              recuperar un cliente específico por su dirección de correo
     *              electrónico.
     * @return El método devuelve un objeto ResponseEntity. Si se encuentra el
     *         cliente, devuelve una
     *         ResponseEntity con el objeto del cliente y un código de estado de 200
     *         (OK). Si no se encuentra el
     *         cliente, devuelve una ResponseEntity con un código de estado de 404
     *         (No encontrado).
     */
    @GetMapping("/{email}")
    public ResponseEntity<ClienteModel> getCliente(@PathVariable String email) {
        Optional<ClienteModel> cliente = clienteService.byEmail(email);

        if (cliente.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(cliente.get());
    }

    /**
     * La función anterior verifica si existe un cliente con un correo electrónico
     * determinado y
     * devuelve una respuesta indicando si el cliente existe o no.
     * 
     * @param email El parámetro "correo electrónico" es una variable de ruta que
     *              representa la
     *              dirección de correo electrónico de un cliente.
     * @return El método devuelve un objeto ResponseEntity con un cuerpo de tipo
     *         ClienteExistResponse.
     */
    @GetMapping("/exist/{email}")
    public ResponseEntity<ClienteExistResponse> existe(@PathVariable String email) {

        Optional<ClienteModel> cliente = clienteService.byEmail(email);

        return ResponseEntity.ok(
                new ClienteExistResponse(cliente.isPresent()));
    }

    /**
     * La función es un controlador de solicitudes POST que crea un nuevo cliente si
     * el cliente aún no existe.
     * 
     * @param request El parámetro `request` es de tipo `ClienteRequest` y
     *                representa el cuerpo de la
     *                solicitud POST. Contiene los datos necesarios para crear un
     *                nuevo objeto `ClienteModel`.
     * @return El método devuelve un objeto ResponseEntity con el parámetro de tipo
     *         establecido en ClienteModel.
     */
    @PostMapping
    public ResponseEntity<ClienteModel> postCliente(
            @RequestBody ClienteRequest request) {

        Optional<ClienteModel> clienteOptional = clienteService.byEmail(request.getEmail());

        if (clienteOptional.isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        ClienteModel cliente = new ClienteModel();

        BeanUtils.copyProperties(request, cliente);

        cliente.setPassword(passwordEncoder.encode(request.getPassword()));

        cliente.setAdmin(false);

        clienteService.save(cliente);

        return ResponseEntity.ok(cliente);

    }

    /**
     * La función maneja una solicitud DELETE para eliminar un cliente y
     * devuelve una ResponseEntity con un valor booleano que indica el éxito de la
     * eliminación.
     * 
     * @param request El parámetro "solicitud" es de tipo "ClienteRequest" y está
     *                anotado con
     *                "@RequestBody". Esto significa que espera que el cuerpo de la
     *                solicitud se deserialice en un
     *                objeto de tipo "ClienteRequest".
     * @return El método devuelve una ResponseEntity<Boolean>.
     */
    @DeleteMapping
    public ResponseEntity<Boolean> deleteCliente(
            @RequestBody ClienteRequest request) {

        Optional<ClienteModel> clienteOptional = clienteService.byId(request.getId());

        if (clienteOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        if (!clienteService.delete(clienteOptional.get())) {
            return ResponseEntity.unprocessableEntity().build();
        }

        return ResponseEntity.ok(true);
    }

}