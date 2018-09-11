import React, { Component } from 'react';
import './App.css';
import './Table.css';

//TO DO:
//
//write an if()  statement that will take into account when you bust to reduce the necessary ACES
//down to a value of 1 to prevent busting. DONE
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
var playerScore = 0;
var dealerScore = 0;
var playersTurn = true;
var totalCards = 52;
var suitCount = 13;
var deck = [];
var shuffledDeck = [];
var yourHand = [];
var dealersHand = [];
var discardPile = [];
var playerAce = false;
var dealerAce = false;
function aceReducer(a) {
	//in this function have it see if it can run through an array and reduce
	//aces down to 1 to bring the total value under 21
}
//compareScores is used to compare player and dealers
function compareScores(playerscore, dealerscore) {
	if (playerscore > dealerscore) {
		alert('You won!');
		yourHand = [];
		dealersHand = [];
		startGame();
	} else if (playerscore === dealerscore) {
		alert('Push, its a tie');
		yourHand = [];
		dealersHand = [];
		startGame();
	} else {
		yourHand = [];
		dealersHand = [];
		alert('Dealer won :( ');
		startGame();
	}
}
//pass will have the dealer draw or settle based off its total card value
function pass() {
	playersTurn = false;
	var total = addArray(dealersHand);
	if (total < 1) {
		dealersHand.push(transpose(shuffledDeck[0]));
		shuffledDeck.shift();
		console.log(dealersHand, addArray(dealersHand));
	}
	if (addArray(dealersHand) > 21) {
		alert(' Dealer Busts You Win');
		yourHand = [];
		dealersHand = [];
		console.log(dealersHand, addArray(dealersHand));

		startGame();
	} else {

		compareScores(addArray(yourHand), addArray(dealersHand));
	}
}

function endGame(a) {
	var a = addArray(a);
	if (addArray(yourHand) === 21) {
		pass();
	}
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
			startGame();
		}
	}
}
//addArray combines the numeric value of an array and returns the total value
function addArray(a) {
	var total = 0;
	for (var i = 0; i < a.length; i++) {
		total = total + a[i];
	}
	return total;
}

//transpose changes the string value of a card into a number value.
function transpose(a) {
	var a = a;
	var firstIndex = a.split(' ');
	var newValue = 0;
	if (firstIndex[0] == 'King' || firstIndex[0] == 'Queen' || firstIndex[0] == 'Jack') {
		newValue = 10;
	} else if (firstIndex[0] === 'Ace') {
		newValue = 11;
	} else {
		newValue = parseInt(firstIndex[0]);
	}
	return newValue;
}
//startGame is what starts the game by dealing to players
function startGame() {
	if (shuffledDeck.length < 35) {
		shuffle();
	}
	for (var i = 1; i < 5; i++) {
		if (i % 2 === 0) {
			playerAce = false;
			yourHand.push(transpose(shuffledDeck[0]));
			shuffledDeck.shift();
		} else {
			dealerAce = false;
			dealersHand.push(transpose(shuffledDeck[0]));
			shuffledDeck.shift();
		}
		if (addArray(dealersHand) === 21) {
			alert('Dealer wins, 21 on first draw');
			yourHand = [];
			dealersHand = [];
			startGame();
		}
		if (addArray(yourHand) === 21) {
			pass();
		}
	}
	console.log('Your hand: ' + yourHand, '. total: ' + addArray(yourHand));
	console.log('Dealers hand: ' + dealersHand, '. total: ' + addArray(dealersHand));
	console.log('Deck length: ' + shuffledDeck.length);
}
//hitMe removes the top card and places it into the hand
function hitMe(a) {
	if ((playersTurn = true)) {
		var card = transpose(a);
		yourHand.push(card);
		shuffledDeck.shift();
		if (addArray(yourHand) > 11) {
			playerAce = true;
		}
		console.log('In your hand is a ' + yourHand, '. With a total of ' + addArray(yourHand));
		endGame(yourHand);
	}
}

//generates a deck
function generateDeck() {
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
}

//shuffles the deck in the beginning
function shuffle() {
	console.log(
		'Deck is being reshuffled'
	)
	shuffledDeck = []
	var totalUndefined = 0;
	for (var x = 0; x < 52; x++) {
		var random = Math.floor(Math.random() * deck.length + 1);
		shuffledDeck.push(deck[random]);
	}
	for (var i = 0; i < shuffledDeck.length; i++) {
		if (shuffledDeck[i] === undefined) {
			totalUndefined = totalUndefined + 1;
			shuffledDeck[i] = '2 of Hearts'
		}
	}
	if (totalUndefined > 0) {
		console.log(totalUndefined)
	}
	console.log(shuffledDeck)
	
}
generateDeck();
shuffle()

class App extends Component {
	render() {
		return (
			<div>
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
						<button class="btn" onClick={() => pass()}>
							Pass
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
