package com.nocountry.TurnosApi.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.nocountry.TurnosApi.model.ClienteModel;
import com.nocountry.TurnosApi.repository.IClienteRepository;

import lombok.RequiredArgsConstructor;

/**
 * La clase `ClienteService` es un servicio que proporciona métodos
 * para recuperar datos de clientes de
 * un repositorio, filtrando clientes administradores.
 */
@Service
@RequiredArgsConstructor
public class ClienteService {

    private final IClienteRepository clienteRepository;

    /**
     * La función devuelve un objeto Opcional que contiene un ClienteModel basado en
     * la identificación
     * dada.
     * 
     * @param id El parámetro "id" es de tipo Long y representa el identificador
     *           único de un cliente.
     * @return El método devuelve un objeto opcional que contiene un ClienteModel.
     */
    public Optional<ClienteModel> byId(Long id) {
        return clienteRepository.findById(id);
    }

    /**
     * La función devuelve un objeto Opcional que contiene un ClienteModel si se
     * encuentra un correo
     * electrónico coincidente en el clienteRepository.
     * 
     * @param email El parámetro "correo electrónico" es una Cadena que representa
     *              la dirección de
     *              correo electrónico de un cliente.
     * @return El método devuelve un objeto opcional que contiene un ClienteModel.
     */
    public UserDetails byEmail(String email) {
        return clienteRepository.findByEmail(email);
    }

    /**
     * La función devuelve una lista de objetos ClienteModel
     * del clienteRepository, filtrando cualquier
     * objeto donde la propiedad isAdmin sea falsa.
     * 
     * @return El método devuelve una lista de objetos ClienteModel.
     */
    public List<ClienteModel> getClientes() {
        return clienteRepository.findAll().stream()
                .filter(cliente -> !cliente.isAdmin())
                .collect(Collectors.toList());
    }

    public Optional<ClienteModel> findByEmail(String email) {
        return null;
    }
}