// app.js
const counterDisplay = document.getElementById('counter');
const redButton = document.getElementById('redButton');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const coinSound = document.getElementById('coinSound');
const powerUpSound = document.getElementById('powerUpSound'); // Add this for power-up sound

// Initialize counter value
let counter = 0;

// Load counter value from localStorage
function loadCounter() {
  const storedValue = localStorage.getItem('counter');
  if (storedValue !== null) {
    counter = parseInt(storedValue, 10);
    counterDisplay.textContent = counter;
  }
}

// Save counter value to localStorage
function saveCounter() {
  localStorage.setItem('counter', counter);
}

// Check for multiples of 50 and play the power-up sound
function checkPowerUp() {
  if (counter % 50 === 0 && counter !== 0) {
    powerUpSound.currentTime = 0; // Reset playback
    powerUpSound.play();
  }
}

// Play coin sound and increment counter
redButton.addEventListener('click', () => {
  coinSound.currentTime = 0; // Reset playback
  coinSound.play();
  counter++;
  counterDisplay.textContent = counter;
  saveCounter();
  checkPowerUp(); // Check for multiples of 50
});

// Increment counter silently
incrementButton.addEventListener('click', () => {
  counter++;
  counterDisplay.textContent = counter;
  saveCounter();
  checkPowerUp(); // Check for multiples of 50
});

// Decrement counter silently
decrementButton.addEventListener('click', () => {
  counter--;
  counterDisplay.textContent = counter;
  saveCounter();
  checkPowerUp(); // Check for multiples of 50
});

// Load counter on page load
window.addEventListener('load', loadCounter);
