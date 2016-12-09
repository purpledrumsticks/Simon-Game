$('.ioButton').on('click', () => {
  let onSound = new Audio('./sounds/onSound.wav');
  onSound.play();
  $('.notOn').css('pointer-events', 'auto');
});

const mainGame = function  mainGame () {

  let simonArr = [],
  count = 0,
  strictMode = false,
  simonTurn = true,
  userArr = [];

  $('.strictButton').on('click', () => {
    strictMode = true;
    $('.strictButton').css('pointerEvents', 'none');
  })


  const displayCount = function displayCount () {
    simonTurn = false;
    count++;
    $('.countScreen').html(count);
  }

  /*const newGame = function newGame () {
    let simonArr = [],
    simonTurn = true,
    count = 0,
    userArr = [];

    setTimeout( mainGame, 1000 );
  }*/

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






  const replayPattern = function replayPattern () {
    //replay the pattern corresponding with what is contained in the simon array
   //arr.map simon arr, and run the lightUp() and playSound() functions accordingly
   let replayColor = "";
   let i = 0;
   let seconds = 1000 * count;
   simonTurn = true;

   const replayer = function replayer () {
     replayColor = simonArr[i++];
     lightUp(replayColor);
     playSound(replayColor);
       if (i < simonArr.length) {
         setTimeout( replayer, 1000 );
       }
     }
     replayer();
     if (count < 20 && simonTurn) {
      setTimeout(() => { addToPattern(); }, seconds);
     }
  }

  const addToPattern = function addToPattern () {
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
  };

    addToPattern();

  const checkPattern = function checkPattern () {
    //logic that checks if the simonArr and the userArr are the same
    let arrIndex = simonArr.length - 1;
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

  const userClick = function userClick () {
    //handle user click after the simon game pattern runs
      if (!simonTurn) {
        $('.cell').on('click', (ev) => {
        let cellColor = ev.target.className.split(" ")[0];
        let clickColor = "";
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
        } else if (cellColor === 'blueCell'){
          clickColor = "blue";
          userArr.push('blue');
          lightUp(clickColor);
          playSound(clickColor);
        }

        if(userArr.length === simonArr.length) {
          //checkPattern();
          simonTurn = true;
          setTimeout(() => { replayPattern(); }, 2000);
        }
    })};

}

  if (!simonTurn) {
    $('.cell').css('pointer-events', 'auto');
    $('.cell').on('click', userClick());
  }

}


  $('.startButton').on('click', mainGame);
