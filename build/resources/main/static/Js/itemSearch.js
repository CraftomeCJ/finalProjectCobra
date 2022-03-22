function searchItem() {
    const searchData = document.querySelector("#itemSearch" ).value;
    if ( searchData == "" ){
        productControl.displayProduct();
    } else {
        productControl.searchProduct ( searchData );
    }



}