let n = 21;

if (n <= 1) {
  return 1;
}

trianguloVazado(n);

function quadrado(n) {
  let array = [];
  for (let i = 0; i < n; i += 1) {
    array.push('*');
  }

  for (let i = 0; i < n; i += 1) {
    console.log(array.join(''));
  }
  return;
};

function trianguloDir(n) {
    let array = [];
    for (let i = 0; i < n; i += 1) {
      array.push('*');
      console.log(array.join(''));
    }
};

function trianguloEsq(n) {
    for (let i = 0; i < n; i += 1) {
      array = []; // reset array
      for (let j = 0; j < (n - i - 1); j += 1) {
        array.push(' ');
      }
      for (let j = 0; j <= i; j += 1) {
        array.push('*');
      }
      console.log(array.join(''));
    }
};

function trianguloCheio(n) {
    if (n % 2 == 0) {
      return 1;
    }

    let spaces = Math.floor(n/2);

    for (let i = 1; i <= n; i += 2) { // spaces + 1 = height // i = lines
      array = []; // reset array
      for (let j = 0; j < spaces; j += 1) { // first three spaces
        array.push(' ');
      }
      for (let k = 0; k < i; k += 1) { // prints *
        array.push('*');
      }
      spaces -= 1;
      console.log(array.join(''));
    }
};

function trianguloVazado(n) {
  if (n % 2 == 0) {
    return 1;
  }

  let spaces = Math.floor(n/2);

  for (let i = 1; i <= n; i += 2) { // spaces + 1 = height // i = lines
    array = []; // reset array
    for (let j = 0; j < spaces; j += 1) { // first three spaces
      array.push(' ');
    }
    
    if (i == 1) {
      array.push('*'); // prints * for first line
    } else if (i == n) {
      for (let k = 0; k < n; k += 1) {
          array.push('*');  // prints * for last line
      }
    } else { // conditions for lines in between
      array.push('*'); // prints *
      for (let k = 1; k <= i - 2; k += 1) { // prints spaces inside
          array.push(' ');
      }
      array.push('*'); // prints *
    }
    spaces -= 1;
    console.log(array.join(''));
  }

        
};

