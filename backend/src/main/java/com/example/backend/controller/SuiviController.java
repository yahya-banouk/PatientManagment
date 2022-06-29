package com.example.backend.controller;

import com.example.backend.model.Suivi;
import com.example.backend.service.ISuiviService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("*" )
@RestController
@RequestMapping(value = "/api")
public class SuiviController {
    private final ISuiviService suivitService;

    public SuiviController(ISuiviService suivitService) {
        this.suivitService = suivitService;
    }
    @GetMapping("/suivis")
    public List<Suivi> GetSuivis(){return suivitService.getAllSuivis();};

    @GetMapping("/suivis/{suivitId}")
    public Suivi getSuivi(@PathVariable Long suivitId) {
        return suivitService.getSuivi(suivitId);
    }

    @PostMapping("/suivis")
    public Suivi addSuivi(@RequestBody @Valid Suivi suivit) {
        return suivitService.addSuivi(suivit);
    }

    @PutMapping("/suivis/{suivitId}")
    public Suivi updateSuivi(@RequestBody Suivi suivit, @PathVariable Long suivitId) {
        return suivitService.updateSuivi(suivit, suivitId);
    }

    @DeleteMapping("/suivits/{suivitId}")
    void deleteSuivi(@PathVariable Long suivitId) {
        suivitService.deleteSuivi(suivitId);
    }
}
