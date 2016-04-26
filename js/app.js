//var player1, player2;
$(document).on('ready', function() {
  console.log('JS is loaded!');

  //self-building player objects
  var playersArr = [];
  var boardLength = 7;//put input here
  var countPlayers = 3;//put input here
  var Nums = 0;

  createPlayers(countPlayers);


  function createPlayers(num){
    var playerNum = 1;
    for(var s = 0; s < num; s++){
      //setting into an array, since you cannot directly alter a var
      playersArr[s] = new Player(randString(), randString(), playerNum, Nums);
      playerNum++;
    }
    //console.log(playersArr);
  }

  $('#reset').on('click', function(){
    resetPlayers();
  });

  // reset all players' pressNums to 0
  function resetPlayers(){
    for (var i = 0; i < countPlayers; i++){
      playersArr[i].pressNum = 0;
    }
  }

  //setting up random strings, to pass on as div identifiers and selectors
  function randString(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i = 0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  //building the players automatically from the array
  function setUpGame(){
    for (var q = 0; q < countPlayers; q++){
      console.log(playersArr[q]);
      playmouth = playersArr[q].buildRow();
    }
    return playmouth;
  }

  //this is where it all starts!!!!
  setUpGame();


  //big constructor, to handle all functions per object/player
  function Player(color, letter, playerPos) {
    this.playerColor = color;
    this.pressNum = 0;
    // this.playerLetter = letter;

    //building the board automatically - creates the row for this player
    this.buildRow = function (){
      $('#board').append('<div class="size '+this.playerColor+
        '"><img class="avatar" id="' + this.playerColor + '" src=https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/079/233/062b1d4.jpg> ' +
        playerPos + '</div>');
      this.buildString(); // create the series of divs for inside this row
      this.handleKeyStroke(0);  // bind the keyup event for keyCode 47 + playerPos to this player, and note it's pressed 0 keys so far
    };

    // creates a  string for each space on the track row for this player
    this.buildString = function (){
        for(var t = 0; t < boardLength; t++){
          $('.'+this.playerColor).append('<div class="inline clear ' +
            this.playerLetter + '" id="' + letter + t + '">_______</div>');
        }
        //finish line
        $('.'+this.playerColor).append('<div class="inline">|</div>');
    };

    //binding the keypress automatically
    this.handleKeyStroke = function (){
      var that = this;  // save scope
      $(window).on("keyup", function (event) {
        if(event.keyCode === (47 + playerPos)){
          if(that.pressNum === (boardLength-1)){ // we have a winner!
            // change appearance of board div when someone wins
            console.log(that,  " wins!");
            $('#' + letter + that.pressNum).text(".");
            $('#' + letter + (that.pressNum-1)).text("_______");
            console.log(that.pressNum);
            alert('player' + playerPos + ' has won!');
            $('.clear').text("_______");
//I could not get the board to reset properly
            resetPlayers();
          } else {  // not at end of game
            $('#' + letter + that.pressNum).append("<img class=avatar src=http://i.imgur.com/mRGbsfa.jpg>");
            $('#' + letter + (that.pressNum-1)).text("_______");
            console.log('#' + letter + that.pressNum);
            that.pressNum++;
          }
        }//if key code
      });//keypress
    }; //handleKeyStroke
  }//Player

}); //doc ready
