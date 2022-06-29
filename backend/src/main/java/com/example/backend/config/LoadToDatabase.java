package com.example.backend.config;

import com.example.backend.model.Doctor;
import com.example.backend.model.Patient;
import com.example.backend.model.Suivi;
import com.example.backend.repository.DoctorRepo;
import com.example.backend.repository.PatientRepository;
import com.example.backend.repository.SuiviRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class LoadToDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadToDatabase.class);
    private final Suivi suivi = new Suivi("Titre", "sommeil","stress", "fatigue",  "tristesse");
    private final Patient patient = new Patient("nom", "prenom", "cin", "date", "mail@mail.com", "homme", "0666666666", "password");
    private final Doctor docrtor = new Doctor("doctor@doctor.com", "doctor", "doctor", "doctor", "doctor", "doctor", "doctor");

    @Bean
    CommandLineRunner initDatabase(SuiviRepository suiviRepository, PatientRepository patientRepository, DoctorRepo docrtorRepository) {
        return args -> {
            log.info("Preloading " + suiviRepository.save(suivi));
            log.info("Preloading " + patientRepository.save(patient));
            log.info("Preloading " + docrtorRepository.save(docrtor));

        };
    }
}
