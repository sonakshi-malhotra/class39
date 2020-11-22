var database, game, form, player;
var position;
var gameState, playerCount;
var allPlayers,gameState=0
var car1,car2,cars=[]
function preload(){
  pathImage=loadImage("images/track.jpg")
  car1Image=loadImage("images/car1.png")
  car2Image=loadImage("images/car2.png")
}
function setup(){
  database = firebase.database();
 
  createCanvas(displayWidth,displayHeight);
  game=new Game()
  game.readGameState()
  game.startGame()

 }

function draw(){
 
  if(playerCount===2){
    game.updateGameState(1)  
  }
  if(gameState===1){
    //clear()
    game.play()
  }
  if(gameState===2){
  game.end()
  }
    //drawSprites();
  
}

