const randomNumber = Math.floor(Math.random() * 1000) + 1;
const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('checkButton');
const hint = document.getElementById('hint');
const revealButton = document.getElementById('revealButton');
const revelation = document.getElementById('revelation');
let attempts = 0;

checkButton.addEventListener('click', checkGuess);
revealButton.addEventListener('click', revealNumber);

function checkGuess() {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (userGuess === randomNumber) {
    hint.textContent = `¡Ganaste en ${attempts} intentos!`;
    hint.style.color = 'green';
    guessInput.disabled = true;
    checkButton.disabled = true;
    revealButton.disabled = true;
  } else {
    const difference = Math.abs(randomNumber - userGuess);
    let message = '';

    if (difference >=100) {
      message = 'congelado';
    } else if (difference >= 50) {
      message = 'Frío';
    } else if (difference >= 30) {
      message = 'Tibio';
    } else if (difference >= 10) {
      message = 'Caliente';
    } else {
      message = '¡Te quemas!';
    }

    hint.textContent = message;
    hint.style.color = 'black';
  }
}

function revealNumber() {
  revelation.textContent = `El número correcto era: ${randomNumber}`;
  revelation.classList.remove('hidden');
}
