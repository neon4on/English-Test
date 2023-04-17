"use strict"

const {form} = document.forms;

function damn(event){
    event.preventDefault();

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    console.log('>>', values);
}



form.addEventListener("submit", damn);