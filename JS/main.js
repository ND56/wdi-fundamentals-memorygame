
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
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	};
}

var flipCard = function(cardID) {
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].suit);
	console.log(cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch();
};

flipCard(0);
flipCard(2);



