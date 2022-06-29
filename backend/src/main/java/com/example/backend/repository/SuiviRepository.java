package com.example.backend.repository;

import com.example.backend.model.Suivi;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SuiviRepository extends JpaRepository<Suivi, Long> {
}
