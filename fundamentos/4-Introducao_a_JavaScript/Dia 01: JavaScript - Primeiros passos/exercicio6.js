const peca = 'CaVal'.toLowerCase();

switch(peca) {
    case 'peao':
        console.log('1 casa para frente ou 2 casas, se esse for seu primeiro movimento no jogo e o jogador quiser');
        break;
    case 'torre':
        console.log('linha reta para frente ou laterais');
        break;
    case 'cavalo':
        console.log('em L, onde o lado menor do L anda uma casa, e o maior, duas');
        break;
    case 'bispo':
        console.log('diagonais');
        break;
    case 'rainha':
        console.log('quantas casas quiser para frente, trás, laterais e diagonais');
        break;
    case 'rei':
        console.log('Uma casa para frente, trás, laterais e diagonais');
        break;
    default:
        console.log('erro');
}