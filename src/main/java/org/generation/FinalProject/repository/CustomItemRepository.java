package org.generation.FinalProject.repository;


import org.generation.FinalProject.repository.entity.Item;
import org.springframework.data.jpa.repository.Query;

import java.awt.print.Pageable;
import java.util.List;

public interface CustomItemRepository {

    @Query("SELECT p from Item p "+
            "Where CONCAT(p.name, p.description, p.characterC.characterName, p.color.colorName ,p.price) " +
            "like %?1%")
    public List<Item> findAllByKeyword(String keyword);

    @Query(nativeQuery= true, value= "SELECT * FROM Item ORDER BY idItem DESC LIMIT 10")
    public List<Item> newItem();

    @Query(nativeQuery= true, value= "SELECT * FROM Item ORDER BY price ASC LIMIT 10")
    public List<Item> hotItem();

    @Query(nativeQuery= true, value= "SELECT * FROM Item ORDER BY idColor DESC LIMIT 10")
    public List<Item> topRatedItem();

    @Query(nativeQuery= true, value= "SELECT * FROM Item WHERE idCharacter IN (14, 17)")
    public List<Item> discountItem();

    @Query(nativeQuery= true, value= "SELECT * FROM Item ORDER BY RAND() LIMIT 13")
    public List<Item> randomItem();


}
