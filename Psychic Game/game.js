var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
				'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v','w',
				'x', 'y', 'z']

var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = '';
var display = document.querySelector('#displayResults');


function displayResults(whoWon, currentChoice, computerChoice, guesses) {
	var string = '<p>' + whoWon + '</p>';
	string += '<p>Your Most Recent Guess: ' + currentChoice + '</p>';
	string += '<p>Computers Guess: ' + computerChoice + '</p>';
	string += '<p>Wins: ' + wins; + '</p>';
	string += '<p>Losses: ' + losses; + '</p>';
	string += '<p>Your Guesses: ' + lettersGuessed; + '</p>';
	string += '<p>Remaining Guesses: ' + guesses; + '</p>';

	display.innerHTML = string;
}

// function
function startGame() {
		guesses = 10;
		lettersGuessed = '';
		var computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];
}

document.onkeyup = function(event) {
	var key = event.key;

	if (guesses != 0) {
		lettersGuessed += key + ', ';
		if (key == computerChoice) {
			wins++;
			displayResults('You Win!', key, computerChoice, guesses);

			startGame();
		}
		else if (key != computerChoice) {
			guesses--;
			displayResults('Keep Guessing!', key, 'Not Telling!' , guesses);
			console.log(computerChoice);

			startGame();
		}
	}
	else {
		losses++;
		displayResults('You Lose!', key, computerChoice, guesses);
		console.log(computerChoice);
	}
}