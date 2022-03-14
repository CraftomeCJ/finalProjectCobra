
class productController {

    constructor() {
        this._items = [];
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





















}