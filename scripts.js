var isPlaying = false;
var tileX = 4;
var tileY = 4;
var mapx = 900/tileX;
var mapy = 600/tileY;
var fillWhite = "#ffffff";
var fillBlack = "#000000";
var colored = false;
var howManyRandomize = 10000;

var firstArray = new Array(mapx);
for (var i = 0; i < mapx; i++) {
  firstArray[i] = new Array(mapy);
}

var secondArray = new Array(mapx);
for (var i = 0; i < mapx; i++) {
  secondArray[i] = new Array(mapy);
}


for(var i = 0; i < mapx; i++)
{
	for(var j = 0; j < mapy; j++)
	{
		firstArray[i][j] = 0;
		secondArray[i][j] = 0;
	}
}


function clearMap()
{
	var c = document.getElementById("mapa");
	var ctx = c.getContext("2d");
	for(var i = 0; i < mapx; i++)
	{
			for(var j = 0; j < mapy; j++)
			{
				firstArray[i][j] = 0;
				secondArray[i][j] = 0;
				ctx.fillStyle = fillWhite;
				ctx.fillRect( i * tileX, j * tileY, tileX, tileY);
			}
		
	}
	
}

function randomize()
{
	var c = document.getElementById("mapa");
	var ctx = c.getContext("2d");
	ctx.fillStyle = fillWhite;
	for(var i = 0; i < howManyRandomize; i++)
	{
			var randX = Math.floor((Math.random() * mapx - 1));
			var randY = Math.floor((Math.random() * mapy - 1));
			
			var rand = Math.floor(Math.random() * 2);
			
			firstArray[randX][randY] = rand;
			secondArray[randX][randY] = rand;
			if(rand == 1)
			{
				ctx.fillRect( randX * tileX, randY * tileY, tileX, tileY );
			} 
	}
}

function play()
{

	var c = document.getElementById("mapa");
	var ctx = c.getContext("2d");
	ctx.fillStyle = fillBlack;
	
	for(var i = 1; i < mapx - 1; i++)
	{
		for(var k = 1; k < mapy - 1; k++)
		{
		    var licznik = firstArray[i-1][k] +
			firstArray[i-1][k-1] +
			firstArray[i][k-1] +
			firstArray[i+1][k-1] +
			firstArray[i+1][k] +
			firstArray[i+1][k+1] +
			firstArray[i][k+1] +
			firstArray[i-1][k+1];
					
			if(firstArray[i][k] == 0)
			{
				if(licznik == 3)
				{
					secondArray[i][k] = 1;
					
				} else {
					
					secondArray[i][k] = 0;
				}
			} 
			else if(firstArray[i][k] == 1)
			{
				if(licznik == 2 || licznik == 3)
				{
					secondArray[i][k] = 1;
				} else {
					secondArray[i][k] = 0;
				}
			}
		}
	}
	
	//Rysownaie
	for(var i = 0 ; i < mapx ; i++)
	{
		
		for(var j = 0; j < mapy ; j++)
		{
				
			if(secondArray[i][j] == 0)
			{
				ctx.fillStyle = fillBlack;
				ctx.fillRect( i * tileX, j * tileY, tileX, tileY);
			}
			else
			{
				ctx.fillStyle = fillWhite;
				ctx.fillRect( i * tileX, j * tileY, tileX, tileY);
				
			}
		    if(i == 0 || j == 0 || i == mapx - 1 || j == mapy - 1)
			{
					firstArray[i][j] = 0;
					secondArray[i][j] = 0;
					ctx.fillStyle = fillWhite;
					ctx.fillRect( i * tileX, j * tileY, tileX, tileY);
			}
		}
			
		
	}
	
	//Musze przepisac wartosci do nowej
	for(var i = 0; i < mapx; i++)
	{
		for(var j = 0; j < mapy; j++)
		{
			firstArray[i][j] = secondArray[i][j];
		}
	}
	
	
	
	document.getElementById('turnoff').onclick = 'empty()';
	setTimeout(play, 10);
	
}

function swapColor(){
	
	var c = document.getElementById("mapa");
	var ctx = c.getContext("2d");
	
	var tempColor = fillWhite;
	fillWhite = fillBlack;
	fillBlack = tempColor;
	
	for(var i = 0; i < mapx; i++)
	{
		for(var j = 0; j <mapy; j++)
		{
			if(firstArray[i][j] == 0)
			{
				ctx.fillStyle = fillBlack;
				ctx.fillRect( i * tileX, j * tileY, tileX, tileY);
			} 
			else
			{
				ctx.fillStyle = fillWhite;
				ctx.fillRect( i * tileX, j * tileY, tileX, tileY);
			}
		}
	}
}


function newColor() {
	var c = document.getElementById("mapa");
	var ctx = c.getContext("2d");
	fillBlack = document.getElementById("bg").value;
	fillWhite = document.getElementById("pixel").value;	
	for(var i = 0; i < mapx; i++)
	{
		for(var j = 0; j <mapy; j++)
		{
			if(firstArray[i][j] == 0)
			{
				ctx.fillStyle = fillBlack;
				ctx.fillRect( i * tileX, j * tileY, tileX, tileY);
			} 
			else
			{
				ctx.fillStyle = fillWhite;
				ctx.fillRect( i * tileX, j * tileY, tileX, tileY);
			}
		}
	}
}