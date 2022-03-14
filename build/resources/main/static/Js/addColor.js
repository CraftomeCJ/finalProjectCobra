function submitColorForm(){
    const newColorName = document.querySelector("#newColorName").value;
    const arrayForChecking = [[newColorName],["newColorName"]];
    if(!requireField(arrayForChecking)){
        return;
    }
    const colorUpperCase = newColorName.toUpperCase();
    productControl.addColor(colorUpperCase);
    document.querySelector("#addNewColorClose").click();
}

document.querySelector("#btnAddNewColor").addEventListener('click',function() {
    document.querySelector("#newColorName").style.backgroundColor = "white";
    document.querySelector("#newColorName").value ="";
});//  clear the previous data when click on Add New Character button.