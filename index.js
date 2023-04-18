"use strict" // Строгий режим

//Вывод результата пользователя
const notRightAnswer = "He верно";
const rightAnswer = "Верно";
let scoreBool;

//DOM секция
const li = document.createElement('li');
const div = document.getElementById('content');
const form = document.getElementById('myForm');
const formData = new FormData(form);

const TEST_TEXT = {
    startText: `<h1>Тест на знание английского языка</h1>`,
    test1: `<p>Тест №1</p>
    <p>Как переводиться слово "Theme"?</p>
    <input type="radio" name="item1" id="11" value="0">
    <label for="11">Биноколь</label>
    <input type="radio" name="item1" id="21" value="0">
    <label for="21">Очки</label>
    <input type="radio" name="item1" id="31" value="1">
    <label for="31">Тема</label>
    <input type="radio" name="item1" id="41" value="0">
    <label for="41">Теория</label>`,
    test2: `<p>Тест №2</p>
    <p>Как переводиться слово "World"?</p>
    <input type="radio" name="item2" id="12" value="1">
    <label for="12">Мир</label>
    <input type="radio" name="item2" id="22" value="0">
    <label for="22">Поп ит</label>
    <input type="radio" name="item2" id="32" value="0">
    <label for="32">Компьютер</label>
    <input type="radio" name="item2" id="42" value="0">
    <label for="42">Мем</label>`,
    test3: `<p>Тест №3</p>
    <p>Как переводиться слово "Near"?</p>
    <input type="radio" name="item3" id="13" value="1">
    <label for="13">Рядом</label>
    <input type="radio" name="item3" id="23" value="0">
    <label for="23">Пряник</label>
    <input type="radio" name="item3" id="33" value="0">
    <label for="33">Пончик</label>
    <input type="radio" name="item3" id="43" value="0">
    <label for="43">Тортик</label>`,
    test4: `<p>Тест №4</p>
    <p>Как переводиться слово "Man"?</p>
    <input type="radio" name="item4" id="14" value="1">
    <label for="14">Мужчина</label>
    <input type="radio" name="item4" id="24" value="0">
    <label for="24">Подушка</label>
    <input type="radio" name="item4" id="34" value="0">
    <label for="34">Барбарис</label>
    <input type="radio" name="item4" id="44" value="0">
    <label for="44">Кот</label>`,
    test5: `<p>Тест №5</p>
    <p>Как переводиться слово "Think"?</p>
    <input type="radio" name="item5" id="15" value="0">
    <label for="15">Лампа</label>
    <input type="radio" name="item5" id="25" value="0">
    <label for="25">Ручка</label>
    <input type="radio" name="item5" id="35" value="1">
    <label for="35">Думать</label>
    <input type="radio" name="item5" id="45" value="0">
    <label for="45">Ковёр</label>`,
    test6: `<p>Тест №6</p>
    <p>Как переводиться слово "Way"?</p>
    <input type="radio" name="item6" id="16" value="0">
    <label for="16">Книга</label>
    <input type="radio" name="item6" id="26" value="1">
    <label for="26">Путь</label>
    <input type="radio" name="item6" id="36" value="0">
    <label for="36">Учебник</label>
    <input type="radio" name="item6" id="46" value="0">
    <label for="46">Парта</label>`,
    test7: `<p>Тест №7</p>
    <p>Как переводиться слово "Write"?</p>
    <input type="radio" name="item7" id="17" value="0">
    <label for="17">Золото</label>
    <input type="radio" name="item7" id="27" value="0">
    <label for="27">Наклейка</label>
    <input type="radio" name="item7" id="37" value="0">
    <label for="37">Тетрадь</label>
    <input type="radio" name="item7" id="47" value="1">
    <label for="47">Писать</label>`,
    test8: `<p>Тест №8</p>
    <p>Как переводиться слово "Sound "?</p>
    <input type="radio" name="item8" id="18" value="1">
    <label for="18">Звук</label>
    <input type="radio" name="item8" id="28" value="0">
    <label for="28">Стакан</label>
    <input type="radio" name="item8" id="38" value="0">
    <label for="38">Тумба</label>
    <input type="radio" name="item8" id="48" value="0">
    <label for="48">Диван</label>`,
    test9: `<p>Тест №9</p>
    <p>Как переводиться слово "School"?</p>
    <input type="radio" name="item9" id="19" value="0">
    <label for="19">Стул</label>
    <input type="radio" name="item9" id="29" value="1">
    <label for="29">Школа</label>
    <input type="radio" name="item9" id="39" value="0">
    <label for="39">Дверь</label>
    <input type="radio" name="item9" id="49" value="0">
    <label for="49">Кресло</label>`,
    test10: `<p>Тест №10</p>
    <p>Как переводиться слово "Study"?</p>
    <input type="radio" name="item10" id="10" value="0">
    <label for="10">Свечка</label>
    <input type="radio" name="item10" id="20" value="1">
    <label for="20">Учиться</label>
    <input type="radio" name="item10" id="30" value="0">
    <label for="30">Шкаф</label>
    <input type="radio" name="item10" id="40" value="0">
    <label for="40">Окно</label>`,
    endBr: `<br>`,
    submitButton: `<input type="submit" id="clickMe" class="button" value="Отправить"/>`,
    endResult: `<h1>Результат:</h1><div><ul id="ol"></ul></div>`,
}

// for (const key in TEST_TEXT) {
//     div.innerText = `${TEST_TEXT[key]}`;
// }
for (let value of Object.values(TEST_TEXT)) {
    const divNew = document.createElement("div");
    divNew.classList.add("GodDamn");
    // alert(value); // John, затем 30
    divNew.innerHTML = value;
    div.append(divNew)
}


const sendResult = document.getElementById('clickMe');

const allResult = (event) => {
    try{
        event.preventDefault();
        const NUMBER_OF_BUTTONS = document.querySelectorAll(`input[type=radio]:checked`).length; //количество выбранных
        scoreCount(NUMBER_OF_BUTTONS); // Подсчёт очков
        userResult(); // Результат теста
        ol.appendChild(li);

        console.log(Array.from(formData)); // Вывод в виде массива FormData
        for (let value of formData.values()) { // Вывод в виде объекта FormData
            console.log(value);
        }
    } catch(error){ // Обработчик ошибок
        console.log(error);
        alert("Извините, в переданных данных имеется ошибка => check консоль разработчика F12");
    }
}

sendResult.addEventListener("click", allResult);

const scoreCount = (NUMBER_OF_BUTTONS) => {    
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

const userResult = () => { 
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

// Need for TEXT_TEST

