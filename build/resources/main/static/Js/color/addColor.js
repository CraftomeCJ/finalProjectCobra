const colorControl = new colorController();
let addDeleteColorStatus ="add";

function submitColorForm(){
    if(addDeleteColorStatus === "add") {
        const newColorName = document.querySelector("#newColorName").value;
        const arrayForChecking = [[newColorName], ["newColorName"]];
        if (!requireField(arrayForChecking)) {
            return;
        }
        const colorUpperCase = newColorName.toUpperCase();
        if(colorControl.findColorByName(colorUpperCase)){
            alert("Invalid Request. Color has Repeated");
            return;
        }
        colorControl.addColor(colorUpperCase);
        document.querySelector("#addNewColorClose").click();
    } else {
        const deleteColorName = document.querySelector("#deleteColorName").value;
        const arrayForChecking = [[deleteColorName], ["deleteColorName"]];
        if (!requireField(arrayForChecking)) {
            return;
        }
        let colorErrorMassage = document.querySelector("#colorErrorMassage")
        let numberOfColor =colorControl.findColorById(deleteColorName)
        if(numberOfColor==0){
            colorControl.deleteColor(deleteColorName)
            colorErrorMassage.style.display = "none";
            colorErrorMassage.innerHTML = "";
        } else {
            colorErrorMassage.style.display = "block";
            colorErrorMassage.innerHTML = `Invalid Request. There are ${numberOfColor} product with this color.`
        }



    }
}

document.querySelector("#btnAddNewColor").addEventListener('click',function(){
    addDeleteColorStatus = "add";
    document.querySelector("#addDeleteColorHeader").innerHTML = "Add Color";
    document.querySelector("#newColorName").style.backgroundColor = "white";
    document.querySelector("#newColorName").value ="";
    document.querySelector("#addNewColor").style.display = "block";
    document.querySelector("#deleteColor").style.display = "none";
    document.querySelector("#addColorSubmit").style.display = "block";
    document.querySelector("#deleteColorSubmit").style.display = "none";

})
document.querySelector("#btnDeleteColor").addEventListener('click',function(){
    addDeleteColorStatus = "delete";
    document.querySelector("#addDeleteColorHeader").innerHTML = "Delete Color";
    document.querySelector("#deleteColorName").style.backgroundColor = "white";
    document.querySelector("#deleteColorName").value ="";
    document.querySelector("#colorErrorMassage").style.display = "none";
    document.querySelector("#colorErrorMassage").innerHTML = "";
    document.querySelector("#addNewColor").style.display = "none";
    document.querySelector("#deleteColor").style.display = "block";
    document.querySelector("#addColorSubmit").style.display = "none";
    document.querySelector("#deleteColorSubmit").style.display = "block";
})