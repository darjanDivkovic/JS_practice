let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let message = document.getElementById("message");
let h1 = document.querySelector("h1");

for(let i = 0 ; i < squares.length ; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", clickedASquare);
}

colorDisplay.textContent = pickedColor;

function clickedASquare() {
    
    let clickedColor = this.style.backgroundColor;
    
    if(clickedColor === pickedColor){
        
        message.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
    }
    else{
        this.style.backgroundColor = "#232323";
        message.textContent = "Try again!";
    }
}

function changeColors(color) {
    for(let i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let randomNumber = Math.floor(Math.random()* colors.length + 1);
    
    return colors[randomNumber];
}

function generateRandomColors(number) {
    let colors = [];

    for(let i = 0 ; i < number ; i++){
        colors.push(randomColor());
    }

    return colors;
}

function randomColor() {
    let red = Math.floor(Math.random() * 256 );
    let green = Math.floor(Math.random() * 256 );
    let blue = Math.floor(Math.random() * 256 );

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}