"use strict" // Делаем код строгим

const li = document.createElement('li');
const notRightAnswer = "He верно";
const rightAnswer = "Верно";
const form = document.getElementById("myForm");
let scoreBool;

document.getElementById("clickMe").onclick = function () { 
    const NUMBER_OF_BUTTONS = document.querySelectorAll(`input[type=radio]:checked`).length; //10
    form.addEventListener('submit', handleForm);
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
    if (user.scores <= 4){
        scoreBool = "Ещё стоит подучиться";
        li.innerHTML = `<strong> ${user.scores} </strong> - <a class="a_False">${scoreBool}</a>`;
    }
    else{
        scoreBool = "Крутой";
        li.innerHTML = `<strong> ${user.scores} </strong> - <a class="a_True">${scoreBool}</a>`;
    }
    ol.appendChild(li);
}

let user = { // Компонент очков и шагов пользователя
    scores: 0,
    step: 0,
    upStepRight() {
        this.step++;
        this.scores++;
    },
    upStepNotRight() {
        this.step++;
    },
    showStep: function() { // Показывает текущий уровень вопроса
      console.log("Шаг: " + this.step);
      console.log("Очки: " + this.scores);
      console.log("--------------------------------------");
    }
};

function handleForm(event) { event.preventDefault(); } 

