  import './addToPattern';
  //figure out which functions are directly dependent on these effects

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



    //addToPattern();

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
