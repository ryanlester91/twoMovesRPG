//Init variables
let yourMove;
let compMove;
let savedCompMove;
let yourHealthPoints = 100;
let compHealthPoints = 100;
let firstEmpty = true;
let secondEmpty = true;

//Turn counter
let totalRounds = 0;

//Doc rewrites
let res;
let playByPlay = document.getElementById('announcements');
let yourHealthBar = document.getElementById('yourHealthBar');
let compHealthBar = document.getElementById('compHealthBar');
let attackButton = document.getElementById('attackBtn');
let counterButton = document.getElementById('counterBtn');
let resetButton = document.getElementById('resetBtn');
let playAgain = document.getElementById('playByPlay');



function enableButtons() {
    attackButton.disabled = false;
    counterButton.disabled = false;
}


//Triggers the fight
let fight = (id) => {
    addRound();
    compMove(id);
    gameOver();
}

let addRound = () => {
    totalRounds += 1;
} 


let healthChange = () => {
    yourHealthBar.style.width = yourHealth + "%";
    compHealthBar.style.width = compHealth + "%";
}

function counter(your, comp) {
    let move = Math.floor((Math.random()*5));
    if (move >= 3 && your === 'attack') {
        res = 'Computer counters your attack! You lose 10 HP'
        yourHealthPoints -= 10;
    }
    else if (move >= 3 && your === 'counter') {
        res = 'Your counter is successful! Computer loses 10 HP'
        compHealthPoints -= 10;
    }
    else if (move < 3 && your === 'attack') {
        res = 'Computer fails to block your attack! Computer loses 15 HP'
        compHealthPoints -= 15
    }
    else if (move < 3 && your === 'counter') {
        res = 'You fail to block the computer move! You lose 15 HP'
        yourHealthPoints -= 15
    }
}

let compMove = (id) => {
    let move = Math.floor((Math.random()*4)+1);
    if (move <= 3) {
        savedCompMove = 'attack';
    }else {
        savedCompMove = 'counter';
    }
    res = "Your move is <span>" + id + "</span> and the computer move is <span>" + id + '</span>.'
}

/*$(document).ready(function () {
$(".container").click(function () {
    var activate = function () {

        if(firstEmpty) {
            $("#machoke-img").on("click", function () {
                $("#machoke-img").detach().appendTo('#player');
                $("#machoke-img").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                firstEmpty = false;
                console.log(firstEmpty);
    
            });


            $("#hariyama-img").on("click", function () {
                $("#hariyama-img").detach().appendTo('#player');
                $("#hariyama-img").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                firstEmpty = false;
                console.log(firstEmpty);
                //console.log("Wahahaha!");
                });

        } else {
            $(".gallery #machoke-img").one("click", function () {
                $("#machoke-img").detach().appendTo('#opponent');
                $("#machoke-img").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                $("#attackbtn").prop("disabled", false);
                secondEmpty = false;  
        });	
            $(".gallery #hariyama-img").one("click", function () {
                $("#hariyama-img").detach().appendTo('#opponent');
                $("#hariyama-img").removeClass("col-lg-3 col-md-3 col-sm-6").addClass("col-sm-12");
                $("#attackbtn").prop("disabled", false);
                secondEmpty = false;  
            });
    }
    
}
activate();

})
    
})*/




window.onload=enableButtons();



