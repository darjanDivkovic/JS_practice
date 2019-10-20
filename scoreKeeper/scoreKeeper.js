// Buttons
let firstButton = document.getElementById("firstButton");
let seccondButton = document.getElementById("secondButton");
let resetButton = document.getElementById("reset");

// Input
let scoreInput = document.querySelector("input");

// Input event
scoreInput.addEventListener("change", updateFinalScore);

// Input updateFinalScore
function updateFinalScore() {
    endGameScoreSpan.textContent = scoreInput.value;
    endGameScore = Number(scoreInput.value);
    
}

// Scores
let player1Score = 0;
let player2Score = 2;
let endGameScore = 5;
let gameOver = false;
let wonBy = "nobody";
let endGameScoreSpan = document.getElementById("endGameScoreSpan");

// player spans
let player1Span = document.querySelector("#player1Span");
let player2Span = document.querySelector("#player2Span");


// Add event listeners
firstButton.addEventListener("click", incrementPlayer1);
seccondButton.addEventListener("click", incrementPlayer2);
resetButton.addEventListener("click", resetScores);

// Increment player 1
function incrementPlayer1() {
    
    if(!gameOver){
    player1Score++;    
    player1Span.textContent = player1Score;
    }
    if (player1Score === endGameScore){
        gameOver = true;
        player1Span.classList.add("winner");
        player2Span.classList.add("looser");
        wonBy = "p1";
    }
    
}

// Increment player 2
function incrementPlayer2() {
    
    if(!gameOver){
        player2Score++;    
        player2Span.textContent = player2Score;
        }
        if (player2Score === endGameScore){
            gameOver = true;
            player2Span.classList.add("winner");
            player1Span.classList.add("looser");
            wonBy = "p2";
        }
}

// Reset Scores function
function resetScores() {
    gameOver = false;
    player2Score = 0;
    player1Score = 0;
    player1Span.textContent = player1Score;
    player2Span.textContent = player2Score;

    if(wonBy === "p1"){
        player1Span.classList.remove("winner");
        player2Span.classList.remove("looser");
        player1Span.classList.add("start");
        player2Span.classList.add("start");
    }

    if(wonBy === "p2"){
        player2Span.classList.remove("winner");
        player1Span.classList.remove("looser");
        player2Span.classList.add("start");
        player1Span.classList.add("start");
    }
    
}

