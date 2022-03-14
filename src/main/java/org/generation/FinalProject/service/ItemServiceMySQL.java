package org.generation.FinalProject.service;

import org.generation.FinalProject.repository.ItemRepository;
import org.generation.FinalProject.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceMySQL implements ItemService {

    private final ItemRepository itemRepository;


    public ItemServiceMySQL(@Autowired ItemRepository itemRepository) { this.itemRepository = itemRepository;}

    @Override
    public Item save(Item item) {
        return itemRepository.save( item );
    }

    @Override
    public void delete(int itemId) {
        itemRepository.deleteById( itemId );
    }

    @Override
    public List<Item> all() {
        List<Item> result = new ArrayList<>();
        itemRepository.findAll().forEach(data ->{
            result.add(data);
        });
        return result;
    }

    @Override
    public Item findById(int itemId) {
        Optional<Item> item = itemRepository.findById( itemId );
        Item itemResponse = item.get();
        return itemResponse;
    }
}
