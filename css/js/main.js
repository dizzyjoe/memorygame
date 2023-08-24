/*----- constants -----*/
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];



// Build an 'original' deck of 'card' objects used to create shuffled decks
const originalDeck = buildOriginalDeck();
renderDeckInContainer(originalDeck, document.getElementById('original-deck-container'));





/*----- app's state (variables) -----*/
let shuffledDeck;

let flippedCards = [];

/*----- cached element references -----*/
const shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', renderNewShuffledDeck);

/*----- functions -----*/
function getNewShuffledDeck() {
  // Create a copy of the originalDeck (leave originalDeck untouched!)
  const tempDeck = [...originalDeck];
  const newShuffledDeck = [];
  while (tempDeck.length) {
    // Get a random index for a card still in the tempDeck
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return newShuffledDeck;
}

function renderNewShuffledDeck() {
  // Create a copy of the originalDeck (leave originalDeck untouched!)
  shuffledDeck = getNewShuffledDeck();
  renderDeckInContainer(shuffledDeck, shuffledContainer);
}

function renderDeckInContainer(deck, container) {
  container.innerHTML = ''; // Clear the container

  // Create a wrapper element for the grid
  const gridWrapper = document.createElement('div');
  gridWrapper.classList.add('grid-wrapper');

  // Loop through the deck and create card elements
  for (let i = 0; i < deck.length; i++) {
    const card = deck[i];
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', card.face, 'back');// (change cards to back sides and figure out how to toggle flip the cards to the face side )
    gridWrapper.appendChild(cardElement);

    cardElement.addEventListener('click', () => {
      if (!cardElement.classList.contains('back') || flippedCards.length < 2) {
      cardElement.classList.toggle('back');
      if (flippedCards.length < 2) {
        flippedCards.push(card);
      }
      if (flippedCards.length === 2) {
        // Check if the values of the two flipped cards match
        if (flippedCards[0].value === flippedCards[1].value) {
          // Cards match, keep them face-up
          flippedCards = [];
        } else {
          // Cards don't match, flip them face-down after a brief delay
          setTimeout(() => {
            flippedCards.forEach(flippedCard => {
              const cardElement = gridWrapper.querySelector(`.${flippedCard.face}`);
              cardElement.classList.add('back');
            });
            flippedCards = [];
          }, 1000); // Adjust the delay as needed
        }
      }
    }
  });
    

    // Check if a new row should be started
    if ((i + 1) % 13 === 0) {
      cardElement.style.clear = 'both';
    }
  }
  // Append the grid wrapper to the container
  container.appendChild(gridWrapper);
}

function buildOriginalDeck() {
  const deck = [];
  let cardTypeCounter = 0; // Assign unique IDs to card types

  suits.forEach(function (suit) {
    ranks.forEach(function (rank) {
      const cardType = rank === 'K' || rank === 'Q' || rank === 'J' || rank === '10' ? cardTypeCounter++ : 0;
      deck.push({
        face: `${suit}${rank}`,
        value: Number(rank) || (rank === 'A' ? 11 : 10),
        cardType: cardType, // Assign the card type
      });
    });
  });

  return deck;
}

function areMatchingCards(card1, card2) {
  return card1.value === card2.value;
  console.log("Card 1 - Value:", card1.value, "Face:", card1.face, "Type:", card1.cardType);
console.log("Card 2 - Value:", card2.value, "Face:", card2.face, "Type:", card2.cardType);
}

renderNewShuffledDeck();

const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 12;

//link text 
platerLivesCount.textContent = playerLives;


  //CSS Card Pack ^
// -------------------------


/* - Pseudocode:


Define required constants :
Reset/Replay button. *
Card suits and ranks/ Card deck container *
background image *
Life Counter *
color constants *


Define required variables used to track the state of the game:
Add win/lose logic(winning status)
A board array of 4 rows by 13 cards or two rows of cards for a full 52 card deck * 
Upon loading the game it should start as soon as the player interacts and clicks a card 
life counter, total of 6 to start *




Cached DOM elements :
Cards appear on screen / cards container array.
Backside of card on screen and flips over when clicked.
Background image for wire frame
replay/ re-shuffle button
card flip (toggle) cards stay flipped up once the matcing pair is revealed
cache the 'Wrong Guess' display message upon the wrong guess




Upon loading the app should:
be ready to handle a player cicking a card
life counter displayed and ready
cards should be facing down with the back side image up
wait for the user to interact
Render messages to display
render win and loss messages whenever the player wins or loses
handle a player to re-render board upon replay/reshuffle
display winning message once all the matching pairs are revealed
display losing message once the total life points reach 0
( display a 'Wrong Guess' message upon a wrong guess, until next click or until timer expires )
Handle a player to re-render board upon replay/reshuffle.
reshuffle the shuffle deck container upon click/ making sure the suffled deck has all the cards facing down.
/ resets the deck of cards
Handle a player clicking a card
upon click it should flip the card
if the cards are matching they shall remain facing flipped up
if the cards are not matching they will flip back down and display the message 'Wrong Guess' for a few seconds or until you click off



Event listeners :
Toggle card event listener to flip and stay whenever there is a click.
event listener for the 'Click'
event listener for 'hover'



Functions :
Life counter function to reduce 1 health point from total when an unmatching pair is revealed.
Add if then function for when there are matching pairs and unmatching pairs revealed.
shuffle/ replay function to reshuffle the deck and flips the cards all back facing down.
function to check and see if the cards are matching pairs or If the cards are not matching */