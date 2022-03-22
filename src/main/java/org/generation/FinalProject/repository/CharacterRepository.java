package org.generation.FinalProject.repository;

import org.generation.FinalProject.repository.entity.CharacterC;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CharacterRepository extends CrudRepository<CharacterC, Integer> {

    @Query(" SELECT p FROM CharacterC p ORDER BY p.characterName ASC ")
    public List<CharacterC> findAll();
}
