function setup() {//configurar
  createCanvas(900, 700);//tamanho
}

function draw() {//desenhar
  background("cyan");//fundo
}let cor;//cor
let posicaoHorizontal; // horizontal
let posicaoVertical; // vertical

function setup() {
  createCanvas(900, 900);//tamanho
   background(color(0,0,0));//cor do fundo
  cor = color(random(0,255), random(0,255), random(0,255));// cor da bolinha
  posicaoHorizontal = 200;//horizontal
  posicaoVertical = 200;//vertical
}


function draw() {
  
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,50);//posição horizontal;vertical do circulo
 
  
  
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;//posição horizontalda bolinha
  }
  
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;//posição horizontal da bolinha
  }
  
  if (mouseY < posicaoVertical){//posição vertical da bolinha
    posicaoVertical--;
  }
    
  if (mouseY > posicaoVertical){//poição vertical da bolinha
    posicaoVertical++;
  }
  
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));//posição da bolinha segundo o maue
  }
    
}