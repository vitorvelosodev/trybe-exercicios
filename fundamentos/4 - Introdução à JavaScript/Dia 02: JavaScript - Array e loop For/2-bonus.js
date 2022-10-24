let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let aux = 0;

// console.log(numbers + '\n');

for (let i = numbers.length; i >= 1; i -= 1) {
    for (let j = i; j >= 0; j -= 1) {
        if (numbers[i] > numbers[j]){
            aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}

console.log(numbers);