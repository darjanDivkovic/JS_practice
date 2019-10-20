let a = document.querySelector(".blackbox");
let gluposti = document.querySelector(".gluposti");


function changeColor(){
    a.classList.toggle("blackbox-redbox");
}

function changeText(){
    // napraviti niz nekih izraza
    let niz = [ "Ovo je glupst", "bas glupost", "al uci se"] ; 
    // random broj
    let random = Math.floor(Math.random()*3);
    // Na osnovu randoma uzmi jedno iz niza
    gluposti.textContent = niz[random];
}

 a.addEventListener("click", changeColor);
 a.addEventListener("click", changeText);
 



