const form = document.addItem
form.style.textAlign = 'center'
const input = form.title
const list = document.querySelector('#list')

form.addEventListener('submit', (e) => {
    event.preventDefault()

    var newItem = document.createElement('li')
    const inputValue = document.addItem.title.value
    newItem.textContent = inputValue
    
    const btnForm = document.createElement('form')
    btnForm.style.textAlign = 'center'
    const editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'
    const updateBtn = document.createElement('button')
    updateBtn.textContent = 'Update'
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Remove'
    
    list.appendChild(newItem)
    list.appendChild(btnForm)
    btnForm.appendChild(editBtn)
    btnForm.appendChild(deleteBtn)
    
    editBtn.addEventListener('click', (e) => {
        e.preventDefault()

        btnForm.removeChild(editBtn)
        btnForm.appendChild(updateBtn)
        let editText = document.createElement('input')
        editText.setAttribute('type', 'text')
        newItem.appendChild(editText)
    })
    
    deleteBtn.addEventListener('click', function(e){
        e.preventDefault()

        list.removeChild(newItem)
        btnForm.remove(editBtn)
        btnForm.remove(deleteBtn)
        btnForm.remove(updateBtn)
    })
})    
