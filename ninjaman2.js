var ninjaman = {
	x: 0,
	y: 0
}
var score = 0, numberOfsushivar = 0, numberOfonigirivar = 0;
ninja = document.getElementById("ninjaman"); 
scoreUpdateContent = document.getElementById("score");
numberOfsushi = document.getElementById("sushiAte");
numberOfonigiri = document.getElementById("onigiriAte");

function update()
{
			if (ninjaman.x > 9) {
				ninjaman.x = 9;
			}
			else if (ninjaman.x < 0 ){
				ninjaman.x = 0;
			}
			else if (ninjaman.y > 9){
				ninjaman.y = 9;
			}
			else if (ninjaman.y < 0){
				ninjaman.y = 0;
			}
			
			//update position of ninjaman
    		ninja.style.left = ninjaman.x * 40 +"px";
			ninja.style.top = ninjaman.y * 40 +"px";
			
			//update when ninjaman "eat" sushi: total score and count number of sushi
			if (world[ninjaman.y][ninjaman.x] == 2) {
				world[ninjaman.y][ninjaman.x] = 0;
				score+= 10;
				numberOfsushivar++;
			}
			//update when ninjaman "eat" onigiri: total score and count number of onigiri
			else if (world[ninjaman.y][ninjaman.x] == 3){
				world[ninjaman.y][ninjaman.x] = 0;
				score+= 5;
				numberOfonigirivar++;
			}
			drawWorld();
			scoreUpdateContent.textContent = "Score: " + score;		
			numberOfsushi.textContent = "Number of Sushi: " + numberOfsushivar;
			numberOfonigiri.textContent = "Number of Onigiri: "	+ numberOfonigirivar;   
}

document.onkeydown = function(e){
			console.log(e);
			
    		if(e.keyCode == 37) { // LEFT
				ninjaman.x--;			   			   
    		}
    		else if (e.keyCode == 39) { // RIGHT
				ninjaman.x++;								
    		}
    		else if (e.keyCode == 40) { // DOWN
				ninjaman.y++;						
    		}
			else if (e.keyCode == 38) { // Up
				ninjaman.y--;								
    		}

    		update();
    	}

