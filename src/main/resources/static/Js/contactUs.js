function contactUsSubmit() {
    let contactUsFill = false;
    const contactUsName = document.querySelector("#contactUsName" ).value;
    const contactUsEmail = document.querySelector("#contactUsEmail" ).value;
    const contactUsMessage = document.querySelector("#contactUsMessage" ).value;

    const arrayForChecking = [ [ contactUsName, contactUsEmail, contactUsMessage ],
        [ "contactUsName", "contactUsEmail", "contactUsMessage" ] ];
    contactUsFill = requireField( arrayForChecking );
    if ( contactUsFill ) {
        for( let i = 0 ; i < arrayForChecking[ 1 ].length ; i++ ) {
            document.querySelector(`#${arrayForChecking[ 1 ][ i ]}`).value = "";
        }
        alert( "Thank you for your feedback" )
        document.querySelector("#btnContactUsClose" ).click();
    }
}

function clearContactUsEntry(){
    document.querySelector("#contactUsName" ).value = "";
    document.querySelector("#contactUsEmail" ).value = "";
    document.querySelector("#contactUsMessage" ).value = "";
    document.querySelector("#contactUsName" ).style.backgroundColor = "white";
    document.querySelector("#contactUsEmail" ).style.backgroundColor = "white";
    document.querySelector("#contactUsMessage" ).style.backgroundColor = "white";
}


document.querySelector("#navContactUs" ).addEventListener('click',function() {
    clearContactUsEntry();
});

document.querySelector("#footerContactUs").addEventListener('click',function() {
    clearContactUsEntry();
});

