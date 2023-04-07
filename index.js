"use strict"

let liFirst = document.createElement('li');
let scoreBool;
let i = 1;

let notRightAnswer = "He верно";
let rightAnswer = "Верно";

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 

document.getElementById("clickMe").onclick = function () { 
    form.addEventListener('submit', handleForm);
    for (i = 1; i < 11; i++){
        let score = document.querySelector(`input[name="item${i}"]:checked`);
        let scoreValue = score.value;
        if (user.step < 10){
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
        scoreBool = "Ещё стоит подучитьcя";
        liFirst.innerHTML = `<strong> ${user.scores} </strong> - <a class="a_False">${scoreBool}</a>`;
    }
    else{
        scoreBool = "Крутой";
        liFirst.innerHTML = `<strong> ${user.scores} </strong> - <a class="a_True">${scoreBool}</a>`;
    }
    ol.prepend(liFirst);
}

let user = {
    scores: 0,
    step: 0,
    upStepRight() {
        this.step++;
        this.scores++;
    },
    upStepNotRight() {
        this.step++;
    },
    showStep: function() { // показывает текущий уровень вопроса
      console.log("Шаг: " + this.step);
      console.log("Очки: " + this.scores);
      console.log("--------------------------------------");
    }
};



