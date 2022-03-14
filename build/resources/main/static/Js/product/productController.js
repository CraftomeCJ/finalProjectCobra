
class productController {

    constructor() {
        //this._items = [];
        this._colorList=[];
        this._characterList=[];
    }

    addProduct(name, idCharacterC, idColor, description, price, imageUrl, imageObject){
        const formData = new FormData();
        formData.append('name', name);
        formData.append('idCharacter',idCharacterC);
        formData.append('idColor',idColor);
        formData.append('description',description);
        formData.append('price',price);
        formData.append('imageUrl',imageUrl);
        formData.append('imagefile',imageObject);


        fetch('http://localhost:8080/item/add', {
            method: 'POST',
            body: formData
        }).then(function (response) {
            console.log(response.status); // Will show you the status
            if (response.ok) {
                alert("Successfully Added Product!")
            }
        }).catch((error) => {
            console.error('Error:', error);
            alert("Error adding item to Product")
        });
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

    addColor(newColorName){
        const formData = new FormData();
        formData.append('colorName', newColorName)
        fetch('http://localhost:8080/color/add', {
            method: 'POST',
            body: formData
        }).then(function (response) {
            console.log(response.status); // Will show you the status
            if (response.ok) {
                alert("Successfully Added Character!")
                loadColor();
            }
        }).catch((error) => {
            console.error('Error:', error);
            alert("Error adding item to Character")
        });
    }

    displayCharacter() {

        let productController = this;
        productController._characterList = [];

        fetch('http://localhost:8080/character/all')
            .then((resp) => resp.json())
            .then(function (data) {
                data.forEach(function (character, index) {
                    const characterObj = {
                        id: character.idCharacter,
                        characterName: character.characterName
                    };
                    productController._characterList.push(characterObj);
                });
                productController.renderCharacter()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    renderCharacter() {
        const select = document.querySelector("#productCharacter");
        select.innerHTML ="";
        let option;
        option = document.createElement('option');
        option.text = "Select Character";
        option.value = "";
        select.add(option);
        this._characterList.forEach(item =>{
            option = document.createElement('option');
            option.text=item.characterName;
            option.value=item.id;
            select.add(option);
        });
    }

    displayColor() {
        let productController = this;
        productController._colorList = [];

        fetch('http://localhost:8080/color/all')
            .then((resp) => resp.json())
            .then(function (data) {
                data.forEach(function (color, index) {
                    color.id
                    const colorObj = {
                        id: color.idColor,
                        colorName: color.colorName
                    };
                    productController._colorList.push(colorObj);
                });
                productController.renderColor()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    renderColor(){
        const select = document.querySelector("#productColor");
        select.innerHTML ="";
        let option;
        option = document.createElement('option');
        option.text = "Select Color";
        option.value = "";
        select.add(option);
        this._colorList.forEach(item =>{
            option = document.createElement('option');
            option.text=item.colorName;
            option.value=item.id;
            select.add(option);
        });
    }

















}