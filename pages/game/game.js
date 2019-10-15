console.log('game.js loaded');


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



const moves = [];
let turn = 'X'


// the grid boxes need to communicate with the DOM
const boxes = document.querySelectorAll('.box');

// loop through the grid boxes and add event listener to return alternating moves of 'X' and 'O' 
for (let i = 0; i < boxes.length; i++) {
    boxes[i].id = i
    boxes[i].addEventListener('click', function() {
        moves[this.id] = turn
        if (turn === 'X' ) {
            turn = 'O' 
        } else {
            turn = 'X'
        }
        console.log(moves);
    }) 
}

// list all of the possible combinations that are considered 'winning'.
if (moves[0] === moves[1] && moves[1] === moves[2]) { 
}
else if (moves[3] === moves[4] && moves[4] === moves[5]) {
}
else if (moves[6] === moves[7] && moves[7] === moves[8]) {
   
}
else if (moves[0] === moves[4] && moves[4] === moves[8]) {
}
else if (moves[2] === moves[4] && moves[4] === moves[6]) {  
}
else if (moves[0] === moves[3] && moves[3] === moves[6]) {
}
else if (moves[1] === moves[4] && moves[4] === moves[7]) {   
}
else if (moves[2] === moves[5] && moves[5] === moves[8]) {
}



// a display is need to show which players turn it is to make a selecton.


// store the seclections of each player.


// collect all of the possible winning combinations.


// alert when there is a winner or a draw.


// store and display the points/number of gmaes won for each player.


// clear the board after each game.


// set a button to refesh page and restart game to zero played and zero points.