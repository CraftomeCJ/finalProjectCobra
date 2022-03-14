package org.generation.FinalProject.service;

import org.generation.FinalProject.repository.entity.Color;

import java.util.List;

public interface ColorService {
    Color save (Color color) ;

    void delete ( int  idColor );

    List<Color> all();

    Color findById ( int idColor );
}
