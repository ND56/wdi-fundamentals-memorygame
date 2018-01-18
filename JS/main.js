
var cards = [
	//0 = Queen of Hears
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	//1 = Queen of Diamonds
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	//2 = King of Hearts
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	//3 = King of Diamonds
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	}

];

var cardsInPlay = [];

var checkForMatch = function() {
	//I'm getting an error that cardID is not defined at line 39.
	//I guess that makes sense, since it would be local to the flipCard function, right?
	//So, I tried to set the CardID value like we do on line 49 (see line 38).
	//However, now I get an error that line 38's this.getAttribute "is not a function."
	//I can fix this by dropping line 39's setAttribute to line 55, but I'd like to understand these issues without this work-around.
	//var cardID = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardID].cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	};
}

var flipCard = function() {
	var cardID = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].suit);
	console.log(cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);
	//this.setAttribute('src', cards[cardID].cardImage);
	checkForMatch();
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		//create img element
		var cardElement = document.createElement('img');
		//add img element attributes
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		//add event listener
		cardElement.addEventListener('click', flipCard);	
		//apend to ID game-board	
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();



