const characterControl = new characterController();
let addDeleteCharacterStatus = "add";

function submitCharacterForm(){
    if(addDeleteCharacterStatus === "add"){
        const newCharacterName = document.querySelector("#newCharacterName").value;
        const arrayForChecking = [[newCharacterName],["newCharacterName"]];
        if(!requireField(arrayForChecking)){
            return;
        }
        characterControl.addCharacter(newCharacterName);
        document.querySelector("#addNewCharacterClose").click();
    } else {
        const deleteCharacterName = document.querySelector("#deleteCharacterName").value;
        const arrayForChecking = [[deleteCharacterName], ["deleteCharacterName"]];
        if (!requireField(arrayForChecking)) {
            return;
        }
        let characterErrorMassage = document.querySelector("#characterErrorMassage")
        let numberOfCharacter =characterControl.findCharacter(deleteCharacterName)
        console.log(numberOfCharacter)
        if(numberOfCharacter==0){
            characterControl.deleteCharacter(deleteCharacterName)
            characterErrorMassage.style.display = "none";
            characterErrorMassage.innerHTML = "";
        } else {
            characterErrorMassage.style.display = "block";
            characterErrorMassage.innerHTML = `Invalid Request. There are ${numberOfCharacter} product with this character.`
        }
    }

}
document.querySelector("#btnAddNewCharacter").addEventListener('click',function(){
    addDeleteCharacterStatus = "add";
    document.querySelector("#addDeleteCharacterHeader").innerHTML = "Add New Character";
    document.querySelector("#newCharacterName").style.backgroundColor = "white";
    document.querySelector("#newCharacterName").value ="";
    document.querySelector("#addNewCharacter").style.display = "block";
    document.querySelector("#deleteCharacter").style.display = "none";
})
document.querySelector("#btnDeleteCharacter").addEventListener('click',function(){
    addDeleteCharacterStatus = "delete";
    document.querySelector("#addDeleteCharacterHeader").innerHTML = "Delete Character";
    document.querySelector("#deleteCharacterName").style.backgroundColor = "white";
    document.querySelector("#deleteCharacterName").value ="";
    document.querySelector("#characterErrorMassage").style.display = "none";
    document.querySelector("#characterErrorMassage").innerHTML = "";
    document.querySelector("#addNewCharacter").style.display = "none";
    document.querySelector("#deleteCharacter").style.display = "block";
})
