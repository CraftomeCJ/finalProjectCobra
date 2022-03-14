package org.generation.FinalProject.controller.dto;

public class CharacterDTO {

    String characterName;

    public CharacterDTO( String characterName) {
        this.characterName = characterName;
    }

    public String getCharacterName() { return characterName; }

    public void setCharacterName(String characterName) { this.characterName = characterName; }
}
