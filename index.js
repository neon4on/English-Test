"use strict" // Строгий режим

const li = document.createElement('li');
const notRightAnswer = "He верно";
const rightAnswer = "Верно";
const form = document.getElementById("myForm");
const sendResult = document.getElementById("clickMe");
let scoreBool;

const allResult = function(){
    try{
        const NUMBER_OF_BUTTONS = document.querySelectorAll(`input[type=radio]:checked`).length; 
        form.addEventListener('submit', handleForm);
        scoreCount(NUMBER_OF_BUTTONS);
        userResult();
        ol.appendChild(li);
    } catch(error){
        console.log(error);
        alert("Извините, в переданных данных имеется ошибка => check консоль разработчика F12");
    }
}

sendResult.addEventListener("click", allResult);

const scoreCount = function(NUMBER_OF_BUTTONS){    
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

const userResult = function(){ 
    if (user.scores <= 4){
        scoreBool = "Ещё стоит подучиться";
        li.innerHTML = `<strong> ${user.scores} </strong> - <a class="a_False">${scoreBool}</a>`;
    }
    else{
        scoreBool = "Крутой";
        li.innerHTML = `<strong> ${user.scores} </strong> - <a class="a_True">${scoreBool}</a>`;
    } 
}

const user = {    // Компонент очков и шагов пользователя
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

const handleForm = function(event){
    event.preventDefault();
}

