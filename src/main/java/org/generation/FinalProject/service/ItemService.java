package org.generation.FinalProject.service;

import org.generation.FinalProject.repository.entity.Item;

import java.util.List;

public interface ItemService {

    Item save ( Item item) ;

    void delete ( int  itemId );

    List<Item> all();

    Item findById ( int itemId );


}
