
class characterController{

    constructor() {
        this._characterList = [];
    }

    addCharacter(newCharacterName) {
        const formData = new FormData();
        formData.append('characterName', newCharacterName)
        fetch('http://localhost:8080/character/add', {
            method: 'POST',
            body: formData
        }).then(function (response) {
            console.log(response.status); // Will show you the status
            if (response.ok) {
                alert("Successfully Added Character!")
                loadCharacter();
            }
        }).catch((error) => {
            console.error('Error:', error);
            alert("Error adding item to Character")
        });
    }

    findCharacter(deleteCharacterName){
        let size = 0;
        this._characterList.forEach(item =>{
            if(item.id == deleteCharacterName){
                size = item.item.length;
            }
        });
        return size;
    }

    deleteCharacter(deleteCharacterName){

        fetch(`http://localhost:8080/character/${deleteCharacterName}`, {
            method : 'DELETE'
        }).then(function (response) {
            console.log(response.status); // Will show you the status
            if (response.ok) {
                alert("Successfully Delete Character!")
                loadCharacter();
            }
        }).catch((error) => {
            console.error('Error:', error);
            alert("Error Delete Character")
        });
    }

    displayCharacter() {

        let characterController = this;
        characterController._characterList = [];

        fetch('http://localhost:8080/character/all')
            .then((resp) => resp.json())
            .then(function (data) {
                data.forEach(function (character, index) {
                    const characterObj = {
                        id: character.idCharacter,
                        characterName: character.characterName,
                        item: character.item
                    };
                    characterController._characterList.push(characterObj);
                });
                characterController.renderCharacter()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    filterCharacter() {
        let characterController = this;
        characterController._characterList = [];

        fetch('http://localhost:8080/character/all')
            .then((resp) => resp.json())
            .then(function (data) {
                data.forEach(function (character, index) {
                    const characterObj = {
                        id: character.idCharacter,
                        characterName: character.characterName,
                    };
                    characterController._characterList.push(characterObj);
                });
                characterController.renderFilterCharacter()
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    renderCharacter() {
        const list1 = document.querySelector("#productCharacter");
        const list2 = document.querySelector("#deleteCharacterName");
        list1.innerHTML = "";
        list2.innerHTML = "";
        this.displayCharacterList(list1);
        this.displayCharacterList(list2);
    }

    renderFilterCharacter () {
        const list1 = document.querySelector("#filterCharacter");
        list1.innerHTML = "";
        this.displayFilterCharacterList(list1);
    }

    displayCharacterList(select){
        let option;
        option = document.createElement('option');
        option.text = "Select A Character";
        option.value = "";
        select.add(option);
        this._characterList.forEach(item =>{
            option = document.createElement('option');
            option.text=item.characterName;
            option.value=item.id;
            select.add(option);
        });
    }

    displayFilterCharacterList(select) {
        let option;
        option = document.createElement('option');
        option.text = "Filter By Character";
        option.value = "";
        select.add(option);
        this._characterList.forEach(item => {
            option = document.createElement('option');
            option.text = item.characterName;
            option.value = item.id;
            select.add(option);
        });
    }

}