// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    updateDom();
});

function updateDom() {
   let textElm = document.getElementById("text")
    textElm.textContent = "This is really cool!"
}
