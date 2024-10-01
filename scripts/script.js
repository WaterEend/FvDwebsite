// JavaScript Document
const menu = document.querySelector("ul");
const button = document.getElementById("menuIcon");

let rotation = 0;
let rotateInterval;
let horizontal = true;

function rotate() {
    rotateInterval = setInterval(rotate, 2);
    function rotate() {
        if (horizontal === true) {   
            button.style.transform = `rotate(${rotation}deg)`   
            rotation += 1
            button.style.pointerEvents = "none"
            if (rotation >= 90) {
                menu.style.visibility = "visible";
                button.style.transform = "rotate(90deg)"
                clearInterval(rotateInterval)
                horizontal = false;
                button.style.pointerEvents = "all"
            }
        } else { 
            button.style.transform = `rotate(${rotation}deg)`   
            rotation -= 1
            button.style.pointerEvents = "none"
            if (rotation <= 0) {
                menu.style.visibility = "hidden";
                button.style.transform = "rotate(0deg)"
                clearInterval(rotateInterval)
                horizontal = true;
                button.style.pointerEvents = "all"
            }
        }
    };
}

// function hamburger() {
//     if (menu.style.visibility === "hidden") {
//     menu.style.visibility = "visible";
//     } else {
//         menu.style.visibility = "hidden";
//     }
// }

button.addEventListener("click", rotate);

