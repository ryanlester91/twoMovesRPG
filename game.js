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
    comMove(id);
    gameOver();
}

let addRound = () => {
    totalRounds += 1;
}

function counter(your, com) {
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
// Dislpays results of the round
function roundResults(res) {
	playByPlay.innerHTML += res + "<br>";
}

let healthChange = () => {
    yourHealthBar.style.width = yourHealth + "%";
    compHealthBar.style.width = compHealth + "%";
}
function gameOver() {
	if (yourHealth === 0 || compHealth === 0) {
		res = 'gameOver!';
		roundResults(res);
		attackButton.disabled = true;
		counterButton.disabled = true;
		playAgain.disabled = true;
	}


}



let comMove = (id) => {
    let move = Math.floor((Math.random()*4)+1);
    if (move <= 3) {
        savedCompMove = 'attack';
    }else {
        savedCompMove = 'counter';
    }
    res = "Your move is <span>" + id + "</span> and the computer move is <span>" + id + '</span>.'
    damageStep(id, savedCompMove);
	roundResults(res);
}

function damageStep(your, com) {
	if (your === 'attack' && com === 'attack') {
		res = 'Both players took damage';
		if (compHealth >= 10 && yourHealth >= 10) {
			compHealth -= 10;
			yourHealth -= 10;
		} else {
			compHealth = 0;
			yourHealth = 0;
		}
	} else if ( your === 'counter' && com === 'counter') {
		res = 'Defensive stances taken in vain';
	} else if ( your === 'attack' && com === 'counter') {
		res = 'Comp switches to the defensive and prepares to counter';
		counter(your, com);
	} else if ( your === 'counter' && com === 'attack') {
		res = 'You switch to the defensive and prepare to counter';
		counter(your, com);
	}
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



