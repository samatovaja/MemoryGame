//alert("hello")

const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  }
]

cardArray.sort(() => 0.5 - Math.random())
let chosenCard = []
let chosenCardIds = []
const cardsWon = []

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')


function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      gridDisplay.appendChild(card)
    }
}

function checkMatch() {
  const cards = document.querySelectorAll('img')
  console.log(cards)
  console.log('match')
  const optionOneId = chosenCardIds[0]
  const optionTwoId = chosenCardIds[1]

  if (optionOneId == optionTwoId) {
    alert("You clicked the same image")
  }

  if (chosenCard[0]===chosenCard[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(chosenCard)
  }
  else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert("Try again")
  }

resultDisplay.textContent = cardsWon.length
chosenCard = []
chosenCardIds = []

if (cardsWon.length == cardArray.length/2) {
  resultDisplay.innerHTML = "Congrats you got them all!"
}
}

function flipCard() {
  const cardId = this.getAttribute('data-id')
  chosenCardIds.push(cardId)
  chosenCard.push(cardArray[cardId].name)
  console.log(chosenCardIds)
  console.log(chosenCard)
  this.setAttribute('src', cardArray[cardId].img)
  if (chosenCard.length === 2) {
    setTimeout(checkMatch, 500)
  }
}
createBoard()
