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
    document.body.innerHTML = "<div class='wrapper'><h2 class='question'>Thuong em be "+input+ "❤️ moah moah moah!!!</h2>"+
    "<img class='gif' alt='gif' src='https://media.tenor.com/n498jDI-rkcAAAAi/tkthao219-bubududu.gif'/></div><script src='scriptMain.js'></script>"
    gifMain.src = "https://media.tenor.com/n498jDI-rkcAAAAi/tkthao219-bubududu.gif";
}

function noButtonListener(){
    if (count < 5) {
        gifMain.src ="https://media.giphy.com/media/hbOgjMOUfLdWV2Ty1j/giphy.gif";
        questionMain.innerHTML = "Coa thuong chi khong ha :< (ﾉ▼д▼)ﾉ ~┻━┻ ☆☆`?";
    }
    else if (count >= 5 && count < 7){
        gifMain.src ="https://media.giphy.com/media/QuCslOrnS649PSCnn7/giphy.gif";
        questionMain.innerHTML = "Coa thuong hooongggg??..(╯°□°）╯︵ ┻━┻.";
    }
    else{
        gifMain.src ="https://media.tenor.com/ReBl4xeYqHcAAAA1/tkthao219-quby.webp";
        questionMain.innerHTML = "Sao ma van con tiep tuc bam 'No' dzi ha (┛ಠДಠ)┛彡┻━┻  ";
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
