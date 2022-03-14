package org.generation.FinalProject.controller;


import org.generation.FinalProject.controller.dto.ColorDTO;
import org.generation.FinalProject.repository.entity.Color;
import org.generation.FinalProject.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/color")
public class ColorController {

    final ColorService colorService;

    public ColorController(@Autowired ColorService colorService) {
        this.colorService = colorService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Color>getColor() { return colorService.all(); }

    @CrossOrigin
    @GetMapping("/{id}")
    public Color findColorById (@PathVariable Integer id ) { return colorService.findById( id); }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void delete (@PathVariable Integer id ) { colorService.delete( id );}


    @CrossOrigin
    @PostMapping("/add")
    public void save ( @RequestParam ( name = "colorName", required = true ) String colorName ) throws IOException {
        ColorDTO colorDTO = new ColorDTO(colorName);
        colorService.save( new Color(colorDTO));
    }




}
