var ground , groundImg;
var unicorn, unicornImage , unicornJump;


function preload(){
     
   unicornImage = loadImage("rarity.png");
   unicornJump  = loadImage("jump.png");
   unicornDug  = loadImage("dug.png")
   //groundImg = loadImage("ground.png")

}

function setup(){


    createCanvas(800,400);

    // creating the unicorn sprite

    unicorn = createSprite(50,300,10,10)
    unicorn.addImage(unicornImage)
    unicorn.scale = 0.2
    unicorn.debug = true
    unicorn.setCollider("rectangle",0,0,300,300)

}

function draw(){
    background("pink")

    //moving the unicorn up and down and making the game mobile compatible using touches
if(keyWentDown("UP_ARROW")||touches.length>0){
   unicorn.y =unicorn.y-30
   unicorn.addImage(unicornJump)
   unicorn.scale = 0.5
}
else if(keyWentUp("UP_ARROW")||touches.length>0){
  unicorn.y =unicorn.y+30
  unicorn.addImage(unicornImage)
  unicorn.scale = 0.2
}
if(keyWentDown("DOWN_ARROW")||touches.length>0){
    unicorn.y = unicorn.y+30
    unicorn.addImage(unicornDug)
    unicorn.scale = 0.2
   }
  else if(keyWentUp("DOWN_ARROW")|| touches.length>0){
    unicorn.y =unicorn.y-30
    unicorn.addImage(unicornImage)
    unicorn.scale = 0.2
  }


  drawSprites();
}