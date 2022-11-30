let perc = 1000;

if (perc > 100 || perc < 0) {
    console.log('Erro');
} else if (perc >= 90) {
    console.log('A');
} else if (perc >= 80) {
    console.log('B');
} else if (perc >= 70) {
    console.log('C');
} else if (perc >= 60) {
    console.log('D');
} else if (perc >= 50) {
    console.log('E');
} else {
    console.log('F');
}