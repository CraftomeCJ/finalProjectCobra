const productControl = new productController();
const colorControl = new colorController();
const characterControl = new characterController();

function loadProduct(){
    characterControl.filterCharacter();
    productControl.displayProduct();
    colorControl.filterColor();
}

if ( window.localStorage.length == 0 ) {
    loadProduct();
} else {
    const localStorageKey = localStorage.key( 0 );
    const localStorageData = localStorage.getItem( localStorageKey );
    if ( localStorageKey == "displayBy" ) {
        productControl.displayBy(localStorageData);
        characterControl.filterCharacter();
        colorControl.filterColor();
    }
    if ( localStorageKey == "id" ){
        loadProduct();
        productControl.displayDetailItem( localStorageData );
    }
    localStorage.clear();
}

document.querySelector( "#productSorting" ).addEventListener( 'change', function() {
    const sort = document.querySelector( "#productSorting" ).value;
    productControl.sortProduct( sort );
})

document.querySelector( "#filterCharacter" ).addEventListener( 'change', function() {
    const filterCharacter = document.querySelector( "#filterCharacter" ).value;
    const filterColor = document.querySelector( "#filterColor" ).value;
    const sort = document.querySelector( "#productSorting" ).value;
    productControl.filterBy( filterCharacter, filterColor, sort) ;
})

document.querySelector( "#filterColor ").addEventListener( 'change', function() {
    const filterCharacter = document.querySelector( "#filterCharacter" ).value;
    const filterColor = document.querySelector( "#filterColor" ).value;
    const sort = document.querySelector( "#productSorting" ).value;
    productControl.filterBy( filterCharacter, filterColor , sort );
})

document.querySelector( "#clearSearchAndFilter" ).addEventListener( 'click',function() {
    document.querySelector( "#productSorting").value = "";
    document.querySelector( "#filterCharacter").value = "";
    document.querySelector( "#filterColor").value = "";
    document.querySelector( "#itemSearch").value = "";
    productControl.displayProduct();
})

document.querySelector( "#itemSearch").addEventListener( 'input', function() {
    const isEmpty = document.querySelector( "#itemSearch").value;
    if( isEmpty === "" ) {
        const filterCharacter = document.querySelector( "#filterCharacter" ).value;
        const filterColor = document.querySelector( "#filterColor" ).value;
        const sort = document.querySelector( "#productSorting" ).value;
        productControl.filterBy( filterCharacter, filterColor , sort );
    }
})


