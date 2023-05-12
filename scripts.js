// Variáveis

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

let randomNumber = Math.round(Math.random() * 10)
let tries = 1

// Eventos

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterReset)

// Funções

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')
  let tryNumber = inputNumber.value != '' ? Number(inputNumber.value) : -1

  if (tryNumber >= 0 && tryNumber <= 10) {
    if (tryNumber == randomNumber) {
      screen2.querySelector('h2').innerText = `Acertou em ${tries}!`

      toggleScreen()
    }

    inputNumber.value = ''
    tries++
  } else {
    alert('Por favor, digite um número entre 0 e 10 e tente novamente!')
  }
}

function handleResetClick() {
  tries = 1
  randomNumber = Math.round(Math.random() * 10)

  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function enterReset(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}
