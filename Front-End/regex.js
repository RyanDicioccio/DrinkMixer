// Define vars for validation states
let namePass = false;
let shotPass = false;
let mixedPass = false;

// Validation for Name
let inputName = document.getElementById("name");
let nameVText = document.getElementById("nameError");

inputName.addEventListener("keyup", validateName);

function validateName() {
  let name = this.value.trim();

  // Regex for user name
  var nameRegex = /^[a-zA-Z\-]{2,20}$/;

  if (nameRegex.test(name)) {
    nameVText.textContent = "";
    namePass = true;
    localStorage.setItem("userName", name);
  } else {
    nameVText.textContent = "Please Enter A Valid Name (2-20 characters)";
    namePass = false;
  }
}

// Validation for the Shot Number
let inputNumber = document.getElementById("shotNum");
let numberVText = document.getElementById("numberError");
let radioButtons = document.getElementsByName("mixer");

inputNumber.addEventListener("input", validateShotNum);

function validateShotNum() {
  let number = this.value.trim();

  if (number === "") {
    numberVText.textContent = "Shot number is required.";
    shotPass = false;
    disableMixer(true);
    return;
  }

  if (number === "0") {
    numberVText.textContent = "";
    shotPass = true;
    disableMixer(true); // Disable mixer options
    mixedPass = true; // Skip mixer validation
  } else if (number >= 1 && number <= 2) {
    numberVText.textContent = "";
    shotPass = true;
    disableMixer(false); // Enable mixer options
    validateRadio(); // Re-validate radio buttons
  } else {
    numberVText.textContent = "Please Enter A Shot Amount Between 1-2";
    shotPass = false;
    disableMixer(true);
  }
}

// Disable or enable mixer radio buttons
function disableMixer(disable) {
  radioButtons.forEach(radio => {
    radio.disabled = disable;
    if (disable) radio.checked = false; // Clear selection if disabled
  });
}

// Validation for Radio Buttons
let radioVText = document.getElementById("radioError");

radioButtons.forEach(radioButton => {
  radioButton.addEventListener("click", validateRadio);
});

function validateRadio() {
  let isChecked = Array.from(radioButtons).some(radio => radio.checked);

  if (isChecked) {
    radioVText.textContent = "";
    mixedPass = true;
  } else {
    radioVText.textContent = "Please Choose A Mixer Type";
    mixedPass = false;
  }
}

// Submit Button Validation
let submitButton = document.getElementById("subDrink");

if (submitButton) {
  submitButton.addEventListener("click", submitDrink);
} else {
  console.log("Submit button not found.");
}

function submitDrink(event) {
  if (namePass && shotPass && mixedPass) {
    window.location.href = "./Success.html";
  } else {
    alert("Please Fill In All Fields Correctly");
    event.preventDefault(); // Prevent submission
  }
}
