package org.generation.FinalProject.repository.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.generation.FinalProject.controller.dto.CharacterDTO;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="charactertable")
public class CharacterC {

    @Id
    @GeneratedValue ( strategy = GenerationType.IDENTITY )
    Integer idCharacter;
    String characterName;

    @OneToMany( fetch = FetchType.EAGER, mappedBy = "characterC",cascade=CascadeType.ALL )
    @JsonIgnoreProperties("characterC")
    private List<Item> item = new ArrayList<>();


//    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "character")
//    private Item item;

    public CharacterC() {}

    public CharacterC(CharacterDTO characterDTO) {
        this.characterName = characterDTO.getCharacterName();
    }

    public Integer getIdCharacter() { return idCharacter; }
    public void setIdCharacter(Integer idCharacter) { this.idCharacter = idCharacter; }

    public String getCharacterName() { return characterName; }
    public void setCharacterName(String characterName) { this.characterName = characterName; }

    public List<Item> getItem() {
        return item;
    }

    public void setItem(List<Item> item) {
        this.item = item;
    }


}
