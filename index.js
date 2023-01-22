const button = document.getElementById("viewFull")
const button2 = document.getElementById("x")
const element = document.getElementById("popupthing")
element.style.display = "none"

button.addEventListener("click", function(){
    element.style.display = "unset"
});

button2.addEventListener("click", function(){
    element.style.display = "none"
});