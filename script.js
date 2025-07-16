const startButton = document.getElementById("start_button");
const gifLanding = document.querySelector(".gif");
const questionLanding = document.querySelector(".question");


var question = null;
var gifMain = null;
var yesButton = null;
var noButton = null;
var input = null;
var count = 0;


startButton.addEventListener("click", () => {
    input = document.getElementById("fname").value;

    if (input== ""){
        gifLanding.src = "https://media.tenor.com/KmIZbENMqx4AAAAi/bubu-dudu-sseeyall.gif";
        questionLanding.innerHTML = "Please give  me your name before you start!"
    }
    else{
        document.head.innerHTML = "<meta charset='UTF-8'>"+
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
        "<title>Do July Me?</title>"+
        "<link rel='stylesheet' href='styleMain.css'/>"

        document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Hello "+input+ "! Do July Me?</h2>"+
        "<img class='gif' alt='gif' src='https://media.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif'/>"+
        "<div class='btn-group'><button class='yes-btn'>Yes</button>"+
        "<button class='no-btn'>No</button></div></div>"

        questionMain = document.querySelector(".question");
        gifMain = document.querySelector(".gif");
        yesButton = document.querySelector(".yes-btn");
        noButton = document.querySelector(".no-btn");

        yesButton.addEventListener("click", yesButtonListener);
        noButton.addEventListener("click", noButtonListener);
    }
});

function yesButtonListener(){
    document.body.innerHTML = "<div class='wrapper'><h2 class='question'>I July 2 ❤️ moah moah moah, "+input+ "!</h2>"+
    "<img class='gif' alt='gif' src='https://media1.tenor.com/m/5IwZW7QpyoYAAAAC/love-bubu-dudu.gif'/></div><script src='scriptMain.js'></script>"
    gifMain.src = "https://media1.tenor.com/m/5IwZW7QpyoYAAAAC/love-bubu-dudu.gif";
}

function noButtonListener(){
    if (count < 5) {
        gifMain.src ="https://media1.tenor.com/m/8Hs24bl0z94AAAAC/12.gif";
        questionMain.innerHTML = "Khong thuong chi ha :< (ﾉ▼д▼)ﾉ ~┻━┻ ☆☆`?";
    }
    else if (count >= 5 && count < 10){
        gifMain.src ="https://media.tenor.com/KmIZbENMqx4AAAAi/bubu-dudu-sseeyall.gif";
        questionMain.innerHTML = "Khong thuong thiet luon sao..(╯°□°）╯︵ ┻━┻.";
    }
    else{
        gifMain.src ="https://media.giphy.com/media/8OPf6xrtXi3QEcu5h9/giphy.gif";
        questionMain.innerHTML = "Co thuong hong (┛ಠДಠ)┛彡┻━┻  ";
    }
    const noButtonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - noButtonRect.width;
    const maxY = window.innerHeight - noButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    count = count+1;
}
