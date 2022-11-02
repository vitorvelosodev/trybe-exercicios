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
  for (let j = 0; j < 3; j += 1) {
    let daysH = 23 + j;
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

// FOR DEBUGGING
// console.log(buttonPlace);

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
  // FOR DEBUG
  // console.log('executado');
}
// FOR DEBUG
// console.log(document.getElementsByClassName('holiday'));

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
console.log(fridaysNum);

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
  let day = document.querySelector('#days');
  console.log(days);
  day.addEventListener('mouseover', (event) => {
    event.target.style.transform = 'scale(1.5)';
  });
}

const zoomOut = () => {
  let day = document.querySelector('#days');
  console.log(days);
  day.addEventListener('mouseout', (event) => {
    event.target.style.transform = 'scale(1)';
  });
}

zoomIn();
zoomOut();

console.log(document.querySelector('#days'));

// Prof solution
// document.querySelector('#days').addEventListener('mouseenter', zoomIn);
// document.querySelector('#days').addEventListener('mouseleave', zoomOut);

// //
// const dayMouseOver = () => {
//   let days = document.querySelector('#days');
//   days.addEventListener('mouseover', (event) => {
//     event.target.style.fontSize = '30px';
//     event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
//   });
// }
// const dayMouseOut = () => {
//   let days = document.querySelector('#days');
//   days.addEventListener('mouseout', (event) => {
//     event.target.style.fontSize = '20px';
//     event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
//   });
// }

// dayMouseOver();
// dayMouseOut();

// Parte 7

let buttonAdd = document.getElementById('btn-add');
let inputField = document.getElementById('task-input');
let divMyTasks = document.getElementsByClassName('my-tasks')[0];
console.log(inputField.InnetHTML);

const createTask = () => {
  let span = document.createElement('span');
  span.innerText = inputField.value;
  divMyTasks.appendChild(span);
}

buttonAdd.addEventListener('click', createTask);

// Parte 8

const changeColor = (color) => {
  let newElement = document.createElement('div');
  newElement.classList.add('task');
  newElement.style.backgroundColor = color;
  
}