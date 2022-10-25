let player1 = 'papel', player2 = 'papel';

let winnerGame = checkWinnerGame(player1,player2);
console.log(decideWinner(winnerGame));

function decideWinner(winnerMove) {
    if (player1 == winnerMove) {
        return 'Player 1 wins';
    } else if (player2 == winnerMove) {
        return 'Player 2 wins';
    } else if (winnerMove == 'tie') {
        return "It's a tie!";
    } else {
        return 'There was an error in the game. Check for player choices if they are correct moves';
    }
};

function checkWinnerGame(p1, p2) {
    const games = [p1, p2];
    if (games.includes('pedra') && games.includes('papel')) { // Checks for pedra and papel
        return 'papel';
    } else if (games.includes('pedra') && games.includes('tesoura')) { // Checks for pedra and tesoura
        return 'pedra';
    } else if (games.includes('papel') && games.includes('tesoura')) { // Checks for papel e tesoura
        return 'tesoura';
    } else if (p1 == p2) {
        return 'tie';
    } else {
        return 'error';
    }
};