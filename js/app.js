//var player1, player2;
$(document).on('ready', function() {
  console.log('JS is loaded!');

  //self-building player objects
  var playersArr = [];
  var boardLength = 7;//put input here
  var countPlayers = 2;//put input here

  numPlayers(countPlayers);


  function numPlayers(num){
    var not = 1;
    for(var s = 0; s < num; s++){
      //setting into an array, since you cannot directly alter a var
      playersArr[s] = new Player(randString(), randString(), randString(), not);
      not++;
    }
    //console.log(playersArr);
  }

  //generates random Avater, player image
  function randAvatar(input){
    //can hard code in playerbuild for loop
    //api to search spotify album covers for avater
  }

  //generates random token
  function randToken(){
    //can hard code in player for loop
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

  //truning the array of objects, into objects with different names
  //playersArr.forEach(function (element, index){
  //  element = player+index;
  //});

  //sample hard coded player objects
  //player1 = new Player("blue", "a", "count", 1);
  //player2 = new Player("red", "b", "up", 2);
//playersArr[0].buildRow();
//playersArr[1].buildRow();
//playersArr[2].buildRow();
  //player1.buildString();
  //player2.buildString();

  //big constructor, to handle all functions per object/player
  function Player(color, letter, counter, playerPos) {
    this.playerColor = color;
    this.playerLetter = letter;
    //building the board automatically
    this.buildRow = function (){
                          //for(r = 0; r < 2; r++){
                          $('#board').append('<div class="green '+this.playerColor+'"><img class="avatar" src=https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/8/005/079/233/062b1d4.jpg> ' + playerPos + '</div>');
                          //}//for
                          this.buildString();
                          this.keyStroke();
                    };//buildRow
    this.buildString = function (){
                            for(var t = 0; t < boardLength; t++){
                              $('.'+this.playerColor).append('<div class="inline ' + this.playerLetter + '" id="' + letter + t + '"> </div>');
                            }//for
                        };//buildString
    //building the keypress automatiaclly
    this.keyStroke = function (){
                        //console.log("The call is coming from inside the function!");
                         var counter = 1;
                         $(window).on("keypress", function handleKeypress(event) {
                           if(event.keyCode === (47 + playerPos)){
                             if(counter === boardLength){
                               alert(color);
                               //$('#board').remove();
                               $('.inline').empty();
                               //$('.inline').remove();
                               counter = 1;
                               //playersArr = [];
                               //letter = '';
                               //numPlayers(countPlayers);
                               //setUpGame();
                             }else{
                             //$('#a' + count).append("b");
                             //$('#' + this.playerLetter + (count - 1)).empty();
                             $('#' + letter + counter).append(letter);
                             //$('#' + letter + counter - 1).text(" ");
                             console.log('#' + letter + counter);
                             counter++;
                           }
                           }//if
                         });//keypress
                      };
    this.movement = function() {

                    };//movement
  }//player

  // var count = 0;
  // $(window).on("keypress", function handleKeypress(event) {
  //   if(event.keyCode === 32){
  //     //$('#a' + count).append("b");
  //     //$('#' + player1.playerLetter + (count - 1)).empty();
  //     $('#' + player1.playerLetter + count).append(player1.playerLetter);
  //     $('#' + player1.playerLetter + count - 1).text(" ");
  //     console.log('#' + player1.playerLetter + count);
  //     count++;
  //   }//if
  // });//keypress
  //
  // var up = 0;
  // $(window).on("keypress", function handleKeypress(event) {
  //   if(event.keyCode === 49){
  //     //$('#a' + up).append("b");
  //     //$('#' + letter + (up - 1)).empty();
  //     $('#' + player2.playerLetter + up).append(player2.playerLetter);
  //     console.log('#' + letter + up);
  //     up++;
  //   }//if
  // });//keypress





}); //doc ready
