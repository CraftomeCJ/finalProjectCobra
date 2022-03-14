package org.generation.FinalProject.controller.dto;

public class ColorDTO {

    String colorName;

    public ColorDTO ( String colorName){
        this.colorName = colorName;
    }

    public String getColorName() { return colorName; }
    public void setColorName(String colorName) { this.colorName = colorName; }
}
