var bananaImage,obstacleImage;
var obstacleGroup;
var background,score;
var groundImage;
var playerRuning;
var BananaGroup,obstacleGroup;
var stone;
var player;
var end,score;
var gameOver,restart;
function preload(){
  backImage=loadImage("jungle.jpg");
 playerRuning=loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("Banana.png");
  obstacleImage=loadImage("stone.png");
end=0;
 
}

function setup() {
  createCanvas(400,400);
  player= createSprite(50,380,20,20);
  player.addAnimation(Runing,"PlayerRuning");
  stone=createSprite(400,365,10,40)
  stone.addAnimation(stone.png);
  BananaGroup = new Group();
 obstacleGroup = new Group();
}


function draw(){
 background(255); 
   if(keyDown("space"))   {
     player.velocityY=-6;
     }
  if(playerGroup.isTouching(BananaGroup)) {
     score=score+1;
     bananaGroup.destroyEach();
     }
   if(playerGroup.isTouching(obstacleGroup)) {
   gameState=end;
     }
  player.velocityY=player.velocityY+1;
  if(obstaclesGroup.isTouching(player)) {
     player.scale=0.2;
     }
  text("SCORE:   "+score,270,30);
  drawSprites();
  if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    ground.velocityX = 0;
    player.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    
    obstacleGroup.setLifetimeEach(-1);
    BananaGroup.setLifetimeEach(-1);
  }
 
  
  switch (score){
    case 10:player.scale=0.12;
           break;
   case 20:player.scale=0.14;
            break;
    case 30:player.scale=0.16;     
           break;
   case 40:player.scale=0.18; 
      break;
      default: break;
}
}
    function obstacleGroup() {
  if(World.frameCount % 60 === 0) {
    var stone = createSprite(400,365,10,40);
    stone.velocityX = - (6 + 3*count/100);
    
    stone.addImage("stone");
    
    //assign scale and lifetime to the obstacle           
    stone.scale = 0.5;
    stone.lifetime = 170;
    //add each obstacle to the group
    ObstacleGroup.add(stone);
    
  }
      
}

function BananaGroup() {
  //write code here to spawn the clouds
  if (World.frameCount % 40 === 0) {
    var Banana= createSprite(400,320,40,10);
    Banana.y = randomNumber(280,320);
    Banana.addImage("carrot");
    Banana.scale = 0.5;
    Banana.velocityX = -3;
    
     //assign lifetime to the variable
    Banana.lifetime = 134;
  
    
    //add each cloud to the group
    BananaGroup.add(banana);
  }
  
}  
      
      
      
      
      
      