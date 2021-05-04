//Init variables
let yourMove;
let compMove;
let savedCompMove;
let yourHealthPoints = 100;
let compHealthPoints = 100;

//Doc rewrites
let res;
let playByPlay = document.getElementById('announcements');
let yourHealthBar = document.getElementById('yourHealthBar');
let compHealthBar = document.getElementById('compHealthBar');
let attackButton = document.getElementById('attackBtn');
let counterButton = document.getElementById('counterBtn');
let resetButton = document.getElementById('resetBtn');
let playAgain = document.getElementById('playByPlay');


//Triggers the fight
let fight = (id) => {
    addRound();
    compMove(id);
    gameOver();
}

let 




