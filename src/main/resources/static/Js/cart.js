let htmlText ="";
let _cartArray =[];
function loadPage(){
    loadCartArray();
    let totalQty = 0;
    for(let i = 0 ; i <  _cartArray.length ; i++ ){
        totalQty += _cartArray[i].qty;
    }
    document.querySelector("#btnCartContainer").setAttribute('data-totalItems', totalQty.toString() );
}
function loadCartArray(){
    _cartArray =[];
    let cartValue = sessionStorage.getItem( "cart" );
    if ( cartValue !== null ) {
        _cartArray = JSON.parse( cartValue );
    }
}
function addToCart(id){
    const item = productControl._items[id];
    setTimeout( function() { document.querySelector("#hiddenCloseButton" ).click() }, 1500);
    let flag = -1;
    loadCartArray();
    for( let i = 0 ; i < _cartArray.length ; i++ ) {
        const cart = _cartArray[ i ];
        if(cart.id === item.id) flag = i;
    }
    if ( flag !== -1 ){
        _cartArray[ flag ].qty += 1;
    } else {
        let priceItem;
        if (item.idCharacter == 14 || item.idCharacter == 17) priceItem = item.price / 2;
        else priceItem = item.price
        const itemObj = {
            id: item.id,
            name: item.name,
            imageUrl: item.imageUrl,
            price: priceItem,
            qty: 1
        };
        _cartArray.push(itemObj);
    }
    const jsonStr = JSON.stringify(_cartArray);
    sessionStorage.setItem("cart", jsonStr);
    const dataContainer = document.querySelector("#btnCartContainer");
    const dataValue = parseInt( dataContainer.getAttribute( 'data-totalItems' ) );
    dataContainer.setAttribute('data-totalItems', ( dataValue + 1 ).toString() );
}
function deleteCartItem( index ) {
    _cartArray.splice(index, 1);
    let total = 0;
    for(let i = 0 ; i <  _cartArray.length ; i++ ){
        total += _cartArray[i].qty;
    }
    document.querySelector("#btnCartContainer").setAttribute('data-totalItems', total.toString() );
    const jsonStr = JSON.stringify(_cartArray);
    sessionStorage.setItem("cart", jsonStr);
    displayCartItem()
}
function displayCartItem(){
    loadCartArray();
    htmlText = "";
    let total = 0;
    const table = document.querySelector("#CartTableBody");
    table.innerHTML = ""
    for( let i = 0 ; i < _cartArray.length ; i++ ) {
        const cart = _cartArray[ i ];
        createTable(i, cart.id, cart.name, cart.imageUrl, cart.price, cart.qty )
        total += cart.price * cart.qty;
    }
    table.innerHTML = htmlText;
    document.querySelector( "#totalItemPrice" ).innerHTML = "$ " + total.toFixed(2);
    //  Change Of Quantity
    for (let i = 0; i < _cartArray.length ; i++) {
        document.getElementById( i+"qty" ).addEventListener("input", function () {
            let total = 0;
            let totalQty = 0
            _cartArray[ i ].qty = parseInt(document.getElementById( i+"qty" ).value);
            for( let j = 0 ; j < _cartArray.length ; j++ ) {
                const cart = _cartArray[ j ];
                totalQty += cart.qty
                total += cart.price * cart.qty;
            }
            const jsonStr = JSON.stringify(_cartArray);
            sessionStorage.setItem("cart", jsonStr);
            document.querySelector( "#totalItemPrice" ).innerHTML = "$ " + total.toFixed(2);
            document.querySelector("#btnCartContainer").setAttribute('data-totalItems', totalQty.toString() );
        });
    }
}
function createTable(index, id, name, imageUrl, price, qty ) {
    htmlText +=
        `
            <tr id="table${index}" class="cartItemRow">
                <td id="cartProduct">
                    <div class="row cartTableRow" >
                        <div class="col-md-3 text-left">
                            <img id="cartItemImage" src="${imageUrl}" alt="" class="img-fluid d-none d-md-block rounded mb-4 shadow ">
                        </div>
                        <div class="col-md-9 text-left cartItemNameContainer">
                            <h4 id="cartItemName" >${name}</h4>
                        </div>
                    </div>
                </td>
                <td class="cartItemPrice">$ ${price.toFixed(2)}</td>
                <td id="quantity">
                    <input type="number" class="form-control" id="${index}qty" value="${qty}" min="1">
                </td>
                <td class="actions" data-th="">
                    <div class="text-right">
                        <button class="btn btn-danger btnRemoveItem" onclick="deleteCartItem(${index})">
                            <img class="facebook-logo" src="images/delete_black.svg" alt="">
                        </button>
                    </div>
                </td>
            </tr>
        `
}
function checkout(){
    let confirmAction = confirm("Continue to checkout?");
    if (confirmAction) {
        alert("Order has been placed. \nThank you.");
        sessionStorage.clear();
        loadPage();
        document.querySelector( "#continueShopping" ).click();
    }
}
loadPage();