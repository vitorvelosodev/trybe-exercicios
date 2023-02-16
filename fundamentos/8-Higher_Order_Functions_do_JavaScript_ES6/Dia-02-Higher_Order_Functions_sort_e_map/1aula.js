const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Mateus', age: 19 },
  { name: 'Mateus', age: 18 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.name.localeCompare(b.name) || a.age - b.age);

console.log(people);

// ----------------------

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const gosto = ['bom', 'ruim', 'mais ou menos', 'ruim pra enxaqueca'];

function juntarArrays(comida, gosto) {
  return comida.map((element, i) => {
    return { [element]: gosto[i]};
  });
}

console.log(updateProducts(products, gosto));

// const listProducts = updateProducts(products, prices);
// console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]
