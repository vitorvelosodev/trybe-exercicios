let input = 10;

for (let i = (input - 1); i > 1; i -= 1) {
    console.log('input = ',input,' i = ',i);
    input *= i;
}

console.log(input);