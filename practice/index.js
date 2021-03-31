const input = document.getElementById('input')
const addBtn = document.getElementById('add')
const list = document.getElementById('list')

addBtn.addEventListener('click', function(e){
    e.preventDefault()

    let listItem = document.createElement('li')
    let textInput = document.getElementById('input').value
    listItem.textContent = textInput
    list.appendChild(listItem)
})