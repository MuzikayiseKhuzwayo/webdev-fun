//SOme cool thing where we create a chrome extension which can save sites to visit later
//Use Event listeners

//let and const are different. Const variables cannot be assigned to or changed. but let allows you to change it.
//Const is used for unchanging stuff
//let allows us to change code in the future

let myLeads = []
let inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const delBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromStorage)

if(leadsFromStorage){
 myLeads = leadsFromStorage
 render(myLeads)
} else{
 //do nothing
}

//event listener for save button
inputBtn.addEventListener("click", function(){
 myLeads.push(inputEl.value)
 inputEl.value = ""
 localStorage.setItem("myLeads",JSON.stringify(myLeads))
 render(myLeads)
 console.log(localStorage.getItem("myLeads"))
})

//event listener for delete button
delBtn.addEventListener("dblclick", function(){
 localStorage.clear()
 myLeads = []
 render(myLeads)
})

//event listener for tab button
tabBtn.addEventListener("dblclick", function(){
 //grab the window href
 //store it in myLeads
 //render
 const tabLink = window.location.href
 myLeads.push(tabLink)
 render(myLeads)
})

function render(leads){
 let listItems = ""
 for(let i=0; i<leads.length; i++){
  listItems += `
  <li> 
   <a href='${leads[i]}' target='blank_'> 
    ${leads[i]}
   </a>
  </li>
  `
 }
 ulEl.innerHTML = listItems
}


//innerHTML allows you to add html elements with JS

// let divEl = document.getElementById("div-el")
// divEl.innerHTML = "<button onclick='thankYou()'>BUY!</button>"

// function thankYou(){
//  divEl.innerHTML += "<p>Thank you My Brodda</p>"
// }

// 

//create element
 //set text content
 //append to ul
 // const li = document.createElement("li")
 // li.textContent = myLeads[i]
 // ulEl.append(li)

 //Template strings allow you to write just like you'd write it in html without all the plusses and concatenation notation
 // const recipient = "James"
 // const sender = "Poop"
 // const email = `Hey ${recipient}! How's it going? Cheers, ${sender}.`

 // console.log(email)

 //localStorage is a place where key value pairs specific to the user are stored by sites and apps. We can use localStorage to store website leads for later in our app. localStorage exists on the Window object

//localStorage only takes in Strings. Use JSON.stringify(...) to take in an array
//Use JSON.parse(...) to take out an array

// let myNames = `["muzi", "wiston"]`
// let myArr = JSON.parse(myNames)
// myArr.push("khuzwayo")
// myNames = JSON.stringify(myArr)

// console.log(typeof(myNames))
// console.log(myNames)

//Functions can take in params, weve seen this before in java and python. now it's being done is JS
//JS params are pretty cool, because you don't need to spec the type of the variable that is being passed

// function sum(a, b){
//  return a+b
// }

// console.log(sum(23, 53))