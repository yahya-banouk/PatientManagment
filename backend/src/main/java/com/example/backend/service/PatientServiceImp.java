package com.example.backend.service;

import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import com.example.backend.model.Suivi;
import com.example.backend.repository.PatientRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class PatientServiceImp implements IPatientService {

    private final PatientRepository patientRepository;

    public PatientServiceImp(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Patient getPatient(String id) {
        return patientRepository.findPatientByEmail(id).orElse(null);
    }

    @Override
    public Patient addPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public Patient updatePatient(Patient patient, String patientId) {
        // find Patient by id
        patientRepository.findPatientByEmail(patientId).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Patient not found with id : " + patientId));
        // Update patient
        return patientRepository.save(patient);
    }

    @Override
    public void deletePatient(String id) {
        patientRepository.deletePatientByEmail(id);
    }

    @Override
    public List<Suivi> getAllSuivis(String patientId) {
        // find Patient by id
        Patient patient = patientRepository.findPatientByEmail(patientId).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Patient not found with id : " + patientId));
        // Get all suivis for patient
        return patient.getSuivis().stream().toList();
    }

    @Override
    public List<Doctor> getAllDoctors(String patientId) {
        // find Patient by id
        Patient patient = patientRepository.findPatientByEmail(patientId).
                orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Patient not found with id : " + patientId));
        // Get all doctors for patient
        return patient.getDoctors().stream().toList();
    }
}
