var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

var usedLetters = [];
var lives = 10;
var wordToGuess = '';
var wordHolder = '';
var wins = 0;
var losses = 0;

var topics = {
	"weapons": ["katana", "kunai", "kama",
	"manriki-kusari", "yumi", "kusarigama"],
	"foods": ["tempura", "sushi", "udon", "sashimi",
	"yakitori", "tonkatsu"],
	"gods": ["bishamon", "inari", "susa-no-wo",
	"amaterasu", "izanami", "benzaiten"]
};

//chooses a word from topics
function chooseWord() {
	//creates array of keys
	var topicArray = Object.keys(topics);
	console.log("TopicArray:", topicArray);

	//gets a topic key
	var category = topicArray[Math.floor(Math.random() * topicArray.length)];
	console.log("Catagory: ", category);

	//chooses an array
	var chosenArray = topics[category];
	console.log("Category Array: ", chosenArray);

	chosenWord = chosenArray[Math.floor(Math.random() * chosenArray.length)];
	console.log(chosenWord);

	return chosenWord;
}

//assigns word to var wordToGuess
wordToGuess = chooseWord();
console.log(wordToGuess);

//create blanks to let user know how many letter are in word
function createBlanks(word) {
	for (var i = 0; i < word.length; i++) {
		if (word.charAt(i) == '-') {
			wordHolder += '- ';
		}
		else {
		wordHolder += '_ ';
		}	
	}
	return wordHolder.substring(0, wordHolder.length-1);
}

//creates the spaces for the word player needs to guess
wordHolder = createBlanks(wordToGuess);
console.log(wordHolder);

document.onkeyup = function(event) {
	//only allows A-Z
	if (event.keyCode >= 65 && event.keyCode <= 90){
		var key = event.key;
		console.log(key);
		if (lives != 0) {
			
		}

	
	}
}