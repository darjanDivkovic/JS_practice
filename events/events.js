let button = document.querySelector(".button");


function changeBackgroundColor()
{
    let isBlack = false;
    if(!isBlack){
    document.body.style.background = "black";
    isBlack = true;
};
    if(isBlack){
    document.body.style.background = "white";
    isBlack = false;
    };
};

button.addEventListener("click", changeBackgroundColor);