package org.generation.FinalProject.repository;

import org.generation.FinalProject.repository.entity.Color;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ColorRepository extends CrudRepository<Color, Integer> {

    @Query("SELECT p FROM Color p ORDER BY p.colorName ASC")
    public List<Color> findAll();

}