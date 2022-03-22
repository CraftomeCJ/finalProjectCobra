const productControl = new productController();


function loadRandomItem(){
    productControl.displayTenRandomProduct();
}
//  clear the local storage
localStorage.clear()
loadRandomItem();