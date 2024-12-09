//REST API For POST Request.
document.getElementById("form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submission prevented.");
  
    // Collect form data
    const name = document.getElementById("name").value;
    const shotNum = document.getElementById("shotNum").value;
    const mixer = document.querySelector('input[name="mixer"]:checked')?.value;
  
    if (!name || !shotNum || !mixer) {
      alert("Please fill out all fields.");
      console.log("Validation failed: Missing fields.");
      return;
    }
  
    const payload = {
      name: name,
      shots: parseInt(shotNum, 10),
      mixer: mixer,
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
        console.log("Request successful:", await response.json());
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