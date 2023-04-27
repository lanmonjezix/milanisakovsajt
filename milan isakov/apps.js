let button = document.querySelector(".drop-down")
let list = document.querySelector(".nav-links")

let showList = function(){
    list.classList.toggle('active')
}

button.addEventListener('click',showList)