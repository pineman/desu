var x, y, t, vX, vY, c, factorT;

function setup()
{
  createCanvas (windowWidth, windowHeight);

  colorMode (RGB, 255, 255, 255, 100)

  x = width/2;
  y = height/2;

  t = 5;
  factorT = 1;

  vX = 10;
  vY = vX;

  c = color (255, 0, 0, 50);
}


function draw()
{
    if (frameCount%100 === 0)
  {
  background (27, 49, 86,); //o 20 é a transparencia
  }
   c = color (random(255), random(255), random(255));
  x+=random(-vX,vX);
  y+=random(-vY,vY);
  t+= factorT;

  if (x+(t/2)>=width) x = width-t;
  if (x-(t/2)<=0) x = t;
  if (y+(t/2)>=height) y = height-t;
  if (y-(t/2)<=0) y = t;

  if (t>=50 || t<=5) factorT*=-1;

  stroke(c);
  noFill ();
  ellipse (x, y, t, t);
//(largura, altura na folha), largura, altura do retangulo
rect(20, 300, 200, 300);
rect(230, 200, 200, 400);
rect (440, 300, 150, 300);
rect(600, 300, 200, 300);
rect(810, 300, 120, 300);
rect(940, 200, 200, 400);
}


function windowResized()
{
  resizeCanvas (windowWidth, windowHeight);
}
