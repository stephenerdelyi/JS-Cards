var card = (function() {
  function card(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  return card;
}());

var deck = (function() {
  var cards = [];
  var numCardsLeft = 0;

  function deck() {
    this.getNumLeft = function() {
      return numCardsLeft;
    };

    this.get = function() {
      return cards;
    }

    this.create = function() {
      var suitArray = ["spade", "club", "heart", "diamond"];
      var valueArray = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
      suitArray.forEach(function(suit) {
        valueArray.forEach(function(value) {
          cards.push(new card(value, suit));
          numCardsLeft++;
        });
      });

      this.shuffle = function() {
        var currentIndex = cards.length, temporaryValue, randomIndex;

        while(0 !== currentIndex) {
          //get a random value to switch
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          //perform the switch
          temporaryValue = cards[currentIndex];
          cards[currentIndex] = cards[randomIndex];
          cards[randomIndex] = temporaryValue;
        }
      }

      this.cut = function() {
        for(cardsCtr = 0; cardsCtr < Math.floor(cards.length/2); cardsCtr++) {
          cards.push(cards.shift());
        }
      }

      this.deal = function() {
        numCardsLeft--;
        return cards.shift();
      }

      this.dealRandom = function() {
        numCardsLeft--;
        randomIndex = Math.floor(Math.random() * cards.length);
        return cards.splice(randomIndex, 1);
      }
    };
  }
  return deck;
}());
