function game () {
  const X_CLASS = 'x'
  const CIRCLE_CLASS = 'circle'
  const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const restartButton = document.querySelector(".restart")
const startButton = document.querySelector(".startbtn")
const playeronepoints = document.querySelector(".playeronescore")
const playertwopoints = document.querySelector(".playertwoscore")
const roundcounter = document.querySelector(".roundcounter")
let onepoints = 0;
let twopoints = 0;
let round = 1;
playeronepoints.innerHTML = onepoints
playertwopoints.innerHTML = twopoints
roundcounter.innerHTML = `Round ${round}`
let circleTurn


function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
}

function handleClick(e) {
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw) {
  if (draw) {
    console.log("draw");
    round++
    roundcounter.innerHTML = `Round ${round}`
    clearBoard();
    
  } else {
   if (!circleTurn){
     onepoints++
     round++
     playeronepoints.innerHTML = onepoints
     roundcounter.innerHTML = `Round ${round}`
     console.log("x wins");
     
   } else if (circleTurn) {
    twopoints++
    round++
    playertwopoints.innerHTML = twopoints
    roundcounter.innerHTML = `Round ${round}`
    console.log("o wins");
   }
   clearBoard()
    
  }
}


function clearBoard () {
  document.querySelectorAll(".cell").forEach(cell => cell.classList.remove("x","circle"))
  startGame()
}


function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}

function players() {
const playeravatar = document.querySelectorAll(".icons")
const playeroneavatar = document.getElementById("playerone")
const playertwoavatar = document.getElementById("playertwo") 

playeroneavatar.classList.add("fa-solid", "fa-user", "fa-3x")
playertwoavatar.classList.add("fa-solid", "fa-user-astronaut", "fa-3x")


// set players avatar
function changeAvatar () {
  const oneuser = document.getElementById("oneuser")
  const oneastronaut = document.getElementById("oneastronaut")
  const oneninja = document.getElementById("oneninja")
  const onetie = document.getElementById("onetie")
  const twouser = document.getElementById("twouser")
  const twoastronaut = document.getElementById("twoastronaut")
  const twoninja = document.getElementById("twoninja")
  const twotie = document.getElementById("twotie")

  oneuser.setAttribute("id", "selected")
  twoastronaut.setAttribute("id", "selected")

  oneuser.addEventListener("click", () => {
    oneastronaut.removeAttribute("id","selected")
    oneninja.removeAttribute("id","selected")
    onetie.removeAttribute("id","selected")
    playeroneavatar.removeAttribute("class")
    playeroneavatar.classList.add("fa-solid", "fa-user", "fa-3x")
    oneuser.setAttribute("id", "selected")
  })
  oneastronaut.addEventListener("click", () => {
    oneuser.removeAttribute("id","selected")
    oneninja.removeAttribute("id","selected")
    onetie.removeAttribute("id","selected")
    playeroneavatar.classList.add("fa-solid", "fa-user-astronaut", "fa-3x")
    oneastronaut.setAttribute("id", "selected")
  })
  oneninja.addEventListener("click", () => {
    oneastronaut.removeAttribute("id","selected")
    onetie.removeAttribute("id","selected")
    oneuser.removeAttribute("id","selected")
    playeroneavatar.removeAttribute("class")
    playeroneavatar.classList.add("fa-solid", "fa-user-ninja", "fa-3x")
    oneninja.setAttribute("id", "selected")
  })
  onetie.addEventListener("click", () => {
    oneastronaut.removeAttribute("id","selected")
    oneninja.removeAttribute("id","selected")
    oneuser.removeAttribute("id","selected")
    playeroneavatar.removeAttribute("class")
    playeroneavatar.classList.add("fa-solid", "fa-user-tie", "fa-3x")
    onetie.setAttribute("id", "selected")
  })
  twouser.addEventListener("click", () => {
    twoastronaut.removeAttribute("id","selected")
    twoninja.removeAttribute("id","selected")
    twotie.removeAttribute("id","selected")
    playertwoavatar.removeAttribute("class")
    playertwoavatar.classList.add("fa-solid", "fa-user", "fa-3x")
    twouser.setAttribute("id", "selected")
  })
  twoastronaut.addEventListener("click", () => {
    twouser.removeAttribute("id","selected")
    twoninja.removeAttribute("id","selected")
    twotie.removeAttribute("id","selected")
    playertwoavatar.removeAttribute("class")
    playertwoavatar.classList.add("fa-solid", "fa-user-astronaut", "fa-3x")
    twoastronaut.setAttribute("id", "selected")
  })
  twoninja.addEventListener("click", () => {
    twoastronaut.removeAttribute("id","selected")
    twotie.removeAttribute("id","selected")
    twouser.removeAttribute("id","selected")
    playertwoavatar.removeAttribute("class")
    playertwoavatar.classList.add("fa-solid", "fa-user-ninja", "fa-3x")
    twoninja.setAttribute("id", "selected")
  })
  twotie.addEventListener("click", () => {
    twoastronaut.removeAttribute("id","selected")
    twoninja.removeAttribute("id","selected")
    twouser.removeAttribute("id","selected")
    playertwoavatar.removeAttribute("class")
    playertwoavatar.classList.add("fa-solid", "fa-user-tie", "fa-3x")
    twotie.setAttribute("id", "selected")
  })



}
changeAvatar();

}

startButton.addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none"
  startGame()
})

restartButton.addEventListener('click', () => {
  location.reload();
})


players();
}

game();