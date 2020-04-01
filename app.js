// Get screen
let screen = document.getElementById('screen')

// Outputs
let screenOutput = []
let previousResult = []

// Button Press & Add To Screen
document.querySelectorAll('#button-layout :not(#equals)').forEach(function (button) {
  button.addEventListener('click', function (button) {
    screen.innerHTML = ''
    screenOutput.push(button.target.value)
    screen.innerHTML = screenOutput.toString().replace(/,/g, '')
  })
})

// Clear input
document.querySelector('#clear').addEventListener('click', function (e) {
  screenOutput = []
  screen.innerHTML = '0'
  previousResult = ''
})


// Execute math query
document.querySelector('#equals').addEventListener('click', function (e) {
  const parsedQuery = screenOutput.toString().replace(/,/g, '')
  screen.innerHTML = `${eval(parsedQuery).toString()}`

  // push answer to previousAnswer and clear old result
  screenOutput = []
  screenOutput.push(eval(parsedQuery))
})






