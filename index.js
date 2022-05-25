const yourChoices = document.querySelectorAll('.choice');
const enemyChoices = document.querySelectorAll('.enemy-choice');
const choices = ["rock","paper","scissors"];

let result = document.getElementById("result");
let enemyScore = document.querySelector('.enemy-score');
let yourScore = document.querySelector('.you-score');



let enemyPoints = 0;
let yourPoints = 0;

const draw = () =>{
    result.innerText = "Draw!";
    result.classList.toggle('draw');
    setTimeout(() => {
        result.classList.toggle('draw');
        result.innerHTML = "";
    }, 1000);
}

const enemyWin = () =>{
    result.innerText = "Enemy Win!";
    result.classList.toggle('lose');
    enemyScore.classList.toggle('lose');
    setTimeout(() => {
        result.classList.toggle('lose');
        enemyScore.classList.toggle('lose');
        result.innerHTML = "";
    }, 1000);
    enemyScore.innerText = ++enemyPoints;
}

const youWin = () =>{
    result.innerText = "You Win!";
    result.classList.toggle('win');
    yourScore.classList.toggle('win');
    setTimeout(() => {
        result.classList.toggle('win');
        yourScore.classList.toggle('win');
        result.innerHTML = "";
    }, 1000);
    yourScore.innerText = ++yourPoints;
}

const revealResult = (enemyPick,yourPick) => {

    //Your Win

    if(enemyPick === 'rock' && yourPick === 'paper'){
        youWin();
    }
    if(enemyPick === 'paper' && yourPick === 'scissors'){
        youWin();
    }
    if(enemyPick === 'scissors' && yourPick === 'rock'){
        youWin();
    }

    //Enemy Win

    if(yourPick === 'rock' && enemyPick === 'paper'){
        enemyWin();
    }
    if(yourPick === 'paper' && enemyPick === 'scissors'){
        enemyWin();
    }
    if(yourPick === 'scissors' && enemyPick === 'rock'){
        enemyWin();
    }

    if(yourPick === enemyPick){
        draw();
    }
}

const unlock = () =>{
    locked = false;
}

let locked = false;

for(let choice of yourChoices){
        choice.addEventListener('click', () =>{
            //Preventing spamming
            if(!locked){
                locked = true;
                setTimeout(unlock,1000);
                let enemyPick = Math.floor(Math.random()*choices.length);
                
                //You
                let yourPick = choice.getAttribute("value");
                choice.classList.add('win');
                setTimeout(() => {
                    choice.classList.remove('win');
                }, 1000);
        

                //Enemy
                enemyChoices[enemyPick].classList.add('win');
                setTimeout(() => {
                    enemyChoices[enemyPick].classList.remove('win');
                }, 1000);
                //Result

                revealResult(choices[enemyPick],yourPick);
            }
        });
    }

