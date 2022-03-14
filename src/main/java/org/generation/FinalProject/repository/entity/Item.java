package org.generation.FinalProject.repository.entity;

import org.generation.FinalProject.controller.dto.ItemDTO;
import org.hibernate.FetchMode;
import org.hibernate.annotations.Fetch;
import org.springframework.boot.autoconfigure.web.WebProperties;

import javax.persistence.*;


@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idItem;
    private String name;
    private String description;
    private String imageUrl;
    private double price;
    private Integer idCharacter;
    private Integer idColor;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "idColor", referencedColumnName = "idColor",  insertable = false, updatable = false)
    private Color color;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "idCharacter", referencedColumnName = "idCharacter",  insertable = false, updatable = false)
    private CharacterC characterC;




    public Item() {}

    public Item( ItemDTO itemDTO){
        this.name = itemDTO.getName();
        this.description = itemDTO.getDescription();
        this.imageUrl = itemDTO.getImageUrl();
        this.price = itemDTO.getPrice();
        this.idCharacter = itemDTO.getIdCharacter();
        this.idColor = itemDTO.getIdColor();
    }

    public Integer getIdItem() { return idItem; }
    public void setIdItem(Integer idItem) { this.idItem = idItem; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public Integer getIdCharacter() { return idCharacter; }
    public void setIdCharacter(int idCharacter) { this.idCharacter = idCharacter; }

    public Integer getIdColor() { return idColor; }
    public void setIdColor(int idColor) { this.idColor = idColor; }

    public String getColorName() {
        return color.getColorName();
    }

    public String getCharacterC() {
        return characterC.getCharacterName();
    }

    @Override
    public String toString(){
        return "Item { ID : " + idItem + ", Description : " + description + ", imageUrl : " + imageUrl +
                ", Price  : " + price + ", Character ID : " + idCharacter + ", Color ID : " + idColor + " }";
    }

}
