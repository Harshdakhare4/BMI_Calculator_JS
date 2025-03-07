const form = document.querySelector('form');
const result = document.querySelector('#result');
const suggestion = document.querySelector('#suggestion');
result.style.display = "none";
suggestion.style.display = "none";


//const height = parseInt(document.querySelector('#height').value);  --- this will be wrong as there is no event it will give you empty becoz no value is inserted so far



form.addEventListener('submit', function (e) {
    e.preventDefault();
    result.style.display = "block";
    
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);

    
    // The isNaN() function in JavaScript is used to determine whether a value is NaN (Not-a-Number). If you call isNaN(height), here's what happens:
  // If height contains a value that cannot be converted into a number (like a string "hello"), isNaN(height) will return true.
  // If height is a number or can be converted into a valid number (e.g., the string "123"), it will return false.
    if (weight <= 0 || isNaN(weight)|| weight === '') {
        result.innerHTML = "❌ Enter a valid weight!";
        result.style.display = "block";
        suggestion.style.display = "none";
      
    }

    else if (height <= 0 || isNaN(height)|| height ==='') {
        result.innerHTML = "❌ Enter a valid height!";
        result.style.display = "block";
       suggestion.style.display = "none";
       
    }
else{
    const BMI = (weight / (height ** 2)).toFixed(2);
    result.innerHTML = `✅ Your BMI is <strong>${BMI}</strong>`;
   result.style.display = "block";

    if (BMI < 18.5) {
        suggestion.innerHTML = "⚠️ You are <strong>underweight</strong>. Consider a balanced diet.";
       
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        suggestion.innerHTML = "✅ Your BMI is <strong>normal</strong>. Keep up the good work!";
    } else if (BMI >= 25 && BMI <= 29.9) {
        suggestion.innerHTML = "⚠️ You are <strong>overweight</strong>. Try to maintain a healthy lifestyle.";
    } else {
        suggestion.innerHTML = "🚨 You are <strong>obese</strong>. Consider consulting a doctor.";
    }
    suggestion.style.display = "block";
}

});
