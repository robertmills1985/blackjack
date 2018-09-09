import React, { Component } from 'react';
import './App.css';

//TO DO:
//
//write an if()  statement that will take into account when you bust to reduce the necessary ACES
//down to a value of 1 to prevent busting.
//
//
//
//
//
//
//
//
//
//
//
//
//

var totalCards = 52;
var suitCount = 13;
var deck = [];
var shuffledDeck = [];
var yourHand = [];
var dealersHand = [];
var discardPile = [];
var playerAce = false;
var dealerAce = false;

function endGame(a) {
	var a = addArray(a);
	if (a > 21) {
		for (var i = 0; i < yourHand.length; i++) {
			if (yourHand[i] == 11) {
				console.log('found ace to reduce');
				yourHand[i] = 1;
				console.log(yourHand);
			}
		}
		if (addArray(yourHand) > 21) {
			alert('you bust');
			yourHand = [];
			dealersHand = [];
		}

		if (shuffledDeck.length < 33) {
			console.log('Deck is being reshuffled');
			console.log('Deck count is ' + shuffledDeck.length);

			shuffledDeck = [];
			for (var x = 0; x < 52; x++) {
				var random = Math.floor(Math.random() * deck.length + 1);
				shuffledDeck.push(deck[random]);
			}
		}
		startGame();
	}
}

function addArray() {
	var total = 0;
	for (var i = 0; i < yourHand.length; i++) {
		total = total + yourHand[i];
	}
	return total;
}
//THAT FUCKING ACE
function transpose(a) {
	var a = a;
	var firstIndex = a.split(' ');
	var newValue = 0;
	console.log(a);

	if (firstIndex[0] == 'King' || firstIndex[0] == 'Queen' || firstIndex[0] == 'Jack') {
		newValue = 10;
	} else if (firstIndex[0] === 'Ace' && playerAce === false && firstIndex[0]) {
		newValue = 11;
		playerAce = true;
	} else if (firstIndex[0] === 'Ace' && playerAce === true) {
		newValue = 1;
	} else {
		newValue = parseInt(firstIndex[0]);
	}
	return newValue;
}
function startGame() {
	for (var i = 1; i < 5; i++) {
		if (i % 2 === 0) {
			playerAce = false;
			yourHand.push(transpose(shuffledDeck[0]));
			shuffledDeck.shift();
		} else {
			dealerAce = false;
			dealersHand.push(shuffledDeck[0]);
			shuffledDeck.shift();
		}
	}
	console.log('Deck length: ' + shuffledDeck.length);
}
function hitMe(a) {
	var card = transpose(a);
	yourHand.push(card);
	shuffledDeck.shift();
	if (addArray(yourHand) > 11) {
		playerAce = true;
	}
	console.log('In your hand is a ' + yourHand, '. With a total of ' + addArray(yourHand));
	endGame(yourHand);
	//console.log('Will ace count as 1? ' +  playerAce)
}

//generates a deck
for (var i = 0; i <= suitCount; i++) {
	if (i == 1) {
		deck.push('Ace of Spades');
	} else if (i > 1 && i <= 10) {
		deck.push(i + ' of Spades');
	} else if (i == 11) {
		deck.push('Jack of Spades');
	} else if (i == 12) {
		deck.push('Queen of Spades');
	} else if (i == 13) {
		deck.push('King of Spades');
	}
}
for (var i = 0; i <= suitCount; i++) {
	if (i == 1) {
		deck.push('Ace of Hearts');
	} else if (i > 1 && i <= 10) {
		deck.push(i + ' of Hearts');
	} else if (i == 11) {
		deck.push('Jack of Hearts');
	} else if (i == 12) {
		deck.push('Queen of Hearts');
	} else if (i == 13) {
		deck.push('King of Hearts');
	}
}
for (var i = 0; i <= suitCount; i++) {
	if (i == 1) {
		deck.push('Ace of Diamonds');
	} else if (i > 1 && i <= 10) {
		deck.push(i + ' of Diamonds');
	} else if (i == 11) {
		deck.push('Jack of Diamonds');
	} else if (i == 12) {
		deck.push('Queen of Diamonds');
	} else if (i == 13) {
		deck.push('King of Diamonds');
	}
}
for (var i = 0; i <= suitCount; i++) {
	if (i == 1) {
		deck.push('Ace of Clubs');
	} else if (i > 1 && i <= 10) {
		deck.push(i + ' of Clubs');
	} else if (i == 11) {
		deck.push('Jack of Clubs');
	} else if (i == 12) {
		deck.push('Queen of Clubs');
	} else if (i == 13) {
		deck.push('King of Clubs');
	}
}
//shuffles the deck
for (var x = 0; x < 52; x++) {
	var random = Math.floor(Math.random() * deck.length + 1);
	shuffledDeck.push(deck[random]);
}

class App extends Component {
	render() {
		return (
			<div class="row">
				<div class="col s2">
					<button class="btn" onClick={() => startGame()}>
						startGame
					</button>
				</div>
				<div class="col s2">
					<button class="btn" onClick={() => hitMe(shuffledDeck[0])}>
						Hit
					</button>
				</div>
				<div class="col s2">
					<button class="btn" onClick={() => startGame()}>
						Pass
					</button>
				</div>
				<div class="col s2">
					<button class="btn" onClick={() => hitMe('Ace')}>
						Ace Button
					</button>
					<button class="btn" onClick={() => hitMe('King')}>
						King Button
					</button>
				</div>
			</div>
		);
	}
}

export default App;
