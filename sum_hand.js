// the sum of cards in the player's hand
function sumHand (hand) {
    let sum;
    for(let i = 0; i < hand.length; i++)
    {
      sum += hand[i]
    }
    return sum
} 

export default sumHand;

