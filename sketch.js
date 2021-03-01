var canvas ,music;
var block1 , block2;
var block3 , block4;
var player , edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  block1=createSprite(100,550,80,10);
  block1.shapeColor = 'blue';

  block2=createSprite(300,550,80,10);
  block2.shapeColor = 'green';

  block3=createSprite(500,550,80,10);
  block3.shapeColor = 'red';

  block4=createSprite(700,550,80,10);
  block4.shapeColor ='brown';

    //create box sprite and give velocity
   player=createSprite(700,200,20,20);
   player.velocityY=4;
   player.velocityX=4;

   edges=createEdgeSprites();

}

function draw() {
    background(rgb(169,169,169));
  //add condition to check if box touching surface and make it box
    if(block1.isTouching(player) && player.bounceOff(block1)){
    player.shapeColor='blue';
    }

    if(block2.isTouching(player) && player.bounceOff(block2)){
        player.shapeColor='green';
     }

    if(block3.isTouching(player) && player.bounceOff(block3)){
    player.shapeColor='red';
     }
    
    if(block4.isTouching(player) && player.bounceOff(block4)){
    player.shapeColor='brown';
     }

      //create edgeSprite
   
    player.bounceOff(edges);
    drawSprites();
}
