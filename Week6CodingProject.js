class Player(name, currentDeck, wonDeck){
    this.name = name;
    this.currentDeck = currentDeck;
    this.wonDeck = wonDeck;
}
class Card(options){
    this.suit = options.suit;
    this.faceValue = options.faceValue;
    this.cardText = (function(){
        switch(this.faceValue){
            case 14:
                {return "Ace"};
            break;
            case 13:
                {return "King"};
            break;
            case 12:
                {return "Queen"};
            break;
            case 11:
                {return "Jack"};
            break;
            default:
                {return String(this.faceValue);}
            break;
        }
    }).call(this);
}
Player.prototype.GetCurrentCard = function(){
    this.currentCard = this.currentDeck.shift();
}
Deck = {
    suits: ["Clubs", "Diamonds", "Hearts", "Spades"],
    cards: [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
    deck: [],
    shuffledDeck: [],
    BuildDeck: function(){
        for(var suit = 0; suit < this.suits.length; suit++){
            for(var card = 0; card < this.cards.length; card++){
                this.deck.push(new Card({suit: this.suits[suit], faceValue: this.cards[card]}));
            }
        }
    },
    ShuffleDeck: function(unshuffledDeck, shuffledDeck){
        while(unshuffledDeck.length){
            var index = Math.floor(Math.random() * unshuffledDeck.length); 
            shuffledDeck.push(unshuffledDeck.splice(index, 1)[0]);    
        }
        unshuffledDeck = [];
    },
    DistributeCards: function(player1Deck, player2Deck){
        for(var i = 0; i < this.shuffledDeck.length / 2; i++){
            player1Deck.push(this.shuffledDeck[i]);
            player2Deck.push(this.shuffledDeck[this.shuffledDeck.length - i - 1]);
        }
    },
    DeaWarlCards: function(player, warDeck, num){
        for(var i = 0; i < num; i++){
            player.GetCurrentCard();
            warDeck.push(player.currentCard);
        }
        return warDeck;
    },
    StartGame: function(player1, player2){
        this.BuildDeck();
        this.ShuffleDeck(this.deck, this.shuffledDeck);
        this.DistributeCards(player1.currentDeck, player2.currentDeck);
    }
}
class PlayGame(player1, player2) {
    var player1WarDeck = [];
    var player2WarDeck = [];
    function compareCards(){
        console.log("War");
        Deck.DealWarCards(player1, player1WarDeck, 2);
        Deck.DealWarCards(player2, player2WarDeck, 2);
        console.log(player1WarDeck, player2WarDeck);

        if(player1WarDeck[player1WarDeck.length - 1].faceValue === player2WarDeck[player2WarDeck.length - 1].faceValue){
            console.log("Tie");
            Deck.DealWarCards(player1, player1WarDeck, 2);
            Deck.DealWarCards(player2, player2WarDeck, 2);
            compareCards();
        }
        if(player1WarDeck[player1WarDeck.length - 1].faceValue > player2WarDeck[player2WarDeck.length - 1].faceValue){
            player1.wonDeck = player1.wonDeck.concat(player1WarDeck, player2WarDeck);
            console.log("Player 1 wins");
        }
        else{
            player2.wonDeck = player2.wonDeck.concat(player1WarDeck, player2WarDeck);
            console.log("Player 2 wins");
        }
        warCardsHolder[0].textContent = player1WarDeck[player1WarDeck.length - 1].cardText +" of " +player1WarDeck[player1WarDeck.length - 1].suit;
        warCardsHolder[1].textContent = player2WarDeck[player2WarDeck.length - 1].cardText +" of " +player2WarDeck[player2WarDeck.length - 1].suit;
        cardHolder[0].textContent = player1WarDeck[0].cardText +" of " +player1WarDeck[0].suit;
        cardHolder[1].textContent = player2WarDeck[0].cardText +" of " +player2WarDeck[0].suit;
    }
    if(player1.currentDeck.length === 0){
        ReshuffleDeck(player1);
    }
    else{
        player1.GetCurrentCard();
    }
    if(player2.currentDeck.length === 0){
        ReshuffleDeck(player2);
    }
    else{
        player2.GetCurrentCard();
    }
    if(player1.currentCard.faceValue > player2.currentCard.faceValue){
        player1.wonDeck.push(player1.currentCard);
        player1.wonDeck.push(player2.currentCard);
    }
    else{
        player2.wonDeck.push(player2.currentCard);
        player2.wonDeck.push(player1.currentCard);
    }
    if(player1.currentCard.faceValue === player2.currentCard.faceValue){
        player1WarDeck.push(player1.currentCard);
        player2WarDeck.push(player2.currentCard);
        compareCards();
    }
    else{
        cardHolder[0].textContent = player1.currentCard.cardText +" of " +player1.currentCard.suit;
        cardHolder[1].textContent = player2.currentCard.cardText +" of " +player2.currentCard.suit;
        currentCardsHolder[0].textContent = player1.currentDeck.length;
        currentCardsHolder[1].textContent = player2.currentDeck.length;
        wonCardsHolder[0].textContent = player1.wonDeck.length;
        wonCardsHolder[1].textContent = player2.wonDeck.length;
        warCardsHolder[0].textContent = "";
        warCardsHolder[1].textContent = "";
    }
    if(player1.currentDeck.length === 52){
        GameOver(player1);
    }
    if(player2.currentDeck.length === 52){
        GameOver(player2);
    }
}
function ReshuffleDeck(player){
    Deck.ShuffleDeck(player.wonDeck, player.currentDeck);
}
function GameOver(player){
    console.log(player.name +" wins!");
}

window.onload = function(){
    Player1 = new Player("Player 1", [], []);
    Player2 = new Player("Player 2", [], []);
    Deck.StartGame(Player1, Player2);
}
play.onclick = function(){
    PlayGame(Player1, Player2);
}

if (playerCard.rank > computerCard.rank) {
    // The player adds both his and the computer's cards to the bottom of his hand.
    playerHand.unshift(playerCard);
    playerHand.unshift(computerCard);
    // Update output value to communicate player wins.
    myOutputValue = myOutputValue + 'PLAYER WINS!<br>';
  }
  // If the computer's card beats the player's card, the computer wins.
  else if (computerCard.rank > playerCard.rank) {
    // The computer adds both his and the player's card to the bottom of his hand.
    computerHand.unshift(playerCard);
    computerHand.unshift(computerCard);
    // Update output value to communicate computer wins.
    myOutputValue = myOutputValue + 'COMPUTER WINS!<br>';
  }
  // If the player's and computer's cards match, it's War.
  else {
    // Update output to communicate War.
    myOutputValue = myOutputValue + "It's WAR!<br>";
    // Create array to store cards used for War. The winner will receive all these cards.
    // add the 2 matching cards to the set of war cards.
    var warCards = [playerCard, computerCard];
    // Create boolean for while loop condition. When this boolean becomes false, end loop.
    var cardsEqual = true;

    // Continue to loop while both player's and computer's cards are of equal rank.
    while (cardsEqual) {
      // Draw 1 card face-down for player and computer respectively.
      var playerFaceDown = playerHand.pop();
      var computerFaceDown = computerHand.pop();
      // Draw 1 card face-up for player and computer respectively.
      var playerFaceUp = playerHand.pop();
      var computerFaceUp = computerHand.pop();
      // Store all War cards in warCards array for the eventual winner.
      warCards.push(playerFaceDown);
      warCards.push(computerFaceDown);
      warCards.push(playerFaceUp);
      warCards.push(computerFaceUp