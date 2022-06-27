const slider = document.getElementById("slider");
const sOutput = document.getElementById("slider-display");
const board = document.getElementById("board");
const bBlack = document.getElementById("black");
const bRed = document.getElementById("red");
const bRainbow = document.getElementById("rainbow");
const bClear = document.getElementById("clear");

var currentColour = "black";

window.addEventListener("load", updateBoard);
slider.addEventListener("input", updateBoard);

bBlack.addEventListener("click", function() {setColour("black")});
bRed.addEventListener("click", function() {setColour("red")});
bRainbow.addEventListener("click", function() {setColour("rainbow")});
bClear.addEventListener("click", clearBoard);


board.addEventListener("mouseover", function(e){
    if(e.target && e.target.classList.contains("tile")) {
        e.target.style.backgroundColor = getColour();
        console.log(getColour());
    }
});

function clearBoard() {
    var children = board.childNodes;
    for (var i = 0; i < children.length; i++) children[i].style.backgroundColor = "#ffffff";
}


function updateBoard() {
    sOutput.innerText = slider.value;

    board.style.gridTemplateRows = "repeat(" + slider.value + ", 1fr";
    board.style.gridTemplateColumns = "repeat(" + slider.value + ", 1fr";


    board.innerHTML = "";
    for (i = 0; i < slider.value ** 2; i++) {
        tile = document.createElement("div");
        tile.setAttribute("class", "tile");
        board.appendChild(tile);
    }
};

function setColour(colour) {
    currentColour = colour;
    console.log("Colour is "+ currentColour);    
}

function getColour() {
    if (currentColour == "black") return("#000000");
    else if (currentColour == "red") return("#ff0000");

    else if (currentColour == "rainbow") return("#" +
        (Math.floor(Math.random() * 155) + 100).toString(16) + 
        (Math.floor(Math.random() * 155) + 100).toString(16) + 
        (Math.floor(Math.random() * 155) + 100).toString(16));
}


