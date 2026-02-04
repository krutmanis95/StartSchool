// Variables
const quizForm = document.getElementById('quiz_form');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const resultText = document.getElementById('result-text');

const vegetable = ["Carrot", "Cucumber", "Tomato", "Broccoli"]
// Handle form submission
submitBtn.addEventListener('click', function() {
    // Get all radio button groups
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    
    const score = parseInt(q1.value) + parseInt(q2.value) + parseInt(q3.value);
    
    // Display the result
    resultText.textContent = `You're a ${vegetable[score]}!`;
    resultDiv.style.display = 'block';
        
});