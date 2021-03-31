var form = document["my-form"]
form.box.style.width = "500px"
form.box.style.height = "500px"
form.box.style.border = "5px solid black"

form.box.addEventListener("mouseover", function(e){
    e.preventDefault()
    
    form.box.style.backgroundColor = "blue"
})

form.box.addEventListener("mousedown", function (e){
    form.box.style.backgroundColor = "red"
})

form.box.addEventListener("mouseup", function(e){
    form.box.style.backgroundColor = "yellow"
})

window.addEventListener("scroll", function(e){
    form.box.style.backgroundColor = 'green'
})

form.box.addEventListener("dblclick", function(e){
    form.box.style.backgroundColor = "purple"
})

window.addEventListener("keydown", function(e){
    e.preventDefault()
    let value = e.key
    if (value === "r"){
        console.log(value)
        form.box.style.backgroundColor = "red"
    } else if (value === "y"){
        form.box.style.backgroundColor = "yellow"
    } else {
        form.box.style.backgroundColor = "white"
    }
})