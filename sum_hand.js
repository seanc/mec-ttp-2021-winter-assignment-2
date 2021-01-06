// the sum of cards in the player's hand
function sumHand (hand) {
    for(let i = 0; i < hand.length; i++)
    {
      let sum = hand[i] + hand[i+1]
    }
    return sum
} 

export default sumHand;

