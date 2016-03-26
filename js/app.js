$(document).on('ready', function() {
console.log('JS is loaded!');

function Player(color, letter) {
  this.playerColor = color;
  this.playerLetter = letter;
  this.buildRow = function (){
                        //for(r = 0; r < 2; r++){
                          $('#board').append('<div class="level">' + this.playerColor + '</div>');
                        //}//for
                        this.buildString();
                  };//buildRow
  this.buildString = function (){
                          for(i = 0; i < 3; i++){
                            $('.level').append('<div class="inline ' + this.playerLetter + '" id="' + this.playerLetter + i + '"></div>');
                          }//for
                      };//buildString
  this.keyStroke = function() {
                    };//keystroke
  this.movement = function() {

  };//movement
}//player
var count = 0;
$(window).on("keypress", function handleKeypress(event) {
  if(event.keyCode === 32){
    //$('#a' + count).append("b");
    $('#' + this.playerLetter + (count - 1) + '')
    $('#' + this.playerLetter + count + '').append("b");
    console.log("b");
    count++;
  }//if
});//keypress

var player1 = new Player("blue", "a");
var player2 = new Player("red", "b");
player1.buildRow();





}); //doc ready
