//get buttons by Id and save them as variables
//create functions for all buttons according to their meaning
//output to bottom Span text after button click

let num1 = 21
let num2 = 6

let num1Span = document.getElementById("num1-el")
let num2Span = document.getElementById("num2-el")
let sumText = document.getElementById("sum-el")

let addButton = document.getElementById("add-btn")
let subButton = document.getElementById("subtract-btn")
let divButton = document.getElementById("divide-btn")
let mulButton = document.getElementById("multiply-btn")


function display(){
 num1Span.textContent = num1 + ""
 num2Span.textContent = num2 + ""
}

display()

function add(){
 //on button click add num 1 and num 2 into a new variable
 //output that in the Sum Span ting
 let sum = num1 + num2
 let eqString = "Result: " + sum
 sumText.textContent = eqString
}

function sub(){
 //on button click add num 1 and num 2 into a new variable
 //output that in the Sum Span ting
 let eq = num1 - num2
 let eqString = "Result: " + eq
 sumText.textContent = eqString
}

function div(){
 //on button click add num 1 and num 2 into a new variable
 //output that in the Sum Span ting
 let eq = num1 / num2
 let eqString = "Result: " + eq
 sumText.textContent = eqString
}

function mul(){
 //on button click add num 1 and num 2 into a new variable
 //output that in the Sum Span ting
 let eq = num1 * num2
 let eqString = "Result: " + eq
 sumText.textContent = eqString
}