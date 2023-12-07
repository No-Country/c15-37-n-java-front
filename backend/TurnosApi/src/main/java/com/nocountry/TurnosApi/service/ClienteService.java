package com.nocountry.TurnosApi.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.nocountry.TurnosApi.model.ClienteModel;
import com.nocountry.TurnosApi.repository.IClienteRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final IClienteRepository clienteRepository;

    public Optional<ClienteModel> byId(Long id) {
        return clienteRepository.findById(id);
    }

    public Optional<ClienteModel> byEmail(String email) {
        return clienteRepository.findByEmail(email);
    }

    public List<ClienteModel> getClientes() {
        return clienteRepository.findAll().stream()
                .filter(cliente -> !cliente.isAdmin())
                .collect(Collectors.toList());
    }

}