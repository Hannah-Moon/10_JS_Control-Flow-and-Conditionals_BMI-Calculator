function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
  
    if (weight === "" || height === "") {
      alert("Please enter both weight and height.");
      return;
    }
  
    const bmi = weight / ((height / 100) * (height / 100));
  
    let bmiResult = "Your BMI is: " + bmi.toFixed(1);
  
    if (bmi < 18.5) {
        bmiResult += " (Underweight)";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiResult += " (Normal weight)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiResult += " (Excess Weight)";
    } else {
        bmiResult += " (Obesity)";
    }
  
    document.getElementById("result").innerHTML = bmiResult;
  }