package org.generation.FinalProject.controller.dto;

public class ItemDTO {

    private String name;
    private String description;
    private String imageUrl;
    private double price;
    private int idCharacter;
    private int idColor;

    public ItemDTO ( String name, String description, String imageUrl, double price, int idCharacter, int idColor ) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.idCharacter = idCharacter;
        this.idColor = idColor;
    }



    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public int getIdCharacter() { return idCharacter; }
    public void setIdCharacter(int idCharacter) { this.idCharacter = idCharacter; }

    public int getIdColor() { return idColor; }
    public void setIdColor(int idColor) { this.idColor = idColor; }
}
