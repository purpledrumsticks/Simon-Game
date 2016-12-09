'use strict';

$('.ioButton').on('click', function () {
  var onSound = new Audio('./sounds/onSound.wav');
  onSound.play();
  $('.notOn').css('pointer-events', 'auto');
});

var mainGame = function mainGame() {

  var simonArr = [],
      count = 0,
      strictMode = false,
      userArr = [];

  $('.strictButton').on('click', function () {
    strictMode = true;
    $('.strictButton').css('pointerEvents', 'none');
  });

  /*const newGame = function newGame () {
    let simonArr = [],
    simonTurn = true,
    count = 0,
    userArr = [];
      setTimeout( mainGame, 1000 );
  }*/

  var playSound = function playSound(color) {
    //play sound that corresponds with color
    var greenSound = new Audio('./sounds/simonSound1.wav'),
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
  };

  var lightUp = function lightUp(color) {
    //light up cell that is same color as randomColor
    var greenCell = $('.greenCell'),
        redCell = $('.redCell'),
        yellowCell = $('.yellowCell'),
        blueCell = $('.blueCell');

    if (color === 'green') {
      greenCell.css('background-color', '#329932');
      setTimeout(function () {
        greenCell.css('background-color', 'green');
      }, 500);
    } else if (color === 'red') {
      redCell.css('background-color', '#FF5A5A');
      setTimeout(function () {
        redCell.css('background-color', 'red');
      }, 500);
    } else if (color === 'yellow') {
      yellowCell.css('background-color', '#FFFF4C');
      setTimeout(function () {
        yellowCell.css('background-color', 'yellow');
      }, 500);
    } else if (color === 'blue') {
      blueCell.css('background-color', '#3232FF');
      setTimeout(function () {
        blueCell.css('background-color', 'blue');
      }, 500);
    }
  };

  var gamePlayFunctions = function gamePlayFunctions() {

    $('.cell').css('pointer-events', 'none');
    $('.cell').css('cursor', 'auto');

    var replayOnError = function replayOnError() {
      var replayColor = "";
      var i = 0;
      var seconds = 1000 * count;

      var replayer = function replayer() {
        replayColor = simonArr[i++];
        lightUp(replayColor);
        playSound(replayColor);
        if (i < simonArr.length) {
          setTimeout(replayer, 1000);
        }
      };
      replayer();
      setTimeout(function () {
        userFunctions();
      }, seconds);
    };

    var checkPattern = function checkPattern() {
      //logic that checks if the simonArr and the userArr are the same
      var arrIndex = simonArr.length - 1;
      var errorSound = new Audio('./sounds/errorSound.wav');
      if (userArr[arrIndex] === simonArr[arrIndex]) {
        console.log('they the same!');
        setTimeout(function () {
          return gamePlayFunctions();
        }, 2000);
      } else {
        console.log('they not the same!');
        errorSound.play();
        setTimeout(function () {
          return replayOnError();
        }, 1500);
      }
      if (strictMode) {
        if (userArr[arrIndex] === simonArr[arrIndex]) {
          console.log('they the same!');
        } else {
          console.log('they not the same!');
          errorSound.play();
          //newGame();
        }
      }
    };

    var userFunctions = function userFunctions() {
      userArr = [];
      $('.cell').css('pointer-events', 'auto');
      $('.cell').css('cursor', 'pointer');

      $('.cell').unbind().on('click', function (ev) {
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
          checkPattern();
        }
      });
    };

    var displayCount = function displayCount() {
      count++;
      $('.countScreen').html(count);
      return userFunctions();
    };

    var replayPattern = function replayPattern() {
      var replayColor = "";
      var i = 0;
      var seconds = 1000 * count;

      var replayer = function replayer() {
        replayColor = simonArr[i++];
        lightUp(replayColor);
        playSound(replayColor);
        if (i < simonArr.length) {
          setTimeout(replayer, 1000);
        }
      };
      replayer();
      if (count < 20) {
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
      return displayCount();
    };

    if (count === 0) {
      addToPattern();
    } else {
      replayPattern();
    }
  };

  gamePlayFunctions();
};

$('.startButton').on('click', mainGame);