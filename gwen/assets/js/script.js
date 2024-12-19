// Variables
let app = null;
let candleBorderSection = null;
let candleBorder = null;
let candleBorderPathLength = null;

// Variables TimeOut
let initTO = null;

document.addEventListener('DOMContentLoaded', () => {
  app = document.getElementById('app');

  // On vient chercher la taille totale du <path> de notre svg pour pouvoir l'animer correctement
  candleBorderSection = document.getElementById('candle-border');
  candleBorder = candleBorderSection.querySelector('svg');
  candleBorderPathLength = candleBorder.querySelector('path').getTotalLength();
  candleBorder.style.setProperty('--pathLength', candleBorderPathLength);

  // On anime la bordure pour simuler un effet de bougie
  // Duration 7s ; Delay : 1s
  candleBorder.classList.add('is-animated');

  initTO = setTimeout(apparitionBon, 6000);
})

// function
function apparitionBon() {
  // On supprime la section candle-border
  candleBorderSection.remove();

  // On fait apparaître la section container


  // On nettoie le timeout
  clearTimeout(initTO);
}
