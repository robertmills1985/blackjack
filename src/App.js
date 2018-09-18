import React, { Component } from 'react';

var deck = [];
var suitCount = 13;
var shuffledDeck = [];

var playerHand = [];
var dealerHand = [];



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ToDO: 
//refactor  shuffle to deal with undefined indexes other than the band-aid i have in place already
//create a function for staying ,
// a function to compareHands,
// a function for bustCheck, a function
//to cycle through the dealers run after the player has stayed/passed
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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
function draw(hand){
    //console.log(hand, hand.length)
    //console.log(shuffledDeck)
    var newArray = hand
    newArray.push(shuffledDeck[0])
    shuffledDeck.shift()
    //console.log(newArray, newArray.length)
    //for(var i = 0; i < newArray.length; i++){
    //    console.log(newArray[i])
    //}
    dialogue()
    return newArray
}
function compareScore(playerScore, dealerScore){
    //after passing or staying, compare the scores between dealer and player
}
function pass(hand){
	var newArray = hand
	if(addHand(newArray) < 16){
		newArray.push(shuffledDeck[0])
		shuffledDeck.shift()
	}
	console.log(dealerHand, addHand(dealerHand))

	return dealerHand = newArray
}
function aceReducer(hand){
	//this will loop over a hand that bust and check to see if it can reduce
	//any aces to take to avoid busting
}
///////////DEMO//////////////
var demo = ['King','Ace','9']

generateDeck();
shuffle();
start();


class App extends Component {
	render() {
		return (
        <div>
          <button class='btn' onClick={()=>draw(playerHand)} >Hit Me</button>  
          <button class='btn' onClick={()=>pass(dealerHand)} >Stay</button>  
        </div>)
	}
}
export default App;
