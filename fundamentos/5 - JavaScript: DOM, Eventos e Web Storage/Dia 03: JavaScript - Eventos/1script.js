const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem); // Criação dos dias da semana no topo do calendário
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Dias do mês de dezembro
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Parte 1
const daysOfWeek = document.querySelector('#days');

for (let i = 0; i < decemberDaysList.length; i += 1) {
  let listDays = document.createElement('li');
  listDays.classList.add('day');
  listDays.innerHTML = decemberDaysList[i];
  daysOfWeek.appendChild(listDays);
  // Checks for holidays
  for (let j = 0; j < 2; j += 1) {
    let daysH = 24 + j;
    if (listDays.innerHTML.includes(daysH)) {
      listDays.classList.add('holiday');
    }
  }
  // Checks for Friday
  for (let j = 0; j < 4; j += 1) {
    let daysF = 4 + (7 * j);
    if (listDays.innerHTML == daysF) {
      listDays.classList.add('friday');
    }
  }
}

// Parte 2
let button = document.createElement('button');
let buttonPlace = document.getElementsByClassName('buttons-container')[0];
button.classList.add('btn-holiday');
button.innerHTML = 'Feriados';
buttonPlace.appendChild(button);

// Parte 3
const changeColor = () => {
  let feriados = document.getElementsByClassName('holiday');
  if (feriados[0].style.backgroundColor != 'white') {
    for (let i = 0; i < feriados.length; i += 1) {
      feriados[i].style.backgroundColor = 'white';
    }
  } else {
    for (let i = 0; i < feriados.length; i += 1) {
      feriados[i].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}

button.addEventListener('click', changeColor);

// Parte 4
let buttonFriday = document.createElement('button');
// buttonPlace
buttonFriday.classList.add('btn-friday');
buttonFriday.innerHTML = 'Sexta-feira';
buttonPlace.appendChild(buttonFriday);

// Parte 5
let fridaysNum = [];
// Checks for Friday and store days in array
for (let j = 0; j < 4; j += 1) {
  let daysF = 4 + (7 * j);
  fridaysNum[j] = daysF;
}
// console.log(fridaysNum);

const changeTextFriday = () => {
  let fridays = document.getElementsByClassName('friday');
  if (!(fridays[0].innerHTML.includes('Sextou'))) {
    for (let i = 0; i < fridays.length; i += 1) {
      fridays[i].innerHTML = 'Sextou';
    }
  } else {
    for (let i = 0; i < fridays.length; i += 1) {
      fridays[i].innerHTML = fridaysNum[i];
    }
  }
}

buttonFriday.addEventListener('click', changeTextFriday);

// Parte 6

const zoomIn = () => {
  let day = document.querySelectorAll('.day');
  console.log(day);
  for (let i = 0; i < day.length; i += 1) {
    day[i].addEventListener('mouseover', (event) => {
      event.target.style.transform = 'scale(1.5)';
    });
  }
}

const zoomOut = () => {
  let day = document.querySelectorAll('.day');
  for (let i = 0; i < day.length; i += 1) {
    day[i].addEventListener('mouseout', (event) => {
      event.target.style.transform = 'scale(1)';
    });
  }
}


zoomIn();
zoomOut();

// Parte 7

let divMyTasks = document.getElementsByClassName('my-tasks')[0];

const createTask = (textinside) => {
  let span = document.createElement('span');
  span.classList.add('task');
  span.innerText = textinside;
  divMyTasks.appendChild(span);
}

createTask('cozinhando');

// Parte 8

const createDivTask = (textinside, color) => {
  let divTask = document.createElement('div');
  divTask.classList.add('task');
  divTask.innerText = textinside;
  divTask.classList.add(color);
  // divTask.style.backgroundColor = color;
  divMyTasks.appendChild(divTask);
}

createDivTask('dormir', 'task-bg-color');

// Parte 9

let myTasks = document.getElementsByClassName('task');

const selectClass = (event) => {
  let selectedClass = document.getElementsByClassName('task selected');
  if (selectedClass.length == 0) {
    // console.log('executado selectClass incluindo');
    event.target.className = 'task selected task-bg-color';
  } else {
    // console.log('executado selectClass excluindo');
    event.target.className = 'task task-bg-color';
  }
}

for (let i = 0; i < myTasks.length; i += 1) {
  myTasks[i].addEventListener('click', selectClass);
}

// Parte 10

const setColorFromTask = () => {
  let day = document.querySelectorAll('.day');
  for (let i = 0; i < day.length; i += 1) {
    day[i].addEventListener('click', (event) => {
      event.target.classList.toggle('task-bg-color');
    });
  }
}

setColorFromTask();

// Bonus
let buttonCompromisso = document.querySelector('#btn-add');
let inputField = document.querySelector('#task-input');

function addCompromisso() {
  let localToAdd = document.querySelector('.input-container');
  let newCompromisso = document.createElement('span');
  newCompromisso.classList.add('task');
  newCompromisso.innerHTML = inputField.value;
  localToAdd.appendChild(newCompromisso);
}

buttonCompromisso.addEventListener('click', () => {
  if (inputField.value == '') {
    alert('bota alguma coisa no campo seu animal');
  } else {
    addCompromisso();
  }
});