let a = -1, b = -2, c = 3;

console.log(biggerNumThree(a,b,c));

function soma(a,b) {
  return a + b;
}

function subtracao(a,b) {
  return a - b;
}

function multip(a,b) {
  return a * b;
}

function div(a,b) {
  return a/b;
}

function mod(a,b) {
  return a % b;
}

function biggerNum(a,b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function biggerNumThree(a,b,c) {
  let array = [a, b, c], bigger = -Infinity;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > bigger) {
      bigger = array[i];
    }
  }
  return bigger;
}