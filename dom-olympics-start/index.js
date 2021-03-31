// preliminary
const header = document.querySelector('#header')
header.style.textAlign = 'center'

const h1 = document.createElement('h1')
h1.textContent = 'JavaScript Made This!!'
header.append(h1)

const span = document.createElement('span')
span.textContent = 'Mark Gowarty-Weinstock wrote the JavaScript'
header.append(span)

//bronze
const messages = document.querySelectorAll('.message')
messages[0].textContent = "IT'S YA BOI"
messages[1].textContent = "hey man"
messages[2].textContent = "LETS GO OUT TONIGHT BRUVNER"
messages[3].textContent = "im tuckered out"

var clearBtn = document.getElementById("clear-button")

console.log(clearBtn)

clearBtn.addEventListener('click', function(e){
    for(let i = 0; i < messages.length; i++ ){
        messages[i].textContent = ""
    }
})