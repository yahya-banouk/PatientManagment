package com.example.backend.service;

import com.example.backend.model.Patient;
import com.example.backend.model.Suivi;
import com.example.backend.repository.SuiviRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class SuiviServiceImp implements ISuiviService {
    private final SuiviRepository suiviRepository;

    public SuiviServiceImp(SuiviRepository suiviRepository) {
        this.suiviRepository = suiviRepository;
    }

    @Override
    public List<Suivi> getAllPatientSuivis(Patient patient) {
        return null;
    }

    @Override
    public Suivi getSuivi(Long id) {
        Suivi suivi = suiviRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                "Suivi not found with id : " + id));
        return suivi;
    }
    @Override
    public  List<Suivi> getAllSuivis(){
        return
        suiviRepository.findAll();
    }
    @Override
    public Suivi addSuivi(Suivi suivi) {
        return suiviRepository.save(suivi);
    }

    @Override
    public Suivi updateSuivi(Suivi suivi, Long suiviId) {
        // find Suivi by id
        Suivi suiviToUpdate = suiviRepository.findById(suiviId).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                "Suivi not found with id : " + suiviId));
        // Update suiviToUpdate with suivi
        return suiviRepository.save(suivi);
    }

    @Override
    public void deleteSuivi(Long id) {
        suiviRepository.deleteById(id);
    }

}