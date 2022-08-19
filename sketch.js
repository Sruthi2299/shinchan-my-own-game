 var shinchan , shinchanImg;
 var house , houseImg;
 var deathCount = 0;
 var stone1 , stone2 , stone3 , stone4 , stone5 , stone6;
 var stone7 , stone8 , stone9 , stone10 , stone11 , stone12;
 var wall , wall1 , wall2 , wall3 , wall4 , wall5;
 var wall6 , wall7 , wall8 , wall9 , wall10;
 var wall11 , wall12 , wall13 , wall14 , wall15;
 var wall16 , wall17 , wall18 , wall19 , wall20;
 var wall21 , wall22 , wall23 , wall24 , wall25;
 var invisibleGround , invisibleGround1 , invisibleGround2 , invisibleGround3;



function preload(){

  shinchanImg = loadImage("shinchan.png");
  houseImg = loadImage("shinchan house.png");

}

function setup() {
  createCanvas(400,400);
 
  shinchan = createSprite(20,375,50,50);
  shinchan.addImage(shinchanImg);
  shinchan.scale = 0.05;

  house = createSprite(200,200);
  house.addImage(houseImg);
  house.scale = 0.10;

  invisibleGround = createSprite(0,399,10,800);
  invisibleGround1 = createSprite(399,0,10,800);
  invisibleGround2 = createSprite(0,399,800,10);
  invisibleGround3 = createSprite(399,0,800,10);

  stone1 = createSprite(125,300,10,10);
  stone2 = createSprite(225,380,10,10);
  stone3 = createSprite(325,25,25,5);
  stone4 = createSprite(375,375,25,5);
  stone5 = createSprite(250,25,5,50);
  stone6 = createSprite(240,25,5,50);
  stone7 = createSprite(180,75,5,50);
  stone8 = createSprite(170,75,5,50);
  stone9 = createSprite(100,25,5,50);
  stone10 = createSprite(90,25,5,50);
  stone11 = createSprite(100,150,10,10);
  stone12 = createSprite(150,250,10,10);

  wall = createSprite(20,345,55,5);
  wall1 = createSprite(200,397,400,5);
  wall2 = createSprite(75,345,55,5);
  wall3 = createSprite(100,317,5,60);
  wall4 = createSprite(125,290,55,5);
  wall5 = createSprite(150,317,5,60);
  wall6 = createSprite(175,345,55,5);
  wall7 = createSprite(200,317,5,55);
  wall8 = createSprite(225,290,55,5);
  wall9 = createSprite(250,317,5,55);
  wall10 = createSprite(275,345,55,5);
  wall11 = createSprite(300,222,5,250);
  wall12 = createSprite(398,200,5,400);
  wall13 = createSprite(200,3,400,5);
  wall14 = createSprite(175,100,250,5);
  wall15 = createSprite(2,150,5,300);
  wall16 = createSprite(53,125,5,50);
  wall17 = createSprite(25,300,50,5);
  wall18 = createSprite(50,277,5,50);
  wall19 = createSprite(60,150,20,5);
  wall20 = createSprite( 58,253,20,5);
  wall21 = createSprite(67,267,5,30);
  wall22= createSprite(68,137,5,30)
  wall23 = createSprite(165, 123,200,5);
  wall24 = createSprite(165,284,200,5);
  wall25 = createSprite(265, 203,5,165);


  stone1.velocityX=0;
  stone1.velocityY=1;
  stone2.velocityX=0;
  stone2.velocityY=-1;
  stone3.velocityX=0;
  stone3.velocityY=6;
  stone4.velocityX=0;
  stone4.velocityY=-6;
  stone11.velocityX=0;
  stone11.velocityY=3;
  stone12.velocityX=0;
  stone12.velocityY=-3;

}

function draw() {
  background("indigo");  


  shinchan.velocityX= 0;
  shinchan.velocityY= 0;

  stone1.bounceOff(wall1);
  stone1.bounceOff(wall4);
  stone2.bounceOff(wall1);
  stone2.bounceOff(wall8);
  stone3.bounceOff(wall1);
  stone3.bounceOff(invisibleGround);
  stone3.bounceOff(invisibleGround3);
  stone4.bounceOff(wall1);
  stone4.bounceOff(invisibleGround);
  stone4.bounceOff(invisibleGround3);
  stone11.bounceOff(wall23);
  stone11.bounceOff(wall24);
  stone12.bounceOff(wall23);
  stone12.bounceOff(wall24);

  shinchan.collide(invisibleGround)
  shinchan.collide(invisibleGround1)
  shinchan.collide(invisibleGround2)
  shinchan.collide(invisibleGround3)
 
  shinchan.collide(wall)
  shinchan.collide(wall1)
  shinchan.collide(wall2)
  shinchan.collide(wall3)
  shinchan.collide(wall4)
  shinchan.collide(wall5)
  shinchan.collide(wall6)
  shinchan.collide(wall7)
  shinchan.collide(wall8)
  shinchan.collide(wall9)
  shinchan.collide(wall10)
  shinchan.collide(wall11)
  shinchan.collide(wall12)
  shinchan.collide(wall13)
  shinchan.collide(wall14)
  shinchan.collide(wall15)
  shinchan.collide(wall16)
  shinchan.collide(wall17)
  shinchan.collide(wall18)
  shinchan.collide(wall19)
  shinchan.collide(wall20)
  shinchan.collide(wall21)
  shinchan.collide(wall22)
  shinchan.collide(wall23)
  shinchan.collide(wall24)
  shinchan.collide(wall25)




  fill("yellow");
  text("Deaths: "+deathCount, 160,150);
  
 if (keyDown("UP_ARROW")) {
 shinchan.velocityX=0;
 shinchan.velocityY=-5;
 }
 
 if (keyDown("DOWN_ARROW")) {
shinchan.velocityX=0;
shinchan.velocityY=5;
 }
 
 if (keyDown("LEFT_ARROW")) {
 shinchan.velocityX=-5;
 shinchan.velocityY=0;
 }
 
 if (keyDown("RIGHT_ARROW")) {
 shinchan.velocityX=5;
 shinchan.velocityY=0;
 }
 
 if (shinchan.collide(house)) {
   fill("yellow");
   textSize(20);
   text("Hurray",120,200);
  shinchan.velocityX= 0;
  shinchan.velocityY= 0;
  stone1.velocityX=0;
  stone1.velocityY=0;
  stone2.velocityX=0;
  stone2.velocityY=0;
  stone3.velocityX=0;
  stone3.velocityY=0;
  stone4.velocityX=0;
  stone4.velocityY=0;
  stone11.velocityX=0;
  stone11.velocityY=0;
  stone12.velocityX=0;
  stone12.velocityY=0;
 }
 
 
 
 
if (shinchan.collide(stone1) || shinchan.collide(stone2) || shinchan.collide(stone3) || shinchan.collide(stone4) || shinchan.collide(stone5) || shinchan.collide(stone6) || shinchan.collide(stone7) || shinchan.collide(stone8) || shinchan.collide(stone9) || shinchan.collide(stone10) || shinchan.collide(stone11) || shinchan.collide(stone12) ) {
  shinchan.x=20;
  shinchan.y=375;
  deathCount=deathCount+1;
   
}

  drawSprites();
}