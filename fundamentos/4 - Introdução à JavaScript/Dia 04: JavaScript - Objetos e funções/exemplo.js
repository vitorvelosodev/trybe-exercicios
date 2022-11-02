let a = -1, b = -2, c = 3;

console.log(biggerNumThreeForIn(a,b,c));
console.log(biggerNumThreeNormal(a,b,c));

function biggerNumThreeForIn(a,b,c) {
  let array = [a, b, c], bigger = -Infinity;
  for (let key in array) {

    if (array[key] > bigger) {
      bigger = array[key];
    }

  }
  return bigger;
}

function biggerNumThreeNormal(a,b,c) {
  let array = [a, b, c], bigger = -Infinity;
  for (let i = 0; i < array.length; i += 1) {

    if (array[i] > bigger) {
      bigger = array[i];

    }
    
  }
  return bigger;
}