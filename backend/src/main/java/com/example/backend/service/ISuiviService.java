package com.example.backend.service;

import com.example.backend.model.Patient;
import com.example.backend.model.Suivi;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ISuiviService {
    List<Suivi> getAllPatientSuivis(Patient patient);

    Suivi getSuivi(Long id);
    List<Suivi> getAllSuivis();

    Suivi addSuivi(Suivi suivi);

    Suivi updateSuivi(Suivi suivi, Long suivitId);

    void deleteSuivi(Long id);


}