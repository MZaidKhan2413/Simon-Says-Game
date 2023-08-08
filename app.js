let startKey = document.querySelector(".start");
let heading = document.querySelector("h2");
let gameSq = [];
let userSq = [];
let level = 0;
let start = true;
let boxList = ["red","yellow","green","blue"];

document.body.addEventListener("keypress",startNewGame);
startKey.addEventListener("click",startNewGame);

function startNewGame(){
    if(start){
        levelUp();
        start = false;
    }
}

let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}
function btnPress(){
    if(start == false){
        let btn = this;
        flash(btn);
        let value = this.getAttribute("id");
        userSq.push(value);
        checkAns(userSq.length-1)
    }
}

function checkAns(idx){
    if(userSq[idx] === gameSq[idx]){
        if(userSq.length == gameSq.length){
            setTimeout(function(){
                userSq = [];
                levelUp();
            },1000)
        }

    }
    else{
        let cont = document.querySelector(".gameContainer");
        cont.classList.add("fail");
        setTimeout(function(){
            cont.classList.remove("fail");
        },250)

        heading.innerText = `Game Over!\nYour Score : ${level}\nPress any key to restart`;
        gameSq = [];
        userSq = [];
        level = 0;
        start = true;
    }
}

function levelUp(){
    level++;
    heading.innerText = `Level ${level}`
    let randIdx = Math.floor(Math.random()*3);
    let randVal = boxList[randIdx];
    let flashBox = document.getElementById(`${randVal}`);
    gameSq.push(randVal);
    flash(flashBox);
    // CHEAT :
    console.log(gameSq);
}

function flash(box){
    box.classList.add("flash");
    setTimeout(function(){
        box.classList.remove("flash")
    },250)
}