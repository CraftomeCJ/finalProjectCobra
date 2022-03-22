
class colorController {

    constructor() {
        this._colorList = [];
    }

    addColor(newColorName){
        const formData = new FormData();
        formData.append('colorName', newColorName)
        fetch('https://finalprojectcobra.herokuapp.com/color/add', {
            method: 'POST',
            body: formData
        }).then(function (response) {
            console.log(response.status); // Will show you the status
            if (response.ok) {
                alert("Successfully Added Color!")
                loadColor();
            }
        }).catch((error) => {
            console.error('Error:', error);
            alert("Error adding color")
        });
    }

    findColorById(deleteColorId){
        deleteColorId = parseInt(deleteColorId);
        let size = 0;
        this._colorList.forEach(item =>{
            if(item.id === deleteColorId){
                size = item.item.length;
            }
        });
        return size;
    }

    findColorByName(colorUpperCase){
        let flag = false;
        this._colorList.forEach(item =>{
            if(item.colorName === colorUpperCase){
                flag = true;
            }
        });
        return flag;
    }

    deleteColor(deleteColorName){

        fetch(`https://finalprojectcobra.herokuapp.com/color/${deleteColorName}`, {
            method : 'DELETE'
        }).then(function (response) {
            console.log(response.status); // Will show you the status
            if (response.ok) {
                alert("Successfully Delete Color!")
                loadColor();
            }
        }).catch((error) => {
            console.error('Error:', error);
            alert("Error Delete Color")
        });
    }

    displayColor() {
        let colorController = this;
        colorController._colorList = [];

        fetch('https://finalprojectcobra.herokuapp.com/color/all')
            .then((resp) => resp.json())
            .then(function (data) {
                data.forEach(function (color, index) {
                    const colorObj = {
                        id: color.idColor,
                        colorName: color.colorName,
                        item: color.item
                    };
                    colorController._colorList.push(colorObj);
                });
                colorController.renderColor()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    filterColor() {
        let colorController = this;
        colorController._colorList = [];

        fetch('https://finalprojectcobra.herokuapp.com/color/all')
            .then((resp) => resp.json())
            .then(function (data) {
                data.forEach(function (color, index) {
                    const colorObj = {
                        id: color.idColor,
                        colorName: color.colorName,
                    };
                    colorController._colorList.push(colorObj);
                });
                colorController.renderFilterColor()
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    renderColor(){
        const list1 = document.querySelector("#productColor");
        const list2 = document.querySelector("#deleteColorName");
        list1.innerHTML ="";
        list2.innerHTML ="";
        this.displayColorList(list1);
        this.displayColorList(list2);
    }

    renderFilterColor(){
        const list1 = document.querySelector("#filterColor");
        list1.innerHTML = "";
        this.displayFilterColorList(list1);
    }

    displayColorList(select){
        let option;
        option = document.createElement('option');
        option.text = "Select A Color";
        option.value = "";
        select.add(option);
        this._colorList.forEach(item =>{
            option = document.createElement('option');
            option.text=item.colorName;
            option.value=item.id;
            select.add(option);
        });
    }

    displayFilterColorList(select) {
        let option;
        option = document.createElement('option');
        option.text = "Filter By Color";
        option.value = "";
        select.add(option);
        this._colorList.forEach(item =>{
            option = document.createElement('option');
            option.text=item.colorName;
            option.value=item.id;
            select.add(option);
        })
    }


}