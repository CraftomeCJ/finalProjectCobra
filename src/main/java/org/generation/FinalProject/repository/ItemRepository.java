package org.generation.FinalProject.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.generation.FinalProject.repository.entity.Item;

import java.util.List;

public interface ItemRepository extends  CrudRepository<Item, Integer>, CustomItemRepository {

    public List<Item> findAllByIdCharacterIs (Integer idCharacter);

    public List<Item> findAllByIdColorIs (Integer idColor);

    public List<Item> findAllByIdCharacterIsAndIdColorIs ( Integer idCharacter, Integer idColor);



}
