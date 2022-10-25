let n = 7;

if (n <= 1) {
    return 1;
}

trianguloCheio(n);

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
        for (let j = 0; j < spaces + 1 - i; j += 1) { // first three spaces
            array.push(' ');
        }
        for (let k = 0; k < i; k += 1) { // prints *
            array.push('*');
        }
    }
}

//    *    *1 = 1   espaços = altura - 1 de cada lado
//   ***    *2 = *1 + 2
//  *****   *3 = *2 + 2
// *******

//   *  
//  ***
// *****