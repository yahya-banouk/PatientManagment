package com.example.backend.controller;

import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import com.example.backend.model.Suivi;
import com.example.backend.service.IPatientService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin("*" )
@RestController
@RequestMapping(value = "/api")
public class PatientController {

    private final IPatientService patientService;

    public PatientController(IPatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping("/patients")
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @GetMapping("/patients/{patientId}")
    public Patient getPatient(@PathVariable String patientId) {
        return patientService.getPatient(patientId);
    }

    @PostMapping("/patients")
    public Patient addPatient(@RequestBody @Valid Patient patient) {
        return patientService.addPatient(patient);
    }

    @PutMapping("/patients/{patientId}")
    public Patient updatePatient(@RequestBody @Valid Patient patient, @PathVariable String patientId) {
        return patientService.updatePatient(patient, patientId);
    }

    @DeleteMapping("/patients/{patientId}")
    void deletePatient(@PathVariable String patientId) {
        patientService.deletePatient(patientId);
    }

    // Get all suivi for patient
    @GetMapping("/patients/{patientId}/suivis")
    public List<Suivi> getAllSuivis(@PathVariable String patientId) {
        return patientService.getAllSuivis(patientId);
    }

    // get Doctors for patient
    @GetMapping("/patients/{patientId}/doctors")
    public List<Doctor> getAllDoctors(@PathVariable String patientId) {
        return patientService.getAllDoctors(patientId);
    }
}
