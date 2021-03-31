const input = document.getElementById('input')
const addBtn = document.getElementById('add-button')
const groceryList = document.getElementById('grocery-list')

// Add and Delete Item
addBtn.addEventListener('click', function(e){
    e.preventDefault()
    
    const groceryItem = document.createElement('li')
    inputValue = document.getElementById('input').value
    groceryItem.textContent = inputValue
    
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'X'
    
    deleteButton.addEventListener("click", function(e){
        e.preventDefault()
        
        groceryList.removeChild(groceryItem)
        groceryItem.removeChild(deleteButton)
    })
    
    groceryItem.appendChild(deleteButton)
    groceryList.append(groceryItem)
})
    
    
