"use strict" // Делаем код строгим

const li = document.createElement('li');
const notRightAnswer = "He верно";
const rightAnswer = "Верно";
const form = document.getElementById("myForm");
let scoreBool;

document.getElementById("clickMe").onclick = function () { 
    const NUMBER_OF_BUTTONS = document.querySelectorAll(`input[type=radio]:checked`).length; 
    form.addEventListener('submit', handleForm);
    scoreCount(NUMBER_OF_BUTTONS);
    userResult();
    ol.appendChild(li);
}

const scoreCount = function(NUMBER_OF_BUTTONS){    //function expression
    for (let i = 1; i < NUMBER_OF_BUTTONS + 1; i++){
        let score = document.querySelector(`input[name="item${i}"]:checked`);
        let scoreValue = score.value;
        if (user.step < NUMBER_OF_BUTTONS){
            switch(scoreValue){
            case "1": 
                console.log(rightAnswer);
                user.upStepRight();
                user.showStep();
                break;
            case "0":
                console.log(notRightAnswer);
                user.upStepNotRight();
                user.showStep();
                break;
            default: 
                console.log("He знаю таких значений");
                user.showStep();
                break;
            }
        }
    }
}

const userResult = function(){    //function expression
    if (user.scores <= 4){
        scoreBool = "Ещё стоит подучиться";
        li.innerHTML = `<strong> ${user.scores} </strong> - <a class="a_False">${scoreBool}</a>`;
    }
    else{
        scoreBool = "Крутой";
        li.innerHTML = `<strong> ${user.scores} </strong> - <a class="a_True">${scoreBool}</a>`;
    } 
}

let user = {    // Компонент очков и шагов пользователя
    scores: 0,
    step: 0,
    upStepRight() {
        user.step++;
        user.scores++;
    },
    upStepNotRight() {
        user.step++;
    },
    showStep: function() {    // Показывает текущий уровень вопроса
      console.log("Шаг: " + user.step);
      console.log("Очки: " + user.scores);
      console.log("--------------------------------------");
    }
};

function handleForm(event) { event.preventDefault(); }    //function declaration

