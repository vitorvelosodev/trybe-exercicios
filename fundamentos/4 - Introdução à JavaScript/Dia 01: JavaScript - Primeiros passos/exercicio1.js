const a = 2;
const b = 3;
let op = 'na';

switch(op) {
    case 'sum':
        console.log(a + b);
        break;
    case 'sub':
        console.log(a - b);
        break;
    case 'multi':
        console.log(a * b);
        break;
    case 'div':
        console.log(a / b);
        break;
    case 'mod':
        console.log(a % b);
        break;
    default:
        console.log('Errou bb ¯\_(ツ)_/¯')
}
