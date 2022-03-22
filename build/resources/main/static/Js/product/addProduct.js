
const productControl = new productController();
let imageOutput = "";
let emptyForm = false;
let storeImage = "";

function submitForm(){

    const productName = document.querySelector("#productName").value;
    const productCharacter = document.querySelector("#productCharacter").value;
    const productColor = document.querySelector("#productColor").value;
    const productDesc = document.querySelector("#productDesc").value;
    const productPrice = document.querySelector("#productPrice").value;
    const productImage = document.querySelector("#productImage").value;

    const arrayForChecking = [ [ productName, productCharacter, productColor, productDesc, productPrice, productImage ],
        [ "productName", "productCharacter", "productColor", "productDesc", "productPrice", "productImage" ] ];

    const productCharacterInt = parseInt( productCharacter );
    const productColorInt = parseInt( productColor );
    const productPriceFloat = parseFloat( productPrice );
    const imageUrl = productImage.replace( "C:\\fakepath\\", "" );

    emptyForm = requireField( arrayForChecking );
    if ( emptyForm ) {
        productControl.addProduct( productName, productCharacterInt, productColorInt, productDesc, productPriceFloat, imageUrl, storeImage );
        resetForm();
    }
}   //submit

function resetForm(){
    document.querySelector( "#imageDisplay" ).src = "";
    document.querySelector( "#productCharacter" ).value = "";
    document.querySelector( "#productColor" ).value = "";
    const clear = document.querySelectorAll( ".form-control" );
    clear.forEach( ( item, index ) => {
        item.style.backgroundColor = "white"
        item.value = "";
    });
    window.scrollTo( 0, 0 );
}   //clear

document.querySelector( "#imageDisplay" ).addEventListener( 'error', function() {
    document.querySelector( "#imageDisplay" ).src="../images/cobra-logos_transparent.png"
}); //display default when error

let loadFile = function( event ) {
    const output = document.querySelector( "#imageDisplay" );
    if( event.target.files.length !== 0 ){
        storeImage = event.target.files[ 0 ];
        imageOutput = URL.createObjectURL( event.target.files[ 0 ] );
        console.log( imageOutput );
        output.src = imageOutput;
        output.onload = function() {
            URL.revokeObjectURL( output.src ) // free memory
        }
    } else {
        document.querySelector( "#imageDisplay" ).src = "../images/cobra-logos_transparent.png"
    }

}

// const input = document.querySelector('#imageDisplay');
//
// input.addEventListener('change', () => {
//
//     storeImage = input.files[0];
//
// });