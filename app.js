// app.js
const counterDisplay = document.getElementById('counter');
const redButton = document.getElementById('redButton');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const coinSound = document.getElementById('coinSound');
const powerUp=document.getElementById('powerUpSound');

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

// Play coin sound and increment counter
redButton.addEventListener('click', () => {
  coinSound.currentTime = 0; // Reset audio playback
  powerUp.currentTime=0;
  if((counter+1)%10==0){
    powerUp.play();
  }
  else{
    coinSound.play();
  }
  counter++;
  counterDisplay.textContent = counter;
  saveCounter();
});

// Increment counter silently
incrementButton.addEventListener('click', () => {
  counter++;
  counterDisplay.textContent = counter;
  saveCounter();
});

// Decrement counter silently
decrementButton.addEventListener('click', () => {
  counter--;
  counterDisplay.textContent = counter;
  saveCounter();
});

// Load counter on page load
window.addEventListener('load', loadCounter);
