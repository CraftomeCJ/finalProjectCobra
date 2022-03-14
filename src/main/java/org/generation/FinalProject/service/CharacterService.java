package org.generation.FinalProject.service;

import org.generation.FinalProject.repository.entity.CharacterC;

import java.util.List;

public interface CharacterService {
    CharacterC save (CharacterC character) ;

    void delete ( int  idCharacter );

    List<CharacterC> all();

    CharacterC findById (int idCharacter );
}
