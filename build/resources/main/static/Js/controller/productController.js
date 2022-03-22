
let htmlInnerText = "";
let idFordisplay = "";

class productController {

    constructor() {
        this._items = [];
    }

    //  Add Product
    addProduct(name, idCharacterC, idColor, description, price, imageUrl, imageObject){
        const formData = new FormData();
        formData.append('name', name);
        formData.append('idCharacter',idCharacterC);
        formData.append('idColor',idColor);
        formData.append('description',description);
        formData.append('price',price);
        formData.append('imageUrl',imageUrl);
        formData.append('imagefile',imageObject);


        fetch('https://finalprojectcobra.herokuapp.com/item/add', {
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

    // For homePage
    displayTenRandomProduct() {
        let productController = this;
        productController._items = [];

        fetch('https://finalprojectcobra.herokuapp.com/item/random')
            .then((resp) => resp.json())
            .then(function (data) {
                data.forEach(function (item, index) {
                    const itemObj = {
                        id: item.idItem,
                        name: item.name,
                        imageUrl: item.imageUrl,
                        price: item.price
                    };
                    productController._items.push(itemObj);
                });
                productController.renderItem()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //  All Product
    displayProduct() {
        let productController = this;
        productController._items = [];
        const url ='https://finalprojectcobra.herokuapp.com/item/all';
        productController.dataFetch(url);

    }

    //  Search by Keyword
    searchProduct(searchData){
        const productController = this;
        productController._items = [];
        const url = `https://finalprojectcobra.herokuapp.com/search/${searchData}`;
        productController.dataFetch(url);
    }

    //  display new/hot/topRate item
    displayBy(localStorageData) {
        const productController = this;
        productController._items = [];
        const url = `https://finalprojectcobra.herokuapp.com/item/${localStorageData}`;
        productController.dataFetch(url)

    }

    //  filter by
    filterBy(filterCharacter, filterColor , sort){
        const productController = this;
        productController._items = [];
        if(filterCharacter === "" && filterColor ==="" ) {
            const url = `https://finalprojectcobra.herokuapp.com/item/all`;
            productController.dataFetch(url, sort)
            return
        }
        if(filterCharacter === ""){
            const url = `https://finalprojectcobra.herokuapp.com/item/findItemByColor/${filterColor}`;
            productController.dataFetch(url, sort)
            return;
        }
        if(filterColor === "") {
            const url = `https://finalprojectcobra.herokuapp.com/item/findItemByCharacter/${filterCharacter}`;
            productController.dataFetch(url, sort)
            return;
        }
        const url = `https://finalprojectcobra.herokuapp.com/item/${filterCharacter}/${filterColor}`;
        productController.dataFetch(url, sort)


    }

    //  sort Product
    sortProduct(sort) {
        const item = this._items;
        if ( sort === "" ) return;
        if ( sort === "priceHigh" ) item.sort(( a, b ) => b.price - a.price );
        if ( sort === "priceLow" ) item.sort(( a, b ) => a.price - b.price );
        if ( sort === "oldest") item.sort(( a, b ) => a.id - b.id );
        if ( sort === "newest") item.sort(( a, b ) => b.id - a.id );
        document.querySelector("#product-container").innerHTML="";
        this.displayItemList();
    }


    //  fetch url
    dataFetch(url, sort=""){
        const productController = this;
        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
                data.forEach(function (item, index) {
                    const itemObj = {
                        id: item.idItem,
                        name: item.name,
                        description: item.description,
                        imageUrl: item.imageUrl,
                        price: item.price,
                        idColor: item.idColor,
                        idCharacter: item.idCharacter,
                        characterC:item.characterC,
                        colorName: item.colorName
                    };
                    productController._items.push(itemObj);
                });
                productController.sortProduct(sort);
                productController.displayItemList()
                if(idFordisplay != ""){
                    document.getElementById(idFordisplay).click();
                    idFordisplay ="";
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    //  for home page display
    renderItem(){
        let productController = this;
        htmlInnerText=""
        for(let i =0; i < productController._items.length; i++){
            const item = this._items[i];
            createRandomItemList(item.id,item.name,item.imageUrl)
        }
        document.querySelector("#cardColumn").innerHTML = htmlInnerText;

    }

    //  for product page display
    displayItemList() {
        let productController = this;
        htmlInnerText = ""
        if(productController._items.length === 0){
            htmlInnerText = `<h5 class="pb-2 position-relative d-inline-block" id="noRecordFound">No Record Found.</h5>`
        } else {
            for (let i = 0; i < productController._items.length; i++) {
                const item = this._items[i];
                creatItemList(item.id, item.name, item.imageUrl, item.price, item.idCharacter, i)
            }
        }

        document.querySelector("#product-container").innerHTML = htmlInnerText;

        //addEventListener - click

        for (let i = 0; i < this._items.length; i++) {
            const item = this._items[i];
            document.getElementById(item.id.toString()).addEventListener("click", function () {
                displayProductDetails( item , i);
            });
        }
    }

    //  to save a global variable use to display detail
    displayDetailItem(IdForItemDetail){
        idFordisplay = IdForItemDetail;
    }

}

function createRandomItemList( id, name, imageUrl){
    htmlInnerText += `
        <div class="card text-center">
            <a class="masonryImg" href="products" title='${name}' onclick="javascript:saveToLocal('id','${id}')">
            <img src="${imageUrl}" class="card-img-top" alt="${imageUrl}">
            </a>
            </div>
        </div>
    `
}

function creatItemList( index, name, imageUrl, price, idCharacter, arrayIndex)  {
    htmlInnerText += `
        <div class="col itemCol">
            <a href="#" id="${index}" class="d-block text-center" data-bs-toggle="modal" data-bs-target="#productModal">
                <div class="product-list">
                    <div class="product-image position-relative">
                        <img src="${imageUrl}" alt="products" class="productPhoto img-fluid product-image-first">
                    </div>
                    <div class="product-name">
                        <h3 class="productName" id="productName1">${name}</h3>
                    `
                    if(idCharacter == 14 ||idCharacter == 17 ){
                        htmlInnerText += ` <p class="amount">SGD $ ${(price/2).toFixed(2)}  <del>$ ${price.toFixed(2)} </del></p>`
                    } else {
                        htmlInnerText += ` <p class="amount">SGD $ ${price.toFixed(2)}</p>`
                    }
                    htmlInnerText += `

                    </div>
                </div>
            </a>
            <button type="button" class="add_to_Cart" data-bs-toggle="modal" data-bs-target="#successAddToCart" onclick="addToCart(${arrayIndex})">ADD TO CART</button>
        </div>
    `
}

function displayProductDetails(item, arrayIndex) {
    let modeltext="";
    document.querySelector("#productModalImg").src = item.imageUrl;
    document.querySelector("#productModalDescription").innerText = item.description;
    document.querySelector("#productModalName").innerText = item.name;
    document.querySelector("#productModalCharacter").innerText = item.characterC;
    document.querySelector("#productModalColor").innerText = item.colorName;
    if(item.idCharacter == 14 ||item.idCharacter == 17 ){
        modeltext += `SGD $ ${(item.price/2).toFixed(2)}  <del>$ ${item.price.toFixed(2)} </del>`
    } else {
        modeltext += `SGD $ ${item.price.toFixed(2)}`
    }
    document.querySelector("#productModalPrice").innerHTML = modeltext;
    document.querySelector( "#addToCartBtnContainer").innerHTML = `<button type="button" data-bs-toggle="modal" data-bs-target="#successAddToCart" class="productModalAddToCart" onclick="addToCart(${arrayIndex})">ADD TO CART</button>`


}




