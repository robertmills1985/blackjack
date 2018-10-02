import React, { Component } from 'react';
import './App.css'

//testing variables
var d1 = [ 'Card 1', 'Card 2' ];

//function scanHand(hand) {
//	var thisHand = [];
//	for (var i = 0; i < hand.length; i++) {
//		thisHand.push(<li>{hand[i]}</li>);
//	}
//	return thisHand;
//}

class Card extends Component {
	constructor() {
        super();

        this.state = {
            hand: ["Ace of Spades","King of Hearts"]
        }
	}
	render() {
		function scanHand(inHand) {
			var thisHand = [];
			for (var i = 0; i < inHand.length; i++) {
                thisHand.push(<li>{inHand[i]}</li>);
                console.log(inHand)
                console.log(inHand[i])
			}
			return thisHand;
		}
        var hand = scanHand(this.props.hand);
		return (
			<div class=''>
				<div class='z-depth-5 hand-panel'>
					<ul class='center'>{hand}</ul>
				</div>
			</div>
		);
	}
}

export default Card;
