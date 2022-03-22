package org.generation.FinalProject.controller;

import org.generation.FinalProject.component.FileUploadUtil;
import org.generation.FinalProject.controller.dto.ItemDTO;
import org.generation.FinalProject.repository.entity.Item;
import org.generation.FinalProject.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/item")
public class ItemController {

    @Value("${image.folder}")
    private String imageFolder;

    final ItemService itemService;

    public ItemController(@Autowired ItemService itemService) {
        this.itemService = itemService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Item>getItems(){

        return itemService.all();
    }

    @CrossOrigin
    @GetMapping("/search/{item}")
    public Iterable<Item> searchItem( @PathVariable String item) {
        return itemService.search(item);
    }

    @CrossOrigin
    @GetMapping( "/{id}" )
    public Item findItemById( @PathVariable Integer id )
    {
        return itemService.findById( id );
    }

    @CrossOrigin
    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(  @RequestParam(name="name", required = true) String name,
                       @RequestParam(name="idCharacter", required = true) int idCharacter,
                       @RequestParam(name="idColor", required = true) int idColor,
                       @RequestParam(name="description", required = true) String description,
                       @RequestParam(name="price", required = true) double price,
                       @RequestParam(name="imageUrl", required = true) String imageUrl,
                       @RequestParam("imagefile") MultipartFile multipartFile) throws IOException {
        System.out.println("here");
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        FileUploadUtil.saveFile(imageFolder, fileName, multipartFile);

        String fullPath = imageFolder + '/' + imageUrl;
        ItemDTO itemDto = new ItemDTO( name, description, fullPath, price, idCharacter, idColor);
        itemService.save(new Item(itemDto));
    }

    @CrossOrigin
    @GetMapping("/random")
    public Iterable<Item> randomItem() {
        return itemService.randomItem();
    }

    @CrossOrigin
    @GetMapping("/newProduct")
    public Iterable<Item> newItem() {
        return itemService.newItem();
    }

    @CrossOrigin
    @GetMapping("/hotProduct")
    public Iterable<Item> hotItem() {
        return itemService.hotItem();
    }

    @CrossOrigin
    @GetMapping("/topRatedProduct")
    public Iterable<Item> topRatedItem() {
        return itemService.topRatedItem();
    }

    @CrossOrigin
    @GetMapping("/discountProduct")
    public Iterable<Item> discountItem() {
        return itemService.discountItem();
    }

    @CrossOrigin
    @GetMapping( "/findItemByCharacter/{id}" )
    public Iterable<Item> findAllByIdCharacterIs( @PathVariable Integer id )
    {
        return itemService.findAllByIdCharacterIs( id );
    }

    @CrossOrigin
    @GetMapping( "/findItemByColor/{id}" )
    public Iterable<Item> findAllByIdColorIs( @PathVariable Integer id )
    {
        return itemService.findAllByIdColorIs( id );
    }

    @CrossOrigin
    @GetMapping( "/{idCharacter}/{idColor}" )
    public Iterable<Item> findAllByIdCharacterIsAndIdColorIs ( @PathVariable Integer idCharacter, @PathVariable Integer idColor)
    {
        return itemService.findAllByIdCharacterIsAndIdColorIs( idCharacter, idColor);
    }






}
