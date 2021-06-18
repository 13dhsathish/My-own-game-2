var tanjiro;
var tanjiroImg;
var doma, domaImg;
var rui, ruiImg;
var muzan, muzanImg;
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20;
var sword;
var swordImg;
function preload()
{
tanjiroImg = loadImage("tanjiro.png");
domaImg = loadImage("doma.png");
ruiImg = loadImage("rui.png");
muzanImg = loadImage("muzan.png");
swordImg = loadImage("rengoku1.jpeg");	
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	tanjiro = createSprite(displayWidth - 50, displayHeight - 60, 40, 100);
	tanjiro.addImage("protaganist", tanjiroImg);
	tanjiro.scale = 0.3;

	doma = createSprite(displayWidth/2, displayHeight/2, 40, 40);
	doma.addImage("villain", domaImg);
	doma.scale = 0.2;

	rui = createSprite(displayWidth/2 - 100, displayHeight/2 , 40, 40);
	rui.addImage("villain", ruiImg);
	rui.scale = 0.22;

	muzan = createSprite(displayWidth/2 + 100, displayHeight/2 , 40, 40);
	muzan.addImage("villain", muzanImg);
	muzan.scale = 0.2;

	sword = createSprite(displayWidth/4, displayHeight/2, 20, 30);
	sword.addImage("destination", swordImg);
	sword.scale = 0.2;

	m1 = createSprite(0, 0, displayWidth/2, 10);
	m1.shapeColor = "green";

	m2 = createSprite(displayWidth/4, 20, 8, displayHeight/2	);
	m2.shapeColor = "green";

	m3 = createSprite(displayWidth/2, 30, 7, displayHeight/2	);
	m3.shapeColor = "green";

	m4 = createSprite(120, 250, displayWidth/4, 8);
	m4.shapeColor = "green";

	m5 = createSprite(displayWidth/5, 450, 8, displayHeight/2);
	m5.shapeColor = "green";

	m6 = createSprite(0, 0, displayWidth/2, 10);
	m6.shapeColor = "green";
	
	m7 = createSprite(displayWidth/5, 450, 8, displayHeight/2);
	m7.shapeColor = "green";

	m8 = createSprite(0, 0, displayWidth/2, 10);
	m8.shapeColor = "green";

	m9 = createSprite(displayWidth/5, 450, 8, displayHeight/2);
	m9.shapeColor = "green";
	
	m10 = createSprite(0, 0, displayWidth/2, 10);
	m10.shapeColor = "green";

	m11 = createSprite(displayWidth/4, 20, 8, displayHeight/2);
	m11.shapeColor = "green";

	m12 = createSprite(0, 0, displayWidth/4, 8);
	m12.shapeColor = "green";

	m13 = createSprite(displayWidth/2, 20, 8, displayHeight/4);
	m13.shapeColor = "green";
	
	m14 = createSprite(0, 0, displayHeight/2, 8);
	m14.shapeColor = "green";

	m15 = createSprite(displayWidth/2, 20, 8, displayHeight/4);
	m15.shapeColor = "green";

	m16 = createSprite(0, 0, displayHeight/2, 8);
	m16.shapeColor = "green";

	m17 = createSprite(displayWidth/2, 20, 8, displayHeight/4);
	m17.shapeColor = "green";

	m18 = createSprite(0, 0, displayHeight/2, 8);
	m18.shapeColor = "green";

	m19 = createSprite(displayWidth/2, 20, 8, displayHeight/4);
	m19.shapeColor = "green";

	m20 = createSprite(0, 0, displayHeight/2, 8);
	m20.shapeColor = "green";
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



