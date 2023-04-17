"use strict" // Строгий режим

const li = document.createElement('li');
const notRightAnswer = "He верно";
const rightAnswer = "Верно";
const form = document.getElementById("myForm");
const sendResult = document.getElementById("clickMe");
const formData = new FormData(form);
let scoreBool;

const allResult = function(event){
    try{
        event.preventDefault();
        const NUMBER_OF_BUTTONS = document.querySelectorAll(`input[type=radio]:checked`).length; //количество выбранных
        scoreCount(NUMBER_OF_BUTTONS); // Подсчёт очков
        userResult(); // Результат теста
        ol.appendChild(li);
        console.log(Array.from(formData));
        for (let value of formData.values()) {
            console.log(value);
        }
    } catch(error){
        console.log(error);
        alert("Извините, в переданных данных имеется ошибка => check консоль разработчика F12");
    }
}

sendResult.addEventListener("click", allResult);

// const ParseData = function(){
//     // создадим объект FormData и добавим в него данные из формы
//     const formData = new FormData(document.getElementById("myForm"));
// }

const scoreCount = function(NUMBER_OF_BUTTONS){    
    for (let i = 1; i < NUMBER_OF_BUTTONS + 1; i++){
        let score = document.querySelector(`input[name="item${i}"]:checked`);
        let scoreValue = score.value;
        formData.append(`item${i}`, scoreValue);
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
