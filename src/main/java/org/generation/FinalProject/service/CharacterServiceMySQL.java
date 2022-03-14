package org.generation.FinalProject.service;


import org.generation.FinalProject.repository.CharacterRepository;
import org.generation.FinalProject.repository.entity.CharacterC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CharacterServiceMySQL implements CharacterService {

    private final CharacterRepository characterRepository;

    public CharacterServiceMySQL (@Autowired CharacterRepository characterRepository ){
        this.characterRepository = characterRepository;
    }

    @Override
    public CharacterC save (CharacterC characterC) { return characterRepository.save( characterC ); }

    @Override
    public void delete ( int idCharacter) { characterRepository.deleteById( idCharacter );}

    @Override
    public List<CharacterC> all() {
        List<CharacterC> result = new ArrayList<>();
        characterRepository.findAll().forEach(data->{
            result.add(data);
        });
        return result;
    }

    @Override
    public CharacterC findById (int idCharacter ){
        Optional<CharacterC> color = characterRepository.findById( idCharacter );
        CharacterC characterResponse = color.get();
        return characterResponse;
    }
}
