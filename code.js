/*
  MEC TTP 2021 Winter Assignment 2: Blackjack Game Engine

  Use this js file to write your project outline and your core game logic.
  You will use your browser's javascript console to interact with the game.

  Game Description:
  
    Dealer has 2 cards, 1 face up and 1 face down

    Dealer gives the player 2 cards, both revealed to everyone

    Player sums up their cards, based on the amount, if it's
    <= 21, they will ask the dealer for more or stay with 
    their current deck

    Everytime the player asks for a new card, they have to add
    that to their sum

    If the sum is 21, the player automatically wins
    If the sum is greater than 21, the player loses

    When the player stays with the deck they have and don't
    ask for anymore cards, then the dealer's face down card is
    revealed 

    Determining outcome:
      Based on the sum of the dealer's hand, if it's < 21 and the
      player's hand is greater than the dealer's, then the player
      wins

      If the dealer's hand is greater than 21, then the player also wins

      If the player's hand is less than the dealer's hand, then the dealer
      wins

      If the dealer's hand is <= 16, then the dealer gets 1 more card

  Assumptions:
    assume that we're ony dealing with numbers for cards

  Function stubs:
    deck_of_cards : Array
    dealer_hand : Array
    player_hand : Array

    deal_cards(){}
    sum_player_hand(hand){}
    sum_dealer_hand(hand){}
    determine_outcome(){}
    start()
    reset(){}
    hit() {}
    stand() {}

    sum_hand(dealer_hand) >= sum_hand(player_hand)
  
 */

 let deckOfCards = [1,2,3,4,5,6,7,8,9,10]
 let dealer_hand = []
 let player_hand = []


// function that generates random cards
 function dealCards(deckOfCards) {
    let card = Math.floor(Math.random() * deckOfCards.length)
    return deckOfCards[card];
  }

  // Function that assigns X number of cards to player and dealer
  function giveCard(num){
    for (i = 0; i < num; i++){
      player_hand.push(dealCards(deckOfCards))
      dealer_hand.push(dealCards(deckOfCards))
    }
  }
 
// function to sum an array of numbers
function sum(hand){
  total = 0;
  for (i = 0; i < hand.length;i++)
    total = total + hand[i]
  return total
}

//  Assigning 2 Cards to player and dealer

giveCard(2)
// Sum Player Scores and Dealer Score
let playerScore = sum(player_hand);
let dealerScore = sum(dealer_hand);

// Test Case
console.log(`player's hand: ${player_hand}`)
console.log(`dealer's hand: ${dealer_hand}`)

console.log(`Player's Score: ${playerScore}`)
console.log(`Dealer's Score: ${dealerScore}`)



