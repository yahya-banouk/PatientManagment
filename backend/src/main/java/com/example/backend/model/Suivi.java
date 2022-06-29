package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Entity
@Table(name = "Suivi")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Suivi implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotEmpty(message = "titre cannot be empty!!")
    @Column(nullable = false)
    private String titre;
    @NotEmpty(message = "sommeil cannot be empty!!")
    @Column(nullable = false)
    private String sommeil;
    @NotEmpty(message = "stress cannot be empty!!")
    @Column(nullable = false)
    private String stress;
    @NotEmpty(message = "fatigue cannot be empty!!")
    @Column(nullable = false)
    private String fatigue;
    @NotEmpty(message = "tristesse cannot be empty!!")
    @Column(nullable = false)
    private String tristesse;



    public Suivi( String titre, String sommeil, String stress,String fatigue, String tristesse) {
        this.titre = titre;
        this.sommeil = sommeil;
        this.stress = stress;
        this.fatigue = fatigue;
        this.tristesse = tristesse;


    }
}
