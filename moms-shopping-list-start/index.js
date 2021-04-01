const form = document.addItem
form.style.textAlign = 'center'
const input = form.title
const list = document.querySelector('#list')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const newItem = document.createElement('li')
    let inputValue = document.addItem.title.value
    newItem.textContent = inputValue
    document.addItem.title.value = ""
    
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
        // e.preventDefault()

        btnForm.removeChild(editBtn)
        btnForm.appendChild(updateBtn)
        let editText = document.createElement('input')
        editText.setAttribute('type', 'text')
        newItem.appendChild(editText)

        //Add eventlistener for update button
        updateBtn.addEventListener('click', (e) => {
            e.preventDefault()

            newItem.textContent = editText.value
            btnForm.appendChild(editBtn)
            btnForm.removeChild(updateBtn)

        })
    })
    
    deleteBtn.addEventListener('click', function(e){
        e.preventDefault()

        list.removeChild(newItem)
        btnForm.remove(editBtn)
        btnForm.remove(deleteBtn)
        btnForm.remove(updateBtn)
    })
})    
