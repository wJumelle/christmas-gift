// Variables
let app = null;
let candleBorderSection = null;
let candleBorder = null;
let candleBorderPathLength = null;
let bonContainer = null;
let bonText = null;

// Variables TimeOut
let initTO = null;

document.addEventListener('DOMContentLoaded', () => {
  // On initialise la valeur des variables qui permettront de jouer avec le DOM
  app = document.getElementById('app');
  candleBorderSection = document.getElementById('candle-border__container');
  candleBorder = candleBorderSection.querySelector('svg');
  bonContainer = document.getElementById('bon__container');
  bonText = document.getElementById('bon__txt');
  bonPoint = document.getElementById('bon__point');

  // On vient chercher la taille totale du <path> de notre svg pour pouvoir l'animer correctement
  candleBorderPathLength = candleBorder.querySelector('path').getTotalLength();
  candleBorder.style.setProperty('--pathLength', candleBorderPathLength);

  // On anime la bordure pour simuler un effet de bougie
  // Duration 7s ; Delay : 1s
  candleBorder.classList.add('is-animated');

  initTO = setTimeout(apparitionBon, 5000);
})

// function
function apparitionBon() {
  // On supprime la section candle-border
  const clearTO = setTimeout(() => {
    candleBorderSection.remove();
    clearTimeout(clearTO);
  }, 1000);

  // On fait apparaître la section container
  bonContainer.classList.add('is-visible');

  // Au bout de x secondes on affiche la bordure sous le mot "bon"
  // Au bout de x secondes on affiche la fumée au-dessus du . en fin de phrase
  const clearBonTO = setTimeout(() => {
    bonText.classList.add('is-animated');
    bonPoint.querySelector('.smoke').classList.add('is-visible');
    clearTimeout(clearBonTO);
  }, 1625);

  // On nettoie les timeouts
  clearTimeout(initTO);
}
