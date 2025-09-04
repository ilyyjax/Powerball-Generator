function generatePowerballNumbers() {
  const mainNumbers = [];
  while(mainNumbers.length < 5){
    const num = Math.floor(Math.random() * 69) + 1;
    if(!mainNumbers.includes(num)) mainNumbers.push(num);
  }

  const powerball = Math.floor(Math.random() * 26) + 1;

  const numbersContainer = document.getElementById('numbers');
  numbersContainer.innerHTML = '';

  // Create main balls with staggered animation
  mainNumbers.forEach((num, i) => {
    const ball = document.createElement('div');
    ball.className = 'ball main';
    ball.textContent = num;
    ball.style.animationDelay = `${i * 0.1}s`; // cascade effect
    numbersContainer.appendChild(ball);
  });

  // Powerball pops last
  const powerBallDiv = document.createElement('div');
  powerBallDiv.className = 'ball powerball';
  powerBallDiv.textContent = powerball;
  powerBallDiv.style.animationDelay = `${mainNumbers.length * 0.1}s`;
  numbersContainer.appendChild(powerBallDiv);

  // Continuous confetti for 2 seconds
  const duration = 2000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#ff3c3c', '#ffb74d', '#ffffff']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#ff3c3c', '#ffb74d', '#ffffff']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

document.getElementById('generateBtn').addEventListener('click', generatePowerballNumbers);

// Generate numbers on page load
generatePowerballNumbers();
