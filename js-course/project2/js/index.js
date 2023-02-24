//The Time is: 
//create two variables, firstCard, secondCard
//set value to some random num between 2 and 11


//create a variable sum and set it to the sum of the two cards

let message = ""

let player = {
 cards : [],
 sum : 0,
 name : "Player" ,
 cash : 200,
 plays : 0,
 isAlive: false,
 hasBJ : false
}

let house = {
 cards : [],
 sum : 0,
 tempSum : 0
}

let playerEl = document.getElementById("player-el")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let startButton = document.getElementById("start-game")


function startGame(){
 if(player.isAlive == false){
  playerInit()
  houseInit()
  console.log("Game started")
  renderGame()
  renderButtons()
 } else if(player.isAlive == true){
  foldGame()
  renderButtons()
 }

}

function playerInit(){
 player.isAlive = true
 let c1 = getRandomCard()
 let c2 = getRandomCard()
 player.cards.push(c1)
 player.cards.push(c2)
 player.sum = c1 + c2
}

function houseInit(){
 house.isAlive = true
 let c1 = getRandomCard()
 let c2 = getRandomCard()
 house.cards.push(c1)
 house.cards.push(c2)
 house.sum = c1 + c2
}



function drawCard(){
 //draw a random card, only if isAlive and has not won
 if(player.isAlive == true && player.hasBJ == false)
 {
  let newCard = getRandomCard()
  let newCard2 = getRandomCard()
  player.cards.push(newCard)
  house.cards.push(newCard2)
  player.sum += newCard
  house.sum += newCard2
  cardsText = cardsEl.textContent + " " + newCard
  renderGame()
 }
}

function renderButtons(){
 //if Player is alive, Start Game button becomes Fold button
 //If player folds, player loses money depending on house numbers
 if(player.isAlive == true && player.hasBJ == false){
  startButton.textContent = "FOLD"
 }
 else if(player.isAlive == true && player.hasBJ == true){
  startButton.textContent = "PLAY AGAIN"
 }
 else if(player.isAlive == false){
  startButton.textContent = "START GAME"
 }
}

function foldGame(){
 //stops game and 
 //checks if player sum > house sum
 //if player sum is bigger, player wins half bet
 //if player smaller or equal, player loses half bet
 
 player.plays += 1
 for (let i=0; i<10; i++){
  let tempCard = getRandomCard()
  house.cards.push(tempCard)
  house.sum += tempCard
 }
 if(player.sum > house.sum) {
  house.tempSum = house.sum
  player.cash += 10
 } else if(house.sum >= 21){
  for(let i = 0; i<house.cards.length; i++){
   if (house.tempSum<=21){
    house.tempSum += house.cards[i]
   } else if(house.tempSum>21){
    house.tempSum -= house.cards[i-1]
    break
   }
  }
  if(player.sum > house.tempSum){
   player.cash += 10
  } else{
   player.cash -= 10
  }
 }
 messageEl.textContent = "House Sum was: " + house.tempSum
 update()
 restartGame()
}

function restartGame(){
 //resets values of arrays of player and house
 player.cards = []
 player.sum = 0
 player.isAlive = false
 player.hasBJ = false

 house.cards = []
 house.sum = 0
 house.tempSum = 0
}

function update(){
 let sumText = "Sum: " + player.sum
 sumEl.textContent = sumText

 cardsEl.textContent = "Cards: "
 for(let i=0; i<player.cards.length; i++){
  cardsEl.textContent += player.cards[i]+ " "
 }

 playerEl.textContent = player.name + ": $" + player.cash + " | " + "Games Played: "+ player.plays
}

function renderGame(){
 renderButtons()
 update()

 if(player.sum <= 20){
  message = "Hit Another Card??"
  update()
  renderButtons()
 } else if(player.sum === 21){
  message = "Blackjack! You win!"
  player.hasBJ = true
  player.cash += 20
  player.plays+=1
  update()
  renderButtons()
  restartGame()
 } else{
  message = "You Lose!!"
  player.isAlive = false
  player.cash -= 20
  player.plays += 1
  update()
  renderButtons()
  restartGame()
 }
 
 messageEl.textContent = message
 console.log(player.hasBJ)
 console.log(player.isAlive)
}

function getRandomCard(){
 let ranNum = Math.floor(Math.random()*13 + 1)
 if(ranNum === 1){
  return 11;
 }else if(ranNum >= 11 ){
  return 10
 }else{
  return ranNum;
 }
}

//State variable that checks the state of the game



//Arrays are way to store information.
//Arrays are 0 indexed, so first is one, second is two, dadada
//array.length property is the number of items in an array, so it will always be array's final index + 1
//push method allows us to push an item into an array
//pop() method removes the last item in an array
//unshift() method adds an item to the beginning of an array
//shift() method removes the first item, item[0], from the beginning of an array

// let messages = [
//  "Hey, how's it going",
//  "I'm great, thanks for asking. How about you?",
//  "All good. Been Working on my portfoilio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)

// messages.pop() 
// console.log(messages)


//For loops in Javascript can be used to log out items in an array

//MAth.random generates a random num bettween 0 and 1 but 1 is excluded

//Math.floor removes the decimals and converts a float into an integer

//Operators
// && == AND operator. Only true if both are true. 
// || == OR Operator. If there is one true statement, whole statement becomes true

//Objects. Composite data types
//Store key and value pairs in a memory sace that is solely about them so you can refrence them later.
//The key is the property of the object, and the value is the distinct value for that key.
//Eg, key = name, then value = "Muzi"

// let course = {
//  title: "Learn CSS Grid for free",
//  lessons: 16,
//  creator: "Per Herald Borgen",
//  length: 63,
//  level: 2,
//  isFree: true,
//  tags: ["html", "css"]
// }
