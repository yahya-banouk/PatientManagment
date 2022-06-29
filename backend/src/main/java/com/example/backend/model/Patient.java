package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "patient")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Patient {

    @NotEmpty(message = "stress cannot be empty!!")
    private String nom;
    @NotEmpty(message = "stress cannot be empty!!")
    private String prenom;
    private String cin;
    private String date_naissance;
    @Id
    @NotEmpty(message = "stress cannot be empty!!")
    private String email;
    private String sexe;
    private String tel;
    @NotEmpty(message = "stress cannot be empty!!")
    private String password;

    @OneToMany(
            targetEntity = Suivi.class,
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )
    @JoinColumn(
            name = "patient_id",
            referencedColumnName = "email"
    )
    private Set<Suivi> suivis;



    @OneToMany(
            targetEntity = Doctor.class,
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )
    @JoinColumn
            (
                    name = "patient_id",
                    referencedColumnName = "email"
            )
    private Set<Doctor> doctors;

    public Patient( String nom, String prenom, String cin, String date_naissance, String email, String sexe, String tel, String password) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.cin = cin;
        this.date_naissance = date_naissance;
        this.sexe = sexe;
        this.tel = tel;
    }
}
