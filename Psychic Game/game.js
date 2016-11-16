var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
				'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v','w',
				'x', 'y', 'z']

var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = [];
var display = document.querySelector('#displayResults');

var computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];

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

function

document.onkeyup = function(event) {
	var key = event.key;
	// var computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];


	if (lettersGuessed.length < 11) {
		lettersGuessed.push(key);
		if (key == computerChoice) {
			wins++;
			displayResults('You Win!', key, computerChoice, guesses);
		}
		else if (key != computerChoice) {
			guesses--;
			displayResults('Keep Guessing!', key, 'Not Telling!' , guesses);
		}
	}
	else {
		losses++;
		displayResults('You Lose!', key, computerChoice, guesses);
	}
}