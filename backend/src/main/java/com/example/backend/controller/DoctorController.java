package com.example.backend.controller;

import com.example.backend.model.Doctor;
import com.example.backend.repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*" )
@RestController
@RequestMapping("/api/v1/doctors")
public class DoctorController {

    @Autowired
    private DoctorRepo doctorRepo;

    //get all doctors
    @GetMapping
    public List<Doctor> getAllDoctors(){
        return doctorRepo.findAll();
    }
    //create doctor rest api
    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor){
        return doctorRepo.save(doctor);
    }
}
