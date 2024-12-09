//define vars for when user wants to submit the drink all the data has proper information.
let namePass;
let shotPass;
let mixedPass;

//Validation For Name
//Access For The Input and P Tags In The HTML
let inputName = document.getElementById("name")
let nameVText = document.getElementById("nameError")
let userNameDisplay = document.getElementById("userName");

//call function on keyup
inputName.addEventListener("keyup",validateName)

function validateName(){ //start function vaildateName

//get the value from the input
let name = this.value


// regex for user name
var nameRegex = /^[a-zA-Z\-]{2,20}$/;

//if name is less then 2 char or more then 20 char give user a error letting them know to write there name down.
if(nameRegex.test(name)){
    nameVText.textContent = ""
    namePass = true;
    // Store the validated name in localStorage
    localStorage.setItem("userName", name);
} else {
    nameVText.textContent = " Please Enter Your Name"
    namePass = false;
}

}// end function validateName

//vaildation for the shot number input
//Access For the Input And P Tags In HTML
let inputNumber = document.getElementById("shotNum")
let numberVText = document.getElementById("numberError")

//call function on keyup
inputNumber.addEventListener("input",validateShotNum)

function validateShotNum(){ //start function validateShotNum. 

    let number = this.value;

    //this is used to the alert does not pop up when there is no number in the input.
    if (number === "") {
        
        return;
    }

    if (number == 0) {
        alert("This Will Only Dispense The Mixer");
        radioButtons.forEach(radio => radio.disabled = true);
        numberVText.textContent = "";
        shotPass = true;
        mixedPass= true;
    } else if (number < 0 || number > 2) {
        numberVText.textContent = "Please Enter A Shot Amount Between 0-2";
        radioButtons.forEach(radio => radio.disabled = false);
        shotPass = false;
        mixedPass = false;
    } else {
        numberVText.textContent = "";
        radioButtons.forEach(radio => radio.disabled = false);
        shotPass = true;
        mixedPass = false;
    }
    

} // end function validateShotNum. 

// Access the radio buttons for the mixer type
let radioButtons = document.getElementsByName("Mixer");
let radioVText = document.getElementById("radioError");

// Access the form that the radio buttons are in
let form = document.getElementById("form");

// Loop through radio buttons and attach event listeners
radioButtons.forEach(radioButton => {
    radioButton.addEventListener("click", validateRadio);
});

function validateRadio() { // start function validateRadio
    let isChecked = false;

    // Check if any radio button is checked
    radioButtons.forEach(radioButton => {
        if (radioButton.checked) {
            isChecked = true;
        }
    });

    // Update the error message and mixedPass variable based on whether a radio button is checked
    if (isChecked) {
        radioVText.textContent = "";
        mixedPass = true;
    } else {
        radioVText.textContent = "Please Choose A Mixer Type";
        mixedPass = false;
    }
} // end function validateRadio



//Access the Submit Button
let submitButton = document.getElementById("subDrink");

//call the function on click
// submitButton.addEventListener("click",submitDrink);
// Check if the button is found
if (submitButton) {
    // Call the function on click (no parentheses)
    submitButton.addEventListener("click", submitDrink);
} else {
    console.log("Submit button not found.");
}

function submitDrink(event){ //start function submitDrink

    if(namePass === true && shotPass === true && mixedPass === true) {
        window.location.href="./Success.html"

    } else{
        alert("Please Fill In All Fields Correctly")
        event.preventDefault();
    }

} //end  function submitDrink




