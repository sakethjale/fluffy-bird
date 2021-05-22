var birdimg,bird;
var pimg,p,pG;
var pimg2,p2,p2G;
var goimg,go;
var setimg,set;
var bkimg,bk;
var iwall;
PLAY=0;
END=1
gameState="PLAY";

function preload(){
  bkimg=loadImage("bg1.jpg");
  birdimg=loadImage("angry.png");
  pimg=loadImage("pipes.png");
  pimg2=loadImage("pipes2.png");
  goimg=loadImage("gameOver.png");
  setimg=loadImage("reset.png")
}

function setup() {
  createCanvas(600, 400);
   go=createSprite(300,100);
  go.addImage("g",goimg);
   
  
   bk=createSprite(300,300,20,20);
  bk.addImage("b",bkimg)
 
  bird=createSprite(200,200,20,20);
  bird.addImage("d",birdimg);
  bird.scale=0.2
   set=createSprite(0,0);
  set.addImage("s",setimg)
  set.scale=0.4
  set.visible=false
  
  bird.setCollider("circle", 20,30,150)
  bird.debug=true
 
 pG=new Group();
  p2G=new Group();
 
 
}

function draw() {
  background(220);
  
  
 
  if(gameState==="PLAY"){
   
set.visible=false
   go.visible=false
    bird.visible=true
    
    if(keyDown("space")){
      bird.velocityY=-4
     
    }
    bird.velocityY=bird.velocityY+0.5;
     
    
    if(pG.isTouching(bird)){
      pG.setVelocityXEach(0)
    gameState="END"
    }
     if(p2G.isTouching(bird)){
      p2G.setVelocityXEach(0)
    gameState="END"
    }
    
    if(bird.y>500)
     {
       gameState="END"
     }
    
     if(bird.y<0)
     {
       gameState="END"
     }
    
     pipes();
  pipes2(); 
    

  }
  if(gameState==="END"){
    pG.setLifetimeEach(0)
     p2G.setLifetimeEach(0)
    
    bird.y=200
    
    go.visible=true
        go.depth=bk.depth;
    go.depth=go.depth+1 
    set.x=300
    set.y=200
   set.visible=true
    bird.visible=false
    if(mousePressedOver(set)){
      reset();
     
    }
  }
  
  
 

  drawSprites();
}

function pipes(){
if(frameCount%60===0){
 var p=createSprite(630,330,10,10);
  p.addImage("p1",pimg);
  p.scale=0.4;
  p.y=Math.round(random(350,400));
  p.velocityX=-4;
  pG.add(p)
}
}

function pipes2(){
  if(frameCount%90===0){
      p2=createSprite(630,330,40,40);
  p2.addImage("p12",pimg2);
  p2.scale=0.4;
  p2.y=Math.round(random(30,100));
  p2.velocityX=-4;
    p2G.add(p2);
}
  
}

function reset(){
  gameState="PLAY"
}

 