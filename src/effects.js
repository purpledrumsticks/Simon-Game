const playSound = function playSound (color) {
  //play sound that corresponds with color
  let greenSound = new Audio('./sounds/simonSound1.wav'),
  redSound = new Audio('./sounds/simonSound2.wav'),
  yellowSound = new Audio('./sounds/simonSound3.wav'),
  blueSound = new Audio('./sounds/simonSound4.wav');

  if (color === 'green') {
    greenSound.play();
  } else if (color === 'red') {
    redSound.play();
  } else if (color === 'yellow') {
    yellowSound.play();
  } else if (color === 'blue') {
    blueSound.play();
  }
}

const lightUp = function lightUp (color) {
  //light up cell that is same color as randomColor
  let greenCell = $('.greenCell'),
      redCell = $('.redCell'),
      yellowCell = $('.yellowCell'),
      blueCell = $('.blueCell');

  if (color === 'green') {
    greenCell.css('background-color', '#329932');
    setTimeout(() => { greenCell.css('background-color', 'green'); }, 500);
  } else if (color === 'red') {
    redCell.css('background-color', '#FF5A5A');
    setTimeout(() => { redCell.css('background-color', 'red'); }, 500);
  } else if (color === 'yellow') {
    yellowCell.css('background-color', '#FFFF4C');
    setTimeout(() => { yellowCell.css('background-color', 'yellow'); }, 500);
  } else if (color === 'blue') {
    blueCell.css('background-color', '#3232FF');
    setTimeout(() => { blueCell.css('background-color', 'blue'); }, 500);
  }
}

export {playSound, lightUp};
