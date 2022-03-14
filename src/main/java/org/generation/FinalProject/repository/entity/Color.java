package org.generation.FinalProject.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.generation.FinalProject.controller.dto.ColorDTO;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Color {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer idColor;
    private String colorName;

    @OneToMany( fetch = FetchType.EAGER, mappedBy = "color",cascade=CascadeType.ALL )
    @JsonIgnoreProperties("color")
    private List<Item> item = new ArrayList<>();


    public Color() {}

    public Color (ColorDTO colorDTO) {
        this.colorName = colorDTO.getColorName();
    }

    public Integer getIdColor() { return idColor; }
    public void setIdColor(Integer idColor) { this.idColor = idColor; }

    public String getColorName() { return colorName; }
    public void setColorName(String colorName) { this.colorName = colorName; }

    public List<Item> getItem() {
        return item;
    }

    public void setItem(List<Item> item) {
        this.item = item;
    }
}
