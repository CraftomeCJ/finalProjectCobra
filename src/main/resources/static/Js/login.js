function loginSubmit () {
    let loginForm = false;
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const arrayForChecking = [[username,password],["username","password"]];

    loginForm = requireField(arrayForChecking);
    if(! loginForm ){
        document.querySelector("#errorsMessage").style.visibility = "visible";
    } else {
        document.querySelector("#errorsMessage").style.visibility = "hidden";

    }
}