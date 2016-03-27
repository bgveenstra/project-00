//var player1, player2;
$(document).on('ready', function() {
  console.log('JS is loaded!');

  //self-building player objects
  var playersArr = [];
  var boardLength = 7;
  var countPlayers = 2;
  numPlayers(countPlayers); //put input here
  function numPlayers(num){
    for(s = 0; s < num; s++){
      //setting into an array, since you cannot directly alter a var
      playersArr[s] = new Player(randString(), randString(), randString(), s);
    }
    //console.log(playersArr);
  }
  //setting up random strings, to pass on as div identifiers and selectors
  function randString(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  function setUpBoard(){
    for (var q = 0; q < countPlayers; q++){
      console.log(playersArr[q]);
      playmouth = playersArr[q].buildRow();
    }
    return playmouth;
  }
setUpBoard();
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

  //big constructor, to handle all functions per object
  function Player(color, letter, counter, playerPos) {
    this.playerColor = color;
    this.playerLetter = letter;
    //building the board automatically
    this.buildRow = function (){
                          //for(r = 0; r < 2; r++){
                          $('#board').append('<div class="'+this.playerColor+'">player: ' + playerPos + '</div>');
                          //}//for
                          this.buildString();
                          this.keyStroke();
                    };//buildRow
    this.buildString = function (){
                            for(i = 0; i < boardLength; i++){
                              $('.'+this.playerColor).append('<div class="inline ' + this.playerLetter + '" id="' + letter + i + '"> </div>');
                            }//for
                        };//buildString
    //building the key automatiaclly
    this.keyStroke = function (){
                        //console.log("The call is coming from inside the function!");
                         var counter = 0;
                         $(window).on("keypress", function handleKeypress(event) {
                           if(counter === boardLength){
                             alert(color);
                             //reset board
                           }
                           if(event.keyCode === (48 + playerPos)){
                             //$('#a' + count).append("b");
                             //$('#' + this.playerLetter + (count - 1)).empty();
                             $('#' + letter + counter).append(letter);
                             $('#' + letter + counter - 1).text(" ");
                             console.log('#' + letter + counter);
                             counter++;
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
