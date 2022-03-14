//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package org.generation.FinalProject.controller;

import java.io.IOException;
import org.generation.FinalProject.controller.dto.CharacterDTO;
import org.generation.FinalProject.repository.entity.CharacterC;
import org.generation.FinalProject.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/character"})
public class CharacterController {
    final CharacterService characterService;

    public CharacterController(@Autowired CharacterService characterService) {
        this.characterService = characterService;
    }

    @CrossOrigin
    @GetMapping({"/all"})
    public Iterable<CharacterC> getCharacter() {
        return this.characterService.all();
    }

    @CrossOrigin
    @GetMapping({"/{id}"})
    public CharacterC findCharacterById(@PathVariable Integer id) {
        return this.characterService.findById(id);
    }

    @CrossOrigin
    @DeleteMapping({"/{id}"})
    public void delete(@PathVariable Integer id) {
        this.characterService.delete(id);
    }

    @CrossOrigin
    @PostMapping({"/add"})
    public void save(@RequestParam(name = "characterName",required = true) String characterName) throws IOException {
        CharacterDTO characterDTO = new CharacterDTO(characterName);
        this.characterService.save(new CharacterC(characterDTO));
    }
}
