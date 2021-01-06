// the sum of cards in the player's hand
function sumHand (hand) {
    for(let i = 0; i < hand.length; i++)
    {
      let sum = hand[i] + hand[i+1]
    }
} 

export default sumHand;

// the sum of cards in the dealer's hand
function sum_dealer_hand(hand)
{
  for(let i = 0; i < hand.length; i++)
  {
    let sum = hand[i] + hand[i+1]
  }
}
export default sum_dealer_hand;