var form = document["my-form"]
form.box.style.width = "500px"
form.box.style.height = "500px"
form.box.style.border = "5px solid black"

form.box.addEventListener("mouseover", function(e){
    e.preventDefault()
    
    form.box.style.backgroundColor = "blue"
})

form.box.addEventListener("mouseout", function(e){
    form.box.style.backgroundColor = "white"
})

form.box.addEventListener("mousedown", function (e){
    form.box.style.backgroundColor = "red"

})

form.box.addEventListener("mouseup", function(e){
    form.box.style.backgroundColor = "yellow"
})

form.box.addEventListener("scroll", function(e){
    document.style.backgroundColor = "orange"
})