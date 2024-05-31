window.addEventListener("scroll", function(){
    var header = document.querySelector(header);
    header.classList.toggle("stycky", window.screenY > 20);
})