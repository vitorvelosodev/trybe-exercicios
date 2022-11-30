const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((nome, i) => {
  pessoasAprovadas[i] = nome.toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
});

console.log(pessoasAprovadas); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']

// --------------------------

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

function teste(email) {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
}

emailListInData.forEach((email) => teste(email));

// ---------------------------

const numbers = [19, 21, 30, 3, 45, 22, 15];

console.log(numbers.find((num) => num % 3 === 0 && num % 5 === 0));

// --------------------------

const names = ['João', 'Irene', 'Fernando', 'Maria'];

console.log(names.find((nome) => nome.length === 5));

// --------------------------

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const n = musicas.find((element) => Object.values(element)[0] === '31031685');
console.log(n);

// --------------------------

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((item) => item === name);

console.log(hasName(names2, 'Ana'));
console.log(hasName(names2, 'Pedro'));

// --------------------------

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minAge) => arr.every((element) => element.age >= minAge);

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));