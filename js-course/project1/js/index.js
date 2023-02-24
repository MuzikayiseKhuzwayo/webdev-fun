//Grab welcome-el paragraph and store it in variable
//create two variables, name and greeting
//render welcome greeting on screen

let personName = "Muzi"
let greeting = "Welcome Back"
let messageToUser = greeting + ", " + personName + "!"
let welcomeEl = document.getElementById("welcome-el")
welcomeEl.innerText = messageToUser 

welcomeEl.innerText += " :D"

//Store the count somewhere, initialise as zero
//listen for clicks on the increment button
//increment the count when button is clicked
//change count-el on html to chnge the count

// store save-el paragraph as var

//USE AN ONCLICK EVEN LISTENER

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
 count += 1
 countEl.textContent = count;
}



function save(){
 // create variable that has count and basic seperator
 // render variable in saveEl using innerText
 // dont delete string, just concat onto it
 let newSave = count + " - "
 saveEl.textContent += newSave 
 count = 0
 countEl.textContent = count
}

let myPoints = 3

function addPoints(){
 myPoints += 3
}

function removePoints(){
 myPoints -= 1
}

addPoints()
addPoints()
addPoints()
removePoints()
removePoints()
console.log(myPoints)

