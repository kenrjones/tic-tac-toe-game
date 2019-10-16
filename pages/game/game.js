// // Technical Requirements
//     Render a game board in the browser
//     Switch turns between X and O (or whichever markers you select)
//     Visually display which side won if a player gets three in a row, or show a draw if neither player wins
//     Include separate HTML / CSS / JavaScript files
//     Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
//     Use JavaScript for DOM manipulation
//     D  eploy your game online on GitHub Pages, where the rest of the world can access it
//     We will be walking you through this process!
//     Use semantic markup for HTML and CSS (adhere to best practices)
//     Have well-formatted, and well-commented code (e.g. Use Prettier and follow these HTML & CSS Guidelines)
//     Some unique features that distinguish your game from the "normal" solution listed above. Here are some ideas:

console.log('game.js loaded');


const moves = [];
let turn = 'X'
let counter = 0



// the grid boxes need to communicate with the DOM
const boxes = document.querySelectorAll('.box');

// loop through the grid boxes and add event listener to return alternating moves of 'X' and 'O' 
for (let i = 0; i < boxes.length; i++) {
    boxes[i].id = i
    boxes[i].addEventListener('click', function() {
        moves[this.id] = turn
        if (turn === 'X' && !boxes[i].innerText ) {
            boxes[i].innerText = 'X';
            winners();
            turn = 'O';
        } else if (!boxes[i].innerText) {
            winners();
            turn = 'X'
            boxes[i].innerText = 'O';
        } else {
            alert ('Make another selection');
        }
    }) 
}


// list all of the possible combinations that are considered 'winning'.
function winners() {
    counter++;

    if ((moves[0] === moves[1]) && (moves[1] === moves[2]) && (moves[0] != undefined)) { 
        alertWinner(moves[0]);
     }
    else if ((moves[3] === moves[4]) && (moves[4] === moves[5]) && (moves[3] != undefined)) {
        alertWinner(moves[3]);
    }
    else if ((moves[6] === moves[7]) && (moves[7] === moves[8]) && (moves[6] != undefined)) {
        alertWinner(moves[6]); 
    }
    else if ((moves[0] === moves[4]) && (moves[4] === moves[8]) && (moves[0] != undefined)) {
        alertWinner(moves[0]);  
    }
    else if ((moves[2] === moves[4]) && (moves[4] === moves[6]) && (moves[2] != undefined)) {
        alertWinner(moves[2]);    
    }
    else if ((moves[0] === moves[3]) && (moves[3] === moves[6]) && (moves[0] != undefined)) {
        alertWinner(moves[0]);;  
    }
    else if ((moves[1] === moves[4]) && (moves[4] === moves[7]) && (moves[1] != undefined)) {
        alertWinner(moves[1]);    
    }
    else if ((moves[2] === moves[5]) && (moves[5] === moves[8]) && (moves[2] != undefined)) {
        alertWinner(moves[2]); 
    }
    if (counter === 9) {
        alertDraw()  
    } 
};

//alert winner 'X' or 'O"
function alertWinner(winner) {
    const alertBox = document.querySelector('.alert-box'); 
    alertBox.style.display = "flex";

    const gameOver = document.querySelector(".game-over");
    gameOver.innerText = "GAME OVER";

    let winnerText = document.querySelector(".winner");
    winnerText.innerText = `${winner} Wins`;
}

//alert draw
function alertDraw() {
    const alertBox = document.querySelector('.alert-box'); 
    alertBox.style.display = "flex";

    const gameOver = document.querySelector(".game-over");
    gameOver.innerText = "GAME OVER";

    let drawText = document.querySelector(".winner");
    drawText.innerText = `DRAW!`;
}

// reload page button
const playAgain = document.querySelector(".play-again");
playAgain.innerText = 'PLAY AGAIN'; 

playAgain.addEventListener('click', function() {
    location.reload();
    console.log('');
})





// alert when there is a winner or a draw.


// store and display the points/number of gmaes won for each player.


// clear the board after each game.


// set a button to refesh page and restart game to zero played and zero points.