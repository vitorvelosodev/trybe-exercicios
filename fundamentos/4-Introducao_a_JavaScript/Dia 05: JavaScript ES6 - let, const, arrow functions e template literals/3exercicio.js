let word = 'Antônio foi no banheiro e não sabemos o que aconteceu';

word = word.split(' ');

word.sort(function(a,b) {return b.length - a.length});

console.log(word[0]);