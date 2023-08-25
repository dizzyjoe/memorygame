const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');


const originalDeck = buildOriginalDeck();
renderDeckInContainer(originalDeck, document.getElementById('original-deck-container'));


const winMessage = document.getElementById('win-message');
const loseMessage = document.getElementById('lose-message');
const wrongGuessMessage = document.getElementById('wrong-guess-message');


let shuffledDeck;
let flippedCards = [];
let isFlipping = false;
let playerLives = 45;
playerLivesCount.textContent = playerLives;


const shuffledContainer = document.getElementById('shuffled-deck-container');
const messageElement = document.createElement('div');
messageElement.classList.add('message'); // Add this line
section.appendChild(messageElement);


document.querySelector('button').addEventListener('click', function() {
 
  playerLives = 45;
  playerLivesCount.textContent = playerLives;

 
  renderNewShuffledDeck();

  
  messageElement.textContent = '';

  
  checkGameOver();
});


function getNewShuffledDeck() {
  const tempDeck = [...originalDeck];
  const newShuffledDeck = [];
  while (tempDeck.length) {
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return newShuffledDeck;
}

function renderNewShuffledDeck() {
  shuffledDeck = getNewShuffledDeck();
  renderDeckInContainer(shuffledDeck, shuffledContainer);
}

function renderDeckInContainer(deck, container) {
  container.innerHTML = ''; 

 
  const gridWrapper = document.createElement('div');
  gridWrapper.classList.add('grid-wrapper');



  function checkGameWin() {
    const allCardsFlipped = shuffledDeck.every(function(card) {
      const cardElement = gridWrapper.querySelector(`.${card.face}`);
      return !cardElement.classList.contains('back');
    });
  
    if (allCardsFlipped) {
      winMessage.textContent = 'YOU WON!';
      winMessage.style.display = 'block';
  
      setTimeout(function() {
        resetGame();
      }, 8000);
    }
  }
  

  function checkGameOver() {
    if (playerLives === 0) {
      loseMessage.textContent = 'YOU LOST! PLAY AGAIN?!';
      loseMessage.style.display = 'block';

      setTimeout(function() {
        resetGame();
      }, 8000); 
  
      loseMessage.addEventListener('click', function() {
        resetGame();
      });
    }
  }
  

  
  function resetGame() {
    playerLives = 45;
    playerLivesCount.textContent = playerLives;
    flippedCards = [];
  
    renderNewShuffledDeck();
  
    winMessage.style.display = 'none';
    loseMessage.style.display = 'none';
    winMessage.removeEventListener('click', resetGame);
    loseMessage.removeEventListener('click', resetGame);
  }

  
  for (let i = 0; i < deck.length; i++) {
    const card = deck[i];
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', card.face, 'back');
    gridWrapper.appendChild(cardElement);

    

    cardElement.addEventListener('click', function() {
      if (!cardElement.classList.contains('back') || flippedCards.length < 2) {
        if (!cardElement.classList.contains('matched') && flippedCards.indexOf(card) === -1) {
          cardElement.classList.toggle('back');
          if (flippedCards.length < 2) 
            flippedCards.push(card);
          }
          if (flippedCards.length === 2) {
          if (flippedCards[0].value === flippedCards[1].value) {
            
            flippedCards.forEach(function(flippedCard) {
              const cardElement = gridWrapper.querySelector(`.${flippedCard.face}`);
              cardElement.classList.add('matched'); 
            });

            flippedCards = [];
            checkGameWin();
          } else {
            
            setTimeout(function() {
              flippedCards.forEach(function(flippedCard) {
                const cardElement = gridWrapper.querySelector(`.${flippedCard.face}`);
                cardElement.classList.add('back');
              });
        
              
              wrongGuessMessage.textContent = 'WRONG GUESS!';
              wrongGuessMessage.style.display = 'block';
        
              setTimeout(function() {
                wrongGuessMessage.style.display = 'none';
              }, 3500); 
        
              
              playerLives--;
              playerLivesCount.textContent = playerLives;
        
            
              checkGameOver();
        
              flippedCards = [];
            }, 1000); 
          }
        }
      }
    });
    

    if ((i + 1) % 13 === 0) {
      cardElement.style.clear = 'both';
    }
  }
  
  container.appendChild(gridWrapper);
}

function buildOriginalDeck() {
  const deck = [];
  let cardTypeCounter = 0;

  suits.forEach(function (suit) {
    ranks.forEach(function (rank) {
      let cardValue = Number(rank);
      if (rank === 'A') {
        cardValue = 11;
      } else if (rank === 'J') {
        cardValue = 12;
      } else if (rank === 'Q') {
        cardValue = 13;
      } else if (rank === 'K') {
        cardValue = 14;
      }

      deck.push({
        face: `${suit}${rank}`,
        value: cardValue,
        cardType: cardTypeCounter,
      });
    });
  });

  return deck;
}

function areMatchingCards(card1, card2) {
  return (
    card1.value === card2.value &&
    ![12, 13, 14].includes(card1.value) &&
    !card1.classList.contains('matched') &&
    !card2.classList.contains('matched')
  );
  }

renderNewShuffledDeck();
