//get the buy button and save as variable
//get the error paragraph as varible
//on button click, modify the error paragraph
//"Something went wrong, please try again later"

let buyButton = document.getElementById("buy-btn")
let errorText = document.getElementById("error")

console.log(buyButton)
console.log(errorText)

function showError(){
 errorMessage = "Something went wrong, please try again later"
 errorText.textContent = errorMessage
}