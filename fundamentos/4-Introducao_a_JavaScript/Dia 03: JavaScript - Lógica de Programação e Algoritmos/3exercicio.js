const array = ['java', 'javascript', 'python', 'html', 'css'];
let countHigher = 0, countLower = Infinity;

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < countLower) {
        countLower = array[i].length;
    }
    if (array[i].length > countHigher) {
        countHigher = array[i].length;
    }
}

console.log('Maior: ',countHigher,' Menor: ',countLower);