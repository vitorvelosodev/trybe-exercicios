const basket = [
'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
'Banana', 'Pera', 'Abacate', 'Uva',
];

let objFrutas = {
};

for (let i = 0; i < basket.length; i += 1) {
    if (objFrutas[basket[i]] == undefined) {
        objFrutas[basket[i]] = 1;
    } else {
        objFrutas[basket[i]] += 1;
    }
}

console.log(objFrutas);
console.log('Sua cesta possui ',objFrutas.Melancia,' ',Object.keys(objFrutas)[0],', ',objFrutas.Abacate,' ',Object.keys(objFrutas)[1],'...');