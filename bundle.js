/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	$('.ioButton').on('click', function () {
	  var onSound = new Audio('./sounds/onSound.wav');
	  onSound.play();
	  $('.notOn').css('pointer-events', 'auto');
	});

	$('.startButton').on('click', mainGame);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	//figure out which functions are directly dependent on these effects

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

	//addToPattern();

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addToPattern = undefined;

	__webpack_require__(3);

	var addToPattern = exports.addToPattern = function addToPattern() {
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
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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

	exports.playSound = playSound;
	exports.lightUp = lightUp;

/***/ }
/******/ ]);