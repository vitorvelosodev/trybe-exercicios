let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = i-1; j < i; j += 1) {
        array.push(numbers[i] * numbers[j]); 
    }
}

array.push(numbers[numbers.length-1]*2);

console.log(array);