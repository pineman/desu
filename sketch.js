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

var COR_FUNDO, COR_LUA, COR_LUA_RATO, COR_PRÉDIO, COR_LUZ;

var TAMANHO_RELATIVO_LUA = 0.12;
var X_LUA_RELATIVO = 0.2;
var Y_LUA_RELATIVO = 0.2;
var X_LUA, Y_LUA;
var TEXTO_RATO = 'Going to the moon';

var TAMANHO_RELATIVO_JANELA = 0.03;
var tamanhoJanela;

var LARGURA_RELATIVA_T3 = 0.15;
var LARGURA_RELATIVA_T2 = 0.10;
var LARGURA_RELATIVA_T1 = 0.05;
var larguraT1, larguraT2, larguraT1;
var espaçoJanelaT3, espaçoJanelaT2, espaçoJanelaT1;

var ENTRE_PRÉDIO_RELATIVO = 0.01;
var ENTRE_PRÉDIO_GRANDE_RELATIVO = 0.13;
var entrePrédio;
var entrePrédioGrande;

var PROBABILIDADE_LUZES = 0.3;
var luzes1, luzes2, luzes3, luzes4, luzes5, luzes6, luzes7;


function luz(x, alturaNegativa, espaço, numLuzes)
{
	fill(COR_LUZ);

	var y;
	var xJanela;
	for (var andar = 0; ; andar++) {
		y = alturaNegativa + espaço + andar*(espaço + tamanhoJanela);
		if (y >= height - espaço - tamanhoJanela) break;

		xJanela = x + espaço;
		for (var i = 0; i < numLuzes; i++) {
			// Janelas são quadrados
			rect(xJanela, y, tamanhoJanela, tamanhoJanela);
			xJanela += tamanhoJanela + espaço;
		}
	}
}

function prédio(x, largura, alturaRelativa, espaço, numLuzes, luzes)
{
	fill(COR_PRÉDIO);

	var alturaReal = alturaRelativa*height;
	var alturaNegativa = height - alturaRelativa*height;

	rect(x, alturaNegativa, largura, alturaReal);

	if (luzes) luz(x, alturaNegativa, espaço, numLuzes);

	return x + largura;
}

function prédios()
{
	// Atualizar que prédios ligam as luzes de 60 em 60 frames
	// (aproximadamente um segundo)
	if (frameCount % 61 === 1) {
		luzes1 = random() < PROBABILIDADE_LUZES;
		luzes2 = random() < PROBABILIDADE_LUZES;
		luzes3 = random() < PROBABILIDADE_LUZES;
		luzes4 = random() < PROBABILIDADE_LUZES;
		luzes5 = random() < PROBABILIDADE_LUZES;
		luzes6 = random() < PROBABILIDADE_LUZES;
		luzes7 = random() < PROBABILIDADE_LUZES;
	}
	var xAnterior = 0;

	// Prédio 1: tamanho 3
	xAnterior = prédio(entrePrédio, larguraT3, 0.6, espaçoJanelaT3, 3, luzes1);
	// Prédio 2: tamanho 3
	xAnterior = prédio(xAnterior + entrePrédio, larguraT3, 0.55, espaçoJanelaT3, 3, luzes2);
	// Prédio 3: tamanho 1
	xAnterior = prédio(xAnterior + entrePrédio, larguraT1, 0.4, espaçoJanelaT1, 1, luzes3);
	// Prédio 4: tamamnho 3
	xAnterior = prédio(xAnterior + entrePrédio, larguraT3, 0.33, espaçoJanelaT3, 3, luzes4);
	// Prédio 5: tamanho 2
	xAnterior = prédio(xAnterior + entrePrédioGrande, larguraT2, 0.4, espaçoJanelaT2, 2, luzes5);
	// Prédio 6: tamanho 2
	xAnterior = prédio(xAnterior + entrePrédio, larguraT2, 0.5, espaçoJanelaT2, 2, luzes6);
	// Prédio 7: tamanho 2
	xAnterior = prédio(xAnterior + entrePrédio, larguraT2, 0.3, espaçoJanelaT2, 2, luzes7);
}

function lua()
{
	var crescerDimensão;
	if (height < width) {
		crescerDimensão = height;
	} else {
		crescerDimensão = width;
	}

	// Apagar lua antiga
	fill(COR_FUNDO);
	ellipseMode(RADIUS);
	ellipse(X_LUA, Y_LUA, TAMANHO_RELATIVO_LUA*crescerDimensão);

	// Se rato em cima da lua, mudar de cor
	if (dist(X_LUA, Y_LUA, mouseX, mouseY) < TAMANHO_RELATIVO_LUA*crescerDimensão) {
		fill(COR_LUA_RATO);
	} else {
		fill(COR_LUA);
	}

	ellipse(X_LUA, Y_LUA, TAMANHO_RELATIVO_LUA*crescerDimensão);
}

function calcularTamanhos()
{
	X_LUA = X_LUA_RELATIVO*width;
	Y_LUA = Y_LUA_RELATIVO*height;

	larguraT3 = LARGURA_RELATIVA_T3*width;
	larguraT2 = LARGURA_RELATIVA_T2*width;
	larguraT1 = LARGURA_RELATIVA_T1*width;

	tamanhoJanela = TAMANHO_RELATIVO_JANELA*width;

	// Prédio3: 3 janelas, 4 espaços por fila
	espaçoJanelaT3 = (larguraT3 - 3*tamanhoJanela) / 4
	// Prédio2: 2 janelas, 3 espçcos por fila
	espaçoJanelaT2 = (larguraT2 - 2*tamanhoJanela) / 3
	// Prédio1: 1 janela, 2 espaços por fila
	espaçoJanelaT1 = (larguraT1 - 1*tamanhoJanela) / 2

	entrePrédio = ENTRE_PRÉDIO_RELATIVO*width;
	entrePrédioGrande = ENTRE_PRÉDIO_GRANDE_RELATIVO*width;
}

function setup()
{
	createCanvas(windowWidth, windowHeight);

	COR_FUNDO = color(27, 49, 86);
	COR_LUA = color(224, 232, 247);
	COR_LUA_RATO = color(162, 168, 179);
	COR_PRÉDIO = color(11, 11, 24);
	COR_LUZ = color(228, 210, 117);

	textFont("Quicksand");
	textSize(20);

	calcularTamanhos();
	noStroke();
}

function draw()
{
	background(COR_FUNDO);

	// Verificar se o rato está em cima da lua
	lua();
	prédios();

	fill(0);
	text(TEXTO_RATO, mouseX, mouseY);
}

function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);

	// Atualizar novos tamanhos
	calcularTamanhos();
}
