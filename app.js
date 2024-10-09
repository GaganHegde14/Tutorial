let gameSeq = [];
let userSeq = [];
let btns=["yellow","red","purple","green"];
let started = false;
let level = 0;
let highScore=0;
let h2=document.querySelector("h2");
let highScoreDisplay = document.querySelector("#highScore");

document.addEventListener("keypress", function () {
    if (started == false) {

        console.log("Game Started");
        started = true;

        levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}
function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameFlash(randBtn);
}
function checkAns(idx){ 
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        if(level>highScore){
            highScore=level-1;
            highScoreDisplay.innerText=`High Score: ${highScore}`;
        }
        h2.innerHTML= `Game Over! Your score was <b>${level-1}</b> <br>Press any key to start`; 
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="wheat";
        },200);
        reset();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
let modal = document.getElementById("rulesModal");
let closeBtn = document.querySelector(".close-btn");

window.onload = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};