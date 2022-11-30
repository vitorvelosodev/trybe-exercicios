let counter = 0;

for (let i = 2; i <= 150; i += 1) {
    if (i % 3 == 0) {
        counter += 1;
    }
}

console.log('Counter ', counter);

if (counter == 50) {
    console.log ('Essa é uma mensagem secreta');
}

