var menuBtn = document.querySelector(".menu-btn");
var elHeader = document.querySelector(".site-header");


menuBtn.addEventListener("click", function(){
    elHeader.classList.toggle("open")
})