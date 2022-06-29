package com.example.backend.service;

import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import com.example.backend.model.Suivi;
import org.springframework.stereotype.Service;

import java.util.List;

public interface IPatientService {

    Patient getPatient(String id);

    Patient addPatient(Patient patient);

    Patient updatePatient(Patient patient, String patientId);

    void deletePatient(String id);

    List<Patient> getAllPatients();

    List<Suivi> getAllSuivis(String patientId);

    List<Doctor> getAllDoctors(String patientId);
}
