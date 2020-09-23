let fire = 0;
let r;
let g;
let b;
let x = 400;
let i = 0;
let j = 0;
let k = 0;
let cloudx = 100;
let cloudy = 100;
let cloud1;
let cloud2;
let cloud3;

function setup() {  
  createCanvas(400, 400);
  angleMode(DEGREES);
  r = random(255);
  g = random(255);
  b = random(255);
  
  cloud1 = new Cloud(cloudx, cloudy, 70,50);
  cloud2 = new Cloud(cloudx -60,cloudy +110,20,50);
  cloud3 = new Cloud(cloudx -50, cloudy -75);
}
  
function draw() {
  background(210,mouseX,mouseY);
  
  cloud1.display(); 
  cloud2.display();
  cloud3.display();
  cloud1.move(); 
  cloud2.move(); 
  cloud3.move();
  
  drawDinosaurbody();
  drawDinosaurtail();
  drawDinosaurhead();
  drawDinosaurhorn();
  drawDinosaureye();
  drawDinosaurmouth(); 
  drawDinosaurarms();    
  drawDinosaurmouth();
  drawTailFire(fire);
  drawDinosaurhornontheback(); 
  drawDinosaurgloves();
}

function mousePressed(){  
    
    if (mouseX > width * 0.7  && mouseX < width * 0.9 
        && mouseY > height * 0.08 && mouseY < height * 0.55) 
    {
      let fire = dist(mouseX, mouseY, 260, 100);
        if (fire < 100) {
          r = random(180,255);
          g = random(0, 60);
          b = random(0, 60);
        }
    }
}
  
// draw dinosaur body

function drawDinosaurbody(){
  fill(6, 199, 0);
  noStroke();
  beginShape();
  vertex(width *0.55, height *0.25);
  vertex(width *0.7, height *0.30);
  vertex(width *0.6, height *0.9);
  vertex(width *0.55, height *0.9);
  vertex(width *0.5, height *0.8);
  vertex(width *0.29, height *0.8);
  vertex(width *0.2, height *0.9);
  vertex(width *0.1, height *0.9);
  endShape(CLOSE)
  
  beginShape();
  vertex(width* 0.725, height* 0.3625);
  vertex(width* 0.75, height* 0.4125);
  vertex(width* 0.775, height* 0.3875)
  vertex(width* 0.7875 , height* 0.4)
  vertex(width* 0.8075,height* 0.4125)
  vertex(width* 0.825,height* 0.3875)
  vertex(width* 0.8375,height* 0.4125)
  vertex(width* 0.875,height* 0.3625)
  endShape(CLOSE)
  }
  
// draw dinosaur tail
function drawDinosaurtail(){
  fill(6, 199, 0);
  noStroke();
  beginShape();
  vertex(width *0.20,height * 0.9);
  vertex(width *0.1, height *0.09);
  vertex(width *0.2, height * 0.4);
  vertex(width *0.4, height * 0.7);
  vertex(width *0.3, height * 0.75);
  endShape(CLOSE)
  
}

// draw Cloud
function drawCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  ellipse(cloudx, cloudy, 70,50);
  ellipse(cloudx +10,  cloudy + 10,70,50);
  ellipse(cloudx - 20, cloudy +10,70,50);
}

// draw dinosaur head
function drawDinosaurhead(){
  fill(6, 199, 0);
  noStroke(0);
  circle(width * 0.7, width * 0.3, width * 0.32);
}

// draw dinosaur horn
function drawDinosaurhorn(){  
  fill(6, 199, 0);
  noStroke(0);
  triangle(width * 0.82, i, width * 0.72 , j ,width *0.9, k);
  
  i +=1    //speed
  j +=1    //speed
  k +=1    //speed
  
  if (i > 96)
    i = 96
  if (j > 40)
    j = 40
  if (k > 80)
    k = 80
  }

// draw dinosaur eye
function drawDinosaureye(){
  fill(6, 199, 0);
  strokeWeight(3);
  stroke(0);
  line(width *0.7,height *0.20,width* 0.78, height *0.23);
  line(width *0.7, height *0.17,width* 0.75, height * 0.22);
  line(width *0.69, height *0.17,width* 0.74, height * 0.21);
  line(width *0.70, height *0.19,width* 0.73, height * 0.20);
  
  noStroke(0);
  fill(199, 0, 0);
  circle(295, 95 , 14);
}

// draw dinosaur arms
function drawDinosaurarms(){
  fill(6, 199, 0);
  beginShape();
  vertex(width * 0.72, height * 0.73);
  vertex(width * 0.65, height * 0.65);
  vertex(width * 0.7, height * 0.55);
  vertex(width * 0.73, height * 0.5);
  vertex(width * 0.5, height * 0.65);
  endShape(CLOSE)
}

function drawDinosaurgloves(){
  // draw dinosaur gloves
  fill(20,50,223)
  circle(x,205,18)
  circle(x,290,18)
  
  x -= 1  //direction + speed (right to left)
  if (x < 295) {
    x = 295;
  }
}

// draw dinosaur mouth
function drawDinosaurmouth(){
  fill(237, 34, 93);
  beginShape();
  vertex(width* 0.725, height* 0.3625 );
  vertex(width* 0.75, height* 0.4125);
  vertex(width* 0.775, height* 0.3875)
  vertex(width* 0.7875 , height* 0.4)
  vertex(width* 0.8075,height* 0.4125)
  vertex(width* 0.825,height* 0.3875)
  vertex(width* 0.8375,height* 0.4125)
  vertex(width* 0.875,height* 0.3625)
  endShape(CLOSE)
}

function drawTailFire() {
  beginShape();
  ellipseMode(RADIUS);
  strokeWeight(1)
  stroke(r, g, b);
  fill(r, g, b, 225)
  ellipse(45, 45, 8  * 5, 50);
  ellipseMode(CENTER);
  strokeWeight(12)
  stroke(255, 145, 0);
  fill(r, g, b, 225)
  ellipse(45, 45, 8  * 5, 50);
  endShape(CLOSE);
  
}

// draw dinosuar horn on the back
function drawDinosaurhornontheback(){
  fill(6, 199, 0);
  noStroke();
  triangle(width* 0.5175,height* 0.3,width* 0.5625, height* 0.15, 
           width* 0.625,height* 0.1625);
  triangle(width* 0.5375,height* 0.3625,width*0.42, height* 0.3625,width* 0.5625,
           height* 0.1875);
  triangle(width* 0.5, height* 0.32,width* 0.5,height* 0.15, width* 0.6, 
           height* 0.2125);
}
