import React, { Component } from 'react';

var deck = [];
var suitCount = 13;
var shuffledDeck = [];

var playerHand = [];
var dealerHand = [];

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
	console.log('Deck is being reshuffled');
	shuffledDeck = [];
	var totalUndefined = 0;
	for (var x = 0; x < 52; x++) {
		var random = Math.floor(Math.random() * deck.length + 1);
		shuffledDeck.push(deck[random]);
	}
	for (var i = 0; i < shuffledDeck.length; i++) {
		if (shuffledDeck[i] === undefined) {
			totalUndefined = totalUndefined + 1;
			shuffledDeck[i] = '2 of Hearts';
		}
	}
	if (totalUndefined > 0) {
		//console.log(totalUndefined)
	}
}
function transpose(a) {
	var newArray = a.split(' ');
	var firstIndex = newArray[0];
	var trueValue = 0;
	if (firstIndex === 'King' || firstIndex === 'Queen' || firstIndex === 'Jack') {
		trueValue = 10;
	} else if (firstIndex === 'Ace') {
		trueValue = 11;
	} else {
		trueValue = parseInt(firstIndex);
	}
	return trueValue;
}
function addHand(hand) {
	var total = 0;
	for (var i = 0; i < hand.length; i++) {
		total = total + transpose(hand[i]);
	}
	return total;
}
function start() {
    console.log('New hand has started');
	for (var i = 1; i <= 4; i++) {
		if (i % 2 === 0) {
			playerHand.push(shuffledDeck[0]);
			shuffledDeck.shift();
		} else {
			dealerHand.push(shuffledDeck[0]);
			shuffledDeck.shift();
		}
    }
    dialogue()
    if(firstDrawCheck(dealerHand) === true){
        alert('Dealer WON on first draw.')
        playerHand =[]
        dealerHand =[]
        start()
    }
}
function dialogue() {
	console.log('Dealer has: ' + dealerHand + ' for a total of ' + addHand(dealerHand));
	console.log('You have: ' + playerHand + ' for a total of ' + addHand(playerHand));
}
function firstDrawCheck(hand){
    if(addHand(hand) === 21)
    return true
}
generateDeck();
shuffle();
start(shuffledDeck);

class App extends Component {
	render() {
		return <div>hi</div>;
	}
}
export default App;
