const newEmployees = () => {
  const employees = {
    id1: generateEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const generateEmail = (name) => {
  name = name.replace(' ','_');
  name = name.toLowerCase();
  name += '@trybe.com';
  return name;
};

console.log(newEmployees());

// -----------------------------------

const checkNum = (game, win) => game.every((element) => element === win);

const lottery = (game, checkNum) => {
  const resultNum = Math.floor(Math.random()*6);
  if (checkNum(game, resultNum)) {
    return 'Parabéns, você ganhou';
  }
  return 'Tente novamente';
}

console.log(lottery([5], checkNum));

// -----------------------------------

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compare = (correct, answer) => {
  let result = 0;
  correct.forEach((element, i) => {
    if (element === answer[i]) {
      result += 1;
      console.log(`Correto - Parcial: ${result}`);
    } else if (answer[i] === 'N.A') {
      result = result;
      console.log(`NA - Parcial: ${result}`);
    } else {
      result -= 0.5
      console.log(`Errado - Parcial: ${result}`);
    }
  });
  return result;
};

const compultResult = (correct, answer, compare) => {
  return compare(correct, answer);
}

console.log(compultResult(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));