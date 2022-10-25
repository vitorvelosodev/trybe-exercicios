let n = 5;

if (n <= 1) {
    return 1;
}

quadrado(n);

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
        
    }
};