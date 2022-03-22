package org.generation.FinalProject.service;

import org.generation.FinalProject.repository.entity.Item;

import java.util.List;

public interface ItemService {

    Item save ( Item item) ;

    void delete ( int  itemId );

    List<Item> all();

    Item findById ( int itemId );

    List<Item> search(String keyword);

    List<Item> randomItem();

    List<Item> newItem();

    List<Item> hotItem();

    List<Item> topRatedItem();

    List<Item> discountItem();

    List<Item> findAllByIdCharacterIs(int idCharacter);

    List<Item> findAllByIdColorIs(int idColor);

    List<Item> findAllByIdCharacterIsAndIdColorIs( int idCharacter, int idColor );



}
