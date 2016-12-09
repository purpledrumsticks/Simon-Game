'use strict';

require('./effects.js');

var simonArr = [],
    count = 0,
    strictMode = false,
    simonTurn = true,
    userArr = [];

$('.strictButton').on('click', function () {
  strictMode = true;
  $('.strictButton').css('pointerEvents', 'none');
});

var displayCount = function displayCount() {
  simonTurn = false;
  count++;
  $('.countScreen').html(count);
};

/*const newGame = function newGame () {
  let simonArr = [],
  simonTurn = true,
  count = 0,
  userArr = [];
    setTimeout( mainGame, 1000 );
}*/

var replayPattern = function replayPattern() {
  //replay the pattern corresponding with what is contained in the simon array
  //arr.map simon arr, and run the lightUp() and playSound() functions accordingly
  var replayColor = "";
  var i = 0;
  var seconds = 1000 * count;
  simonTurn = true;

  var replayer = function replayer() {
    replayColor = simonArr[i++];
    lightUp(replayColor);
    playSound(replayColor);
    if (i < simonArr.length) {
      setTimeout(replayer, 1000);
    }
  };
  replayer();
  if (count < 20 && simonTurn) {
    setTimeout(function () {
      addToPattern();
    }, seconds);
  }
};

var addToPattern = function addToPattern() {
  var randomNumber = Math.floor(Math.random() * 4) + 1;
  var patternColor = "";
  if (randomNumber === 1) {
    patternColor = "green";
    simonArr.push('green');
  } else if (randomNumber === 2) {
    patternColor = "red";
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
};

addToPattern();

var checkPattern = function checkPattern() {
  //logic that checks if the simonArr and the userArr are the same
  var arrIndex = simonArr.length - 1;
  if (userArr[arrIndex] === simonArr[arrIndex]) {
    console.log('they the same!');
  } else {
    console.log('they not the same!');
    //errorSound.play();
    //
  }
  if (strictMode) {
    if (userArr[arrIndex] === simonArr[arrIndex]) {
      console.log('they the same!');
    } else {
      console.log('they not the same!');
      //errorSound.play();
      //newGame();
    }
  }
};

var userClick = function userClick() {
  //handle user click after the simon game pattern runs
  if (!simonTurn) {
    $('.cell').on('click', function (ev) {
      var cellColor = ev.target.className.split(" ")[0];
      var clickColor = "";
      if (cellColor === 'greenCell') {
        clickColor = "green";
        userArr.push('green');
        lightUp(clickColor);
        playSound(clickColor);
      } else if (cellColor === 'redCell') {
        clickColor = "red";
        userArr.push('red');
        lightUp(clickColor);
        playSound(clickColor);
      } else if (cellColor === 'yellowCell') {
        clickColor = "yellow";
        userArr.push('yellow');
        lightUp(clickColor);
        playSound(clickColor);
      } else if (cellColor === 'blueCell') {
        clickColor = "blue";
        userArr.push('blue');
        lightUp(clickColor);
        playSound(clickColor);
      }

      if (userArr.length === simonArr.length) {
        //checkPattern();
        simonTurn = true;
        setTimeout(function () {
          replayPattern();
        }, 2000);
      }
    });
  };
};

if (!simonTurn) {
  $('.cell').css('pointer-events', 'auto');
  $('.cell').on('click', userClick());
}