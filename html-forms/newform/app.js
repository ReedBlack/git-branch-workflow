var button = document.getElementById('button')
var targetElement = document.querySelector('#form')
var input= document.querySelector('.drop-down')

button.addEventListener('click', findForm)

function findForm() {
  var name = document.querySelector('.getName').value
  console.log(name);
}

targetElement.addEventListener('submit', finish)
// this part here keeps the page from refreshing
function finish(event) {
  event.preventDefault()
}
