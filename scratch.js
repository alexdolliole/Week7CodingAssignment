let playerDeck, computerDeck

class Player {
    constructor(name, cards, score) {
    this.name = name;
    this.cards = cards;
    this.score = score;
    }
}


class Deck {
    constructor(cards = initializeDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length
    }
}


class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}


function initializeDeck() {
    var suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    var deck = [];

    for (var suitCount = 0; suitCount < 4; suitCount++) {
        for (var valueCount = 0; valueCount < 13; valueCount++) {
            deck.push(values[valueCount] + ' of ' + suits[suitCount]);
        }
    }

}


function shuffleDeck(deck) {
    for(var i = 0; i < 52; i++) {
        var tempCard = deck[i];
        var randomIndex = Math.floor(Math.random() * 52);
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
}


function start() {
    const deck = new Deck();
    deck.shuffleDeck();

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));

    console.log(playerDeck);
    console.log(computerDeck);
}

if (playerCard.value > computerCard.value) {
    playerHand.unshift(playerCard);
    playerHand.unshift(computerCard);
    myOutputValue = myOutputValue + 'PLAYER WINS!<br>';
  }
  else if (computerCard.rank > playerCard.rank) {
    computerHand.unshift(playerCard);
    computerHand.unshift(computerCard);
    myOutputValue = myOutputValue + 'COMPUTER WINS!<br>';
  }
  else {
    myOutputValue = myOutputValue + "It's WAR!";
    var warCards = [playerCard, computerCard];
    var cardsEqual = true;

    while (cardsEqual) {
      var playerFaceDown = playerHand.pop();
      var computerFaceDown = computerHand.pop();
      var playerFaceUp = playerHand.pop();
      var computerFaceUp = computerHand.pop();
      warCards.push(playerFaceDown);
      warCards.push(computerFaceDown);
      warCards.push(playerFaceUp);
      warCards.push(computerFaceUp);
    }
}


