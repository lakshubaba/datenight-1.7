//adding matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//object variables
var b,p;
var gb1,gb2,gb3,gb4,gb5;
var flag1 = 0;
var flag2 = 0;	
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;
var bg_Img,b_Img,p_Img;
var gm;

function preload()
{
	bg_Img = loadImage("bg.png");
	b_Img = loadImage("b.png");
	p_Img = loadImage("Pink_Monster.png");
	gm=loadSound("gamemusic.mp3");

}
function setup()
{
	createCanvas(1500,1000);

 
	//making world 
	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies 
	b = new Blueb(200,600,50,50);
	//b.addImg(b_Img);
	p = new Pinkb(1300,600,50,50);
	gb1 = createSprite(200,700,200,20);
	gb2 = createSprite(1300,700,200,20);
	gb3 = createSprite(550,450,200,20);
	gb4 = createSprite(950,450,200,20);
	gb5 = createSprite(750,250,200,20);
}

function draw() {
  
  	background(bg_Img,1500,1000);
  	Engine.update(engine)
  	//displaying the objects
 	b.display();
 	p.display();
 /*	gb1.display();
 	gb2.display();
 	gb3.display();
 	gb4.display();
 	gb5.display();*/


	var bbody = b.body.position;
	var pbody = p.body.position;
	/*var gb1 = gb1.body.position;
	var gb2 = gb2.body.position;
	var gb3 = gb3.body.position;
	var gb4 = gb4.body.position;
	var gb5 = gb5.body.position;*/
	

	//main element 
	if(gb2.y - bbody.y < b.height/2 + gb2.height/2 && bbody.y - gb2.y < b.height/2 + gb2.height/2 &&
		gb2.x - bbody.x < b.width/2 + gb2.width/2 && bbody.x - gb2.x < b.width/2 + gb2.width/2  && flag2===0)
	{
		gb2.color = "cyan";
		Matter.Body.setStatic(bbody,true);
		flag2 = 1;
	}


	if(gb1.y - bbody.y < b.height/2 + gb1.height/2 && bbody.y - gb1.y < b.height/2 + gb1.height/2 &&
		gb1.x - bbody.x < b.width/2 + gb1.width/2 && bbody.x - gb1.x < b.width/2 + gb1.width/2 && flag1===0)
	{
		gb1.color = "cyan";
		flag1 = 1;
	}

	
	if(gb3.y - bbody.y < b.height/2 + gb3.height/2 && bbody.y - gb3.y < b.height/2 + gb3.height/2 &&
		gb3.x - bbody.x < b.width/2 + gb3.width/2 && bbody.x - gb3.x < b.width/2 + gb3.width/2  && flag3===0)
	{
		gb3.color = "cyan";
		flag3 = 1;
	}

	if(gb4.y - bbody.y < b.height/2 + gb4.height/2 && bbody.y - gb4.y < b.height/2 + gb4.height/2 &&
		gb4.x - bbody.x < b.width/2 + gb4.width/2 && bbody.x - gb4.x < b.width/2 + gb4.width/2  && flag4===0)
	{
		gb4.color = "cyan";
		flag4 = 1;
	}

	if(gb5.y - bbody.y < b.height/2 + gb5.height/2 && bbody.y - gb5.y < b.height/2 + gb5.height/2 &&
		gb5.x - bbody.x < b.width/2 + gb5.width/2 && bbody.x - gb5.x < b.width/2 + gb5.width/2  && flag5 ===0)
	{
		
		flag5 = 1;
	}
    


   	 if(gb5.y - bbody.y < b.height/2 + gb5.height/2 && bbody.y - gb5.y < b.height/2 + gb5.height/2 &&
		gb5.x - bbody.x < b.width/2 + gb5.width/2 && bbody.x - gb5.x < b.width/2 + gb5.width/2 && gb5.y - pbody.y < p.height/2 + gb5.height/2 && pbody.y - gb5.y < p.height/2 + gb5.height/2 &&
			gb5.x - pbody.x < p.width/2 + gb5.width/2 && pbody.x - gb5.x < p.width/2 + gb5.width/2)
		{
        
		}
//   coloring for p 
//    |
//    V

	
//jumping movement

	if(gb1.y - pbody.y < p.height/2 + gb1.height/2 && pbody.y - gb1.y < p.height/2 + gb1.height/2 &&
		gb1.x - pbody.x < p.width/2 + gb1.width/2 && pbody.x - gb1.x < p.width/2 + gb1.width/2 && flag1 === 0 )
	{
		gb1.color = "pink";
		flag1 = 1;
	}

	if(gb2.y - pbody.y < p.height/2 + gb2.height/2 && pbody.y - gb2.y < p.height/2 + gb2.height/2 &&
		gb2.x - pbody.x < p.width/2 + gb2.width/2 && pbody.x - gb2.x < p.width/2 + gb2.width/2 && flag2 === 0)
	{
		gb2.color = "pink";
		flag2 = 1;
	}
	
	if(gb3.y - pbody.y < p.height/2 + gb3.height/2 && pbody.y - gb3.y < p.height/2 + gb3.height/2 &&
		gb3.x - pbody.x < p.width/2 + gb3.width/2 && pbody.x - gb3.x < p.width/2 + gb3.width/2 && flag3 === 0)
	{
		gb3.color = "pink";
		flag3 = 1;
	}

	if(gb4.y - pbody.y < p.height/2 + gb4.height/2 && pbody.y - gb4.y < p.height/2 + gb4.height/2 &&
		gb4.x - pbody.x < p.width/2 + gb4.width/2 && pbody.x - gb4.x < p.width/2 + gb4.width/2 && flag4 === 0)
	{
		gb4.color = "pink";
		flag4 = 1;
	}
/*
	if(gb5.y - pbody.y < p.height/2 + gb5.height/2 && pbody.y - gb5.y < p.height/2 + gb5.height/2 &&
		gb5.x - pbody.x < p.width/2 + gb5.width/2 && pbody.x - gb5.x < p.width/2 + gb5.width/2 && flag5 === 0)
	{
		gb5.color = "pink";
		flag5 = 1;
	}
	*/
	/*if(b.body.position.y-25 === gb1.body.position.y+10)
	{
		gb1.shapeColor = "blue"
	}
	*/
	

//movement of the players
 if(keyWentDown(UP_ARROW)&&(b.body.speed <= 1))
 {
	Body.applyForce(b.body,b.body.position,{x:0,y:-0.13});
	Matter.Body.setStatic(bbody,false);
 }

 if(keyWentDown(RIGHT_ARROW))
 {
	Body.applyForce(b.body,b.body.position,{x:0.10,y:0});
 }

 if(keyWentDown(LEFT_ARROW))
 {
	Body.applyForce(b.body,b.body.position,{x:-0.10,y:0});
 }

 if(keyWentDown("W")&&(p.body.speed <= 1))
 {
	Body.applyForce(p.body,p.body.position,{x:0,y:-0.13});
 }

 if(keyWentDown("D"))
 {
	Body.applyForce(p.body,p.body.position,{x:0.10,y:0});
 }

 if(keyWentDown("A"))
 {
	Body.applyForce(p.body,p.body.position,{x:-0.10,y:0});
 }
 gm.play();


  drawSprites();
 
}