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

console.log(buttonPlace);

