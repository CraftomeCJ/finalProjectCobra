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

//  Search keyword for Name, Desc ,price
    @Override
    public List<Item> search(String keyword) {
        List<Item> result = new ArrayList<>();
        if( keyword != null ){
            itemRepository.findAllByKeyword(keyword).forEach(data ->{
                result.add(data);
            });
        } else {
            itemRepository.findAll().forEach(data ->{
                result.add(data);
            });
        }

        return result;
    }

//  find Item by Id
    @Override
    public Item findById(int itemId) {
        Optional<Item> item = itemRepository.findById( itemId );
        Item itemResponse = item.get();
        return itemResponse;
    }

//  random 10 item
    @Override
    public List<Item> randomItem() {
        List<Item> result = new ArrayList<>();
        itemRepository.randomItem().forEach(data ->{
            result.add(data);
        });
        return result;
    }

//   Display 10 latest product
    @Override
    public List<Item> newItem() {
        List<Item> result = new ArrayList<>();
        itemRepository.newItem().forEach(data ->{
            result.add(data);
        });
        return result;
    }

//  Display Hot Sales Item
    @Override
    public List<Item> hotItem() {
        List<Item> result = new ArrayList<>();
        itemRepository.hotItem().forEach(data ->{
            result.add(data);
        });
        return result;
    }

//  Display Top Rate Item
    @Override
    public List<Item> topRatedItem() {
        List<Item> result = new ArrayList<>();
        itemRepository.topRatedItem().forEach(data ->{
            result.add(data);
        });
        return result;
    }

//  Display Discount Item
    @Override
    public List<Item> discountItem() {
        List<Item> result = new ArrayList<>();
        itemRepository.discountItem().forEach(data ->{
            result.add(data);
        });
        return result;
    }

    //find Item by IdCharacter
    @Override
    public List<Item> findAllByIdCharacterIs(int idCharacter) {
        List<Item> result = new ArrayList<>();
        itemRepository.findAllByIdCharacterIs(idCharacter).forEach(data -> {
            result.add(data);
        });
        return result;
    }

    //find Item by IdColor
    @Override
    public List<Item> findAllByIdColorIs(int idColor) {
        List<Item> result = new ArrayList<>();
        itemRepository.findAllByIdColorIs(idColor).forEach(data -> {
            result.add(data);
        });
        return result;
    }

    @Override
    public List<Item> findAllByIdCharacterIsAndIdColorIs( int idCharacter, int idColor ) {
        List<Item> result = new ArrayList<>();
        itemRepository.findAllByIdCharacterIsAndIdColorIs( idCharacter, idColor).forEach(data -> {
            result.add(data);
        });
        return result;
    }





}
