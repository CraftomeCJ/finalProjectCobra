function submitCharacterForm(){
    const newCharacterName = document.querySelector("#newCharacterName").value;
    const arrayForChecking = [[newCharacterName],["newCharacterName"]];
    if(!requireField(arrayForChecking)){
        return;
    }
    productControl.addCharacter(newCharacterName);
    document.querySelector("#addNewCharacterClose").click();
}

document.querySelector("#btnAddNewCharacter").addEventListener('click',function() {
    document.querySelector("#newCharacterName").style.backgroundColor = "white";
    document.querySelector("#newCharacterName").value ="";
});//  clear the previous data when click on Add New Character button.