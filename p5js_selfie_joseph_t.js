function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(200);
  //facial features
  
  fill(250,223,173);
  ellipse(200, 200, 200, 300);
  
  fill(0);
  arc(200, 250, 100, 100, 0, HALF_PI + HALF_PI);
  
  fill(250);
  arc(200, 255, 80, 80, 0, HALF_PI + HALF_PI);
  
  fill(250,0,0);
  arc(200, 255, 40, 40, 0, HALF_PI + HALF_PI);
  
  //head
  fill(0);
  ellipse(150, 150, 70, 30);
  ellipse(250, 150, 70, 30);
  
  fill(250);
  ellipse(150, 150, 60, 20);
  ellipse(250, 150, 60, 20);

fill(0);
  ellipse(200, 200, 40, 90);
  
  fill(102,76,40);
  ellipse(150, 150, 19, 19);
  
  fill(102,76,40);
  ellipse(250, 150, 19, 19);
  
  line(175, 51, 225, 51);
  line(170, 53, 230, 53);
  line(165, 55, 235, 55);
  line(160, 57, 240, 57);
  line(155, 59, 245, 59);
  line(150, 61, 250, 61);
  line(145, 63, 255, 63);
  line(140, 65, 260, 65);
  line(135, 67, 265, 67);
  line(130, 69, 270, 69);
  
}
