"use strict"

let liFirst = document.createElement('li');
let scoreBool;
document.getElementById("clickMe").onclick = function () { 
    let score = document.querySelector('input[name="item"]:checked');
    let scoreValue = score.value;
    switch(scoreValue){
    case "Биноколь": 
        console.log("Не верно, попробуйте ещё раз");
        scoreBool = false;
        liFirst.innerHTML = `<strong> ${scoreValue} </strong> - <a class="a_False">${scoreBool}</a>`;
        ol.prepend(liFirst);
        break;
    case "Очки":
        console.log("Не верно, попробуйте ещё раз");
        scoreBool = false;
        liFirst.innerHTML = `<strong> ${scoreValue} </strong> - <a class="a_False">${scoreBool}</a>`;
        ol.prepend(liFirst);
        break;
    case "Тема": 
        console.log("Верно");
        scoreBool = true;
        liFirst.innerHTML = `<strong> ${scoreValue} </strong> - <a class="a_True">${scoreBool}</a>`;
        ol.prepend(liFirst);
        break;
    case "Теория":
        console.log("Не верно, попробуйте ещё раз");
        scoreBool = false;
        liFirst.innerHTML = `<strong> ${scoreValue} </strong> - <a class="a_False">${scoreBool}</a>`;
        ol.prepend(liFirst);
        break;
    default: 
        console.log("Не знаю таких значений");
        break;
    }
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

