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

// 1 -
const person1947 = books.find((e) => e.author.birthYear === 1947);
console.log(person1947.author.name);

// 2 -
const expectedResult = 'Duna';
const smallerName = () => {
  let nameBook;
  books.forEach((e) => {
    if (nameBook > e.name.length || nameBook === undefined) {
      nameBook = e.name.length;
    }
  })
  return nameBook;
}
console.log(books.find((e) => e.name.length === smallerName()));

// 3 -
console.log(books.find((e) => e.name.length === 26));

// 4 -
// const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((e) => e.author.birthYear > 1900 && e.author.birthYear < 2001);
}

console.log(everyoneWasBornOnSecXX());

// 5 -
// const expectedResult = true;

const someBookWasReleaseOnThe80s = () => books.some((e) => e.releaseYear > 1979 && e.releaseYear < 1990);
console.log(someBookWasReleaseOnThe80s());

// 6 -
// const expectedResult = false;

function authorUnique() {
  let result;
  for (let i = 0; i < books.length; i += 1) {
    result = !books.find((e) => books[i].author.birthYear === e.author.birthYear);
    if (result === false) {
      return false;
    }
  }
  return true;
}

console.log(authorUnique());

function dataNiverUnica() {
  let result = false;
  books.forEach((element, i, books) => {
    for (let j = 0; j < books.length; j += 1) {
      if (i !== j && element.author.birthYear === books[j].author.birthYear) {
        result = true
      }
    };
  });
  return result;
}

console.log(dataNiverUnica());