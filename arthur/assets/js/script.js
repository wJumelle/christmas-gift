document.addEventListener('DOMContentLoaded', () => {
  const buttonToOpen = document.getElementById('cut-scene__button');
  const cutScene = document.getElementById('cut-scene');
  buttonToOpen.addEventListener('click', () => {
    // On anime le bouton duration : 1.5s
    buttonToOpen.classList.add('is-animated');

    // On anime la cut-scene duration : 1.5s ; delay : 1.2s
    cutScene.querySelectorAll('.cut-scene__panel').forEach(panel => panel.classList.add('is-animated'));

    // On met en place le timer qui attends la fin des animations précédentes
    setTimeout(() => {
      // On supprime le bouton
      buttonToOpen.parentElement.remove();
      setTimeout(() => cutScene.remove(), 1200);

      // On anime les manettes duration : 0.75s ; delay bleu : .5s ; delay rouge : .8s
      const blueController = document.getElementById('Manette_x5F_bleu');
      const redController = document.getElementById('Manette_x5F_rouge');
      blueController.classList.add('is-animated');
      redController.classList.add('is-animated');

      // On anime la loading bar
      setTimeout(() => {
        const progressBarContainer = document.getElementById('Loading_x5F_bar');
        const progressBar = document.getElementById('Progress');
        const check = document.getElementById('Check');
        const paragrapheDownloading = document.getElementById('paragraphe-1');

        // Duration : .5s ; Délai : 0
        progressBarContainer.classList.add('is-visible');
        // Duration : 3s ; Délai  .5s
        progressBar.classList.add('is-animated');

        // Affichage du message de chargement en cours
        paragrapheDownloading.classList.add('is-animated');

        // On masque la barre de chargement
        setTimeout(() => {
          // Duration : .5s ; Délai : 0
          progressBarContainer.classList.remove('is-visible');
          progressBarContainer.classList.add('is-hidden');

          // On supprime le paragraphe de chargement
          paragrapheDownloading.classList.remove('is-animated');
          paragrapheDownloading.classList.add('is-hiding');
          setTimeout(() => paragrapheDownloading.remove(), 500);

          // Affichage du check
          // Duration : 1.5s ; Délai .65s
          check.classList.add('is-animated');

          // On masque le check et on affiche le jeu et les textes
          setTimeout(() => {
            const dlcImage = document.getElementById('DLC');
            const title = document.querySelector('#text-prompt h1');
            const paragraphe = document.getElementById('paragraphe-2');
            const dlcTitle = document.querySelector('#logo-dlc img');

            check.classList.remove('is-animated');
            check.classList.add('is-hidden');
            dlcImage.classList.add('is-animated');
            title.classList.add('is-animated');
            paragraphe.classList.add('is-animated');
            dlcTitle.classList.add('is-animated');
          }, 2150);
        }, 3500);
      }, 1750);
    }, 1600);
  });
});
