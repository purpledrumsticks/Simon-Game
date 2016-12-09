import './effects';

export const addToPattern = (function addToPattern () {
  let randomNumber = Math.floor(Math.random() * 4) + 1;
  let patternColor = "";
  if (randomNumber === 1) {
    patternColor = "green";
    simonArr.push('green');
  } else if (randomNumber === 2) {
    patternColor = "red"
    simonArr.push('red');
  } else if (randomNumber === 3) {
    patternColor = "yellow";
    simonArr.push('yellow');
  } else if (randomNumber === 4) {
    patternColor = "blue";
    simonArr.push('blue');
  }
  playSound(patternColor);
  lightUp(patternColor);
  displayCount();
  userArr = [];
}());
