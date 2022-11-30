const valorCusto = -100, valorVenda = 150;

if (valorCusto < 0 || valorVenda < 0) {
    console.log('erro');
    return 1;
}

let lucro = valorVenda - ((valorCusto*0.2) + valorCusto);

console.log(lucro);