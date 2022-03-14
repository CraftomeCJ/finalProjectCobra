package org.generation.FinalProject.service;

import org.generation.FinalProject.repository.ColorRepository;
import org.generation.FinalProject.repository.entity.Color;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ColorServiceMySQL implements ColorService{

    private final ColorRepository colorRepository;

    public ColorServiceMySQL (@Autowired ColorRepository colorRepository) {
        this.colorRepository = colorRepository;
    }

    @Override
    public Color save (Color color) { return colorRepository.save( color ); }

    @Override
    public void delete ( int idColor) { colorRepository.deleteById( idColor );}

    @Override
    public List<Color> all() {
        List<Color> result = new ArrayList<>();
        colorRepository.findAll().forEach(data->{
            result.add(data);
        });
        return result;
    }

    @Override
    public Color findById ( int idColor ){
        Optional<Color> color = colorRepository.findById( idColor );
        Color colorResponse = color.get();
        return colorResponse;
    }


}
