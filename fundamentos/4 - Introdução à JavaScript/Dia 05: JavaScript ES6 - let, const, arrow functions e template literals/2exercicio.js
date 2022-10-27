// 1
let statusMotor = 'desligado';

const acionarMotor = () => (statusMotor == 'desligado' ? statusMotor = 'ligado' : statusMotor = 'desligado');

console.log(`O motor está ${acionarMotor()}`);
console.log(`O motor está ${acionarMotor()}`);
console.log(`O motor está ${acionarMotor()}`);

// 2
const circleArea = (radius) => Math.PI*(radius**2);

console.log(`A área do circuloe é ${circleArea(5)}`);

// 3
let word = 'Antônio foi no banheiro e não sabemos o que aconteceu';

function longestWord(arrayWord) {
    arrayWord = arrayWord.split(' ');
    let len = '';
    for (let i = 0; i < arrayWord.length; i += 1) {
        if (arrayWord[i].length > len.length) {
            len = arrayWord[i];
        }
    }
    return len;
}

console.log(longestWord(word));

// 4

let word2 = 'Antônio foi no banheiro e não sabemos o que aconteceu';
word2.split(' ');

word2.sort();
    
function compareWords(a,b) {
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    return 0;
}

console.log(word2[0]);