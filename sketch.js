var LARGURA_RELATIVA_P3 = 0.15;
var LARGURA_RELATIVA_P2 = 0.10;
var LARGURA_RELATIVA_P1 = 0.05;

var LARGURA_P3;
var LARGURA_P2;
var LARGURA_P1;

var ESPACO_JANELA_P3;
var ESPACO_JANELA_P2;
var ESPACO_JANELA_P1;

var LARGURA_RELATIVA_JANELA = 0.03;
var TAMANHO_JANELA;

var PROBABILIDADE_LUZES = 0.3;

var TAMANHO_RELATIVO_LUA = 0.12;
var l1, l2, l3, l4, l5, l6, l7;

function predio(x, largura, alturaRelativa, espaco, numLuzes, luzes)
{
	var alturaReal = alturaRelativa*height;
	var alturaNegativa = height - alturaRelativa*height;

	fill(11, 11, 24);
	rect(x, alturaNegativa, largura, alturaReal);

	if (luzes) luz(x, alturaNegativa, espaco, numLuzes);

	return x + largura;
}

function luz(x, alturaNegativa, espaco, numLuzes)
{
	fill(228, 210, 117);

	var y;
	var xJanela;
	for (var andar = 0; ; andar++) {
		y = alturaNegativa + espaco + andar*(espaco + TAMANHO_JANELA);
		if (y >= height - espaco - TAMANHO_JANELA) break;

		xJanela = x + espaco;
		for (var i = 0; i < numLuzes; i++) {
			rect(xJanela, y, TAMANHO_JANELA, TAMANHO_JANELA);
			xJanela += TAMANHO_JANELA + espaco;
		}
	}
}

function predios()
{
	var xAnterior = 0;

	if (frameCount % 61 === 1) l1 = random() < PROBABILIDADE_LUZES;
	xAnterior = predio(0.01*width, LARGURA_P3, 0.6, ESPACO_JANELA_P3, 3, l1);

	if (frameCount % 61 === 1) l2 = random() < PROBABILIDADE_LUZES;
	xAnterior = predio(xAnterior + 0.01*width, LARGURA_P3, 0.55, ESPACO_JANELA_P3, 3, l2);

	if (frameCount % 61 === 1) l3 = random() < PROBABILIDADE_LUZES;
	xAnterior = predio(xAnterior + 0.01*width, LARGURA_P1, 0.4, ESPACO_JANELA_P1, 1, l3);

	if (frameCount % 61 === 1) l4 = random() < PROBABILIDADE_LUZES;
	xAnterior = predio(xAnterior + 0.01*width, LARGURA_P3, 0.33, ESPACO_JANELA_P3, 3, l4);

	if (frameCount % 61 === 1) l5 = random() < PROBABILIDADE_LUZES;
	xAnterior = predio(xAnterior + 0.13*width, LARGURA_P2, 0.4, ESPACO_JANELA_P2, 2, l5);

	if (frameCount % 61 === 1) l6 = random() < PROBABILIDADE_LUZES;
	xAnterior = predio(xAnterior + 0.01*width, LARGURA_P2, 0.5, ESPACO_JANELA_P2, 2, l6);

	if (frameCount % 61 === 1) l7 = random() < PROBABILIDADE_LUZES;
	xAnterior = predio(xAnterior + 0.01*width, LARGURA_P2, 0.3, ESPACO_JANELA_P2, 2, l7);
}

function lua()
{
	fill(224, 232, 247);
	ellipseMode(RADIUS);

	if (height < width) {
		if (dist(0.2*width, 0.2*height, mouseX, mouseY) < TAMANHO_RELATIVO_LUA*height) {
			fill(162, 168, 179);
		}
		ellipse(0.2*width, 0.2*height, TAMANHO_RELATIVO_LUA*height);
	} else {
		if (dist(0.2*width, 0.2*height, mouseX, mouseY) < TAMANHO_RELATIVO_LUA*width) {
			fill(162, 168, 179);
		}
		ellipse(0.2*width, 0.2*height, TAMANHO_RELATIVO_LUA*width);
	}
}

function setup()
{
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw()
{
	LARGURA_P3 = LARGURA_RELATIVA_P3*width;
	LARGURA_P2 = LARGURA_RELATIVA_P2*width;
	LARGURA_P1 = LARGURA_RELATIVA_P1*width;

	TAMANHO_JANELA = LARGURA_RELATIVA_JANELA*width;

	// 3 janelas, 4 espacos
	ESPACO_JANELA_P3 = (LARGURA_P3 - 3*TAMANHO_JANELA) / 4
	// 2 janelas, 3 espacos
	ESPACO_JANELA_P2 = (LARGURA_P2 - 2*TAMANHO_JANELA) / 3
	// 1 janela, 2 espacos
	ESPACO_JANELA_P1 = (LARGURA_P1 - 1*TAMANHO_JANELA) / 2

	background(27, 49, 86);
	predios();
	lua();
}

function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);
}
