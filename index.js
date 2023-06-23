let playerInput = document.getElementById("player-input")
let player = {
    name: playerInput,
    chips: 196
}

chipsEl = document.getElementById("chips-el")
chipsEl.textContent += player.chips

let isAlive = false
let hasBlackjack = false

let cards = []
let sum = 0
let message = " "

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let errorEl = document.getElementById("error-el")

function startGame() {
    isAlive = true

    if (sum === 0) {
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards.push(firstCard, secondCard)
        sum = cards[0] + cards[1]
        renderGame()

    } else {
        errorEl.textContent = "Game already started."
    }

    
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber

    } 
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i< cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Congrats you've got a blackJack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    errorEl.textContent = ""
    if (isAlive && hasBlackjack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}