// Get the input fields and the result element
const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const resultElement = document.getElementById("result");

// Add a click event listener to the button
document.getElementById("calculateBtn").addEventListener("click", () => {
  // Get the weight and height values from the input fields
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  
  // Calculate the BMI
  const bmi = weight / (height * height);

  // Display the BMI result on the page
  resultElement.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
});
