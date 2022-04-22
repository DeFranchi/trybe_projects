const input = document.querySelector("#colorTitle")
input.addEventListener('input', change) 

function change(){
    const title = document.querySelector("#title")
    localStorage.setItem('textTitle', input.value )
    title.style.color = localStorage.getItem('textTitle')
   
}


// background color
const item = document.querySelector("#colorBackground")
item.addEventListener('input', changeBackground)

function changeBackground(){
    let body = document.querySelector("body")
    localStorage.setItem('colorBack', item.value)
    body.style.backgroundColor = localStorage.getItem('colorBack')
    
}



// font color
const itemSize = document.querySelector("#font")
itemSize.addEventListener('input', changeSize)

function changeSize(){
    let sizeBody = document.querySelector("body")
    localStorage.setItem('size', itemSize.value)
    sizeBody.style.fontSize = localStorage.getItem('size')
    
}


const itemHeigth = document.querySelector("#line")
itemHeigth.addEventListener('input', changeLine )

function changeLine(){
    let lineBody = document.querySelector("body")
    localStorage.setItem('line', itemHeigth.value)
    lineBody.style.lineHeight = localStorage.getItem('line')
}


const itemType = document.querySelector("#fontType")
itemType.addEventListener('input', changeFontType )

function changeFontType(){
    let fontBody = document.querySelector("body")
    localStorage.setItem('fontType', itemType.value)
    fontBody.style.fontFamily = localStorage.getItem('fontType')
}


function renderization(){
    title.style.color = localStorage.getItem('textTitle')
    body.style.backgroundColor = localStorage.getItem('colorBack')
    sizeBody.style.fontSize = localStorage.getItem('size')
    lineBody.style.lineHeight = localStorage.getItem('line')
    fontBody.style.fontFamily = localStorage.getItem('fontType')
}


window.onload = function(){
    renderization()
}