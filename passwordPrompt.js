function passwordCheck(){
    
    let correctPassword = ("bitao");
    let userPassword;
    do {
        userPassword = prompt("Please enter your password:");
        if (userPassword !== correctPassword){
            alert("Incorrect, try again.");
        }
    }while (userPassword !== correctPassword);
    alert(
    "Access granted.");
}
