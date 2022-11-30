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

console.log(juntarArrays(products, gosto));