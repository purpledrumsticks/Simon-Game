'use strict';

require('./mainGame.js');

$('.ioButton').on('click', function () {
  var onSound = new Audio('./sounds/onSound.wav');
  onSound.play();
  $('.notOn').css('pointer-events', 'auto');
});

$('.startButton').on('click', mainGame);