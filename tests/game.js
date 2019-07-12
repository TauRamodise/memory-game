/* let ankh = document.createElement('img');
ankh = '../images/front/ankh.png'
 */

function shuffleCards(){
let array = [...arguments];
array.forEach(shuffle => {
   shuffle = Math.floor(Math.random() * array.length)
});

return array
}

let backCard;
let frontCard;
let cardHasFlipped = false;

function showCard(){
   if(!cardHasFlipped){
      cardHasFlipped = true;
      backCard = this;
   } else{
      cardHasFlipped = false;
      frontCard = this;
   }

   backCard = 0;
   frontCard = 0; console.log(shuffleCards([1, 2, 3, 4, 5, 6, 7, 8, 9,5,4,7,9,6,3,2,1,1,4]));

   // module.exports = shuffleCards();

   if(backCard === frontCard){
      return true;
   } else {
      return false;
   }
}

