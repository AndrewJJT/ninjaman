var world = new Array(10);
for (var i=0; i<world.length; i++){
    world[i] = Array.from({length: 9}, () => Math.floor(Math.random() * 4))
}
/*
var world =[
    [0,0,1,0,0,2,0,0,0],
    [0,1,1,0,0,2,1,0,1],
    [2,1,3,0,1,0,1,2,1],
    [3,1,0,2,1,0,0,0,1],
    [0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,2,0,0,0],
    [0,0,1,2,1,2,0,2,0],
    [0,2,1,0,2,0,1,0,0],
    [0,0,1,1,1,0,1,0,0],
    [0,0,2,0,0,0,1,2,0],

];*/

var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'sushi',
    3: 'onigiri'
}


function drawWorld()
{
var output = "";

for (var row = 0; row < world.length; row++){
    output += "<div class='row'>";
    for (var item = 0; item < world[row].length; item++){
        output += "<div class = '" + worldDict[world[row][item]] + "'></div>";
    }
    output += "</div>";
}

document.getElementById('world').innerHTML = output;
}

drawWorld();
