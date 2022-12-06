const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 1
const ex1 = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
console.log(ex1);

// 2
const ex2 = books.filter((book) => 2022 - book.releaseYear > 60);
ex2.sort((a, b) => a.releaseYear - b.releaseYear);
console.log(ex2);

// 3
const ex3 = books.filter((book) => book.author.birthYear === 1920).map((element) => element.name);
console.log(ex3);

// 4
const ex4 = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((element) => element.author.name).sort((a, b) => a.localeCompare(b));
console.log(ex4);

// 5
const ex5 = books.filter((book) => 2022 - book.releaseYear > 60).map((element) => element.name);
console.log(ex5);

// 6
const reg = /[a-zA-z]\.\s[a-zA-z]\.\s[a-zA-z]\.\s/;
const ex6 = books.find((person) => reg.test(person.author.name));
console.log(ex6.name);