# 🃏♦️♠️♣️♥️🎲 Concentration Card Game (Memory!)

## About this game:
Concentration is a fun card game all about memory, thats why its also refered to as, memory. It can be played with any amount of players and increasing the deck size to increase the difficultly. The version we will be playing is a single player variation with a 52 standard card deck with a total life count. The goal of the game is to find all the matching pairs before your life total depletes to 0. Click any 2 pairs of cards, if the pairs that are revealed are matching, then those pairs will remain flipped up. If they are not matching then the cards will filp back facing down with a message of 'Wrong Guess' on screen. if you reveal a unmatching pair you will lose one life, starting with a total of 45 life points. There will also be a reshuffle / replay button you can use at anytime if you would like to reset the cards to start a new game.

## Wireframe

![image](https://github.com/dizzyjoe/memorygame/assets/141372845/8f1ebbcc-b7b0-4bbc-b828-e4f8f6b5179e)




![image](https://github.com/dizzyjoe/memorygame/assets/141372845/ac16dfc0-9830-4619-8d75-ba4748bfae1e)

## Tecnologies used:
* Javascript
* HTML
* CSS
* VScode
* Figma

## Getting Started:


-link to deployed game:

https://dizzyjoe.github.io/memorygame/


## Next Steps: things I want to add to the game(future ideas)
*  a multiplayer mode up to 4 players
* add sound effects for the card flips and sound effects for finding a matching pair/ finding a non matching pair
* nice and chill background/elevator music while the game is playing

# Pseudocode:

## Define required constants :
* Reset/Replay button.
* Card suits and ranks/ Card deck container
* background image
* Life Counter
* color constants
  
## Define required variables used to track the state of the game:

* Add win/lose logic(winning status)
* A board array of 4 rows by 13 cards or two rows of cards for a full 52 card deck
* Upon loading the game it should start as soon as the player interacts and clicks a card
* life counter, total of 6 to start

## Cached DOM elements :

* Cards appear on screen / cards container array.
* Backside of card on screen and flips over when clicked.
* Background image for wire frame
* replay/ re-shuffle button
* card flip (toggle) cards stay flipped up once the matcing pair is revealed
* cache the 'Wrong Guess' display message upon the wrong guess

## Upon loading the app should:
* be ready to handle a player cicking a card
* life counter displayed and ready
* cards should be facing down with the back side image up
* wait for the user to interact
* Render messages to display
* render win and loss messages whenever the player wins or loses
* handle a player to re-render board upon replay/reshuffle
* display winning message once all the matching pairs are revealed
* display losing message once the total life points reach 0
* ( display a 'Wrong Guess' message upon a wrong guess, until next click or until timer expires )
* Handle a player to re-render board upon replay/reshuffle.
* reshuffle the shuffle deck container upon click/ making sure the suffled deck has all the cards facing down.
* / resets the deck of cards
* Handle a player clicking a card
* upon click it should flip the card
* if the cards are matching they shall remain facing flipped up
* if the cards are not matching they will flip back down and display the message 'Wrong Guess' for a few seconds or until you click off


## Event listeners :
* Toggle card event listener to flip and stay whenever there is a click.
* event listener for the 'Click'
* event listener for 'hover'


## Functions :
* Life counter function to reduce 1 health point from total when an unmatching pair is revealed.
* Add if then function for when there are matching pairs and unmatching pairs revealed.
* shuffle/ replay function to reshuffle the deck and flips the cards all back facing down.
* function to check and see if the cards are matching pairs or If the cards are not matching
