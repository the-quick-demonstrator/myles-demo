function evaluateUserInput(){
    let userInputFirstName = document.getElementById("first_name").value;
    let userInputLastName = document.getElementById("last_name").value;
    let outputDisplay = "Your name is: " + userInputFirstName + " " + userInputLastName;
    document.getElementById("output").innerHTML = outputDisplay;
    return false;
}