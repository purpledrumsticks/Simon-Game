  import './mainGame.js';

  $('.ioButton').on('click', () => {
    let onSound = new Audio('./sounds/onSound.wav');
    onSound.play();
    $('.notOn').css('pointer-events', 'auto');
  });

  $('.startButton').on('click', mainGame);
