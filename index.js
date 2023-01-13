
let hasBlachJack = false
let isAlive  = false
let sum = 0
let massage = ""
let messageEl = document.getElementById("message-el")
let sumEl =document.querySelector("#sum-el")
let cardsEl= document.querySelector("#cards-el")
let card = []
let player = {
     Name : "Name",
     Chips : 145 
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ":" + player.Chips + "$"
function getRandomCard(){
    let num = Math.floor(1+Math.random()*13)
    if (num === 1){
        num = 11
    }

    else if (num >= 11){
        num = 10
    }
    else {
        num = num 
    }
    return num 
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    card=[firstCard,secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}
function renderGame(){
    cardsEl.innerText = "Cards:"
    for(let i = 0 ; i < card.length;i++){
        cardsEl.textContent += card[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20){
        massage="Do you want to draw a new card ?"
    }
    
    else if (sum === 21){
        massage= "Wohoo! You've got Blackjack!"
        hasBlachJack = true
    }
    
    else{
        massage= "You're out of the game!"
        isAlive = false
    }
    
    messageEl.innerText = massage
}

function NewCard(){
    if (isAlive === true && hasBlachJack === false){
        therdcard = getRandomCard()
        sum = sum + therdcard
        card.push(therdcard)
        
        renderGame()
    }
    
}



