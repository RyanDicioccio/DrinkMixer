document.getElementById("form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent default form submission
  console.log("Form submission prevented.");

  // Collect form data
  const name = document.getElementById("name").value.trim();
  const shotNum = document.getElementById("shotNum").value.trim();
  const mixer = document.querySelector('input[name="mixer"]:checked')?.value;

  // Reuse validation flags from regex.js
  if (!namePass || !shotPass || !mixedPass) {
    alert("Please fill out all fields correctly.");
    console.log("Validation failed: Invalid fields.");
    return;
  }

  // Prepare payload
  const payload = {
    name: name,
    shots: parseInt(shotNum, 10),
    mixer: shotNum === "0" ? "none" : mixer, // Handle shotNum === 0 case
  };

  console.log("Payload prepared:", payload);

  try {
    const response = await fetch("http://exampleserver.com/pour_drink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Response received:", response);

    if (response.ok) {
      const result = await response.json();
      console.log("Request successful:", result);
      alert("Your drink request has been submitted!");
    } else {
      console.error("Request failed:", response.statusText);
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    alert("Error submitting your request. Please check your connection.");
  }
});
