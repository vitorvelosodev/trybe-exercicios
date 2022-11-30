let word = 'tryber', final;
const reverso = [];

for (let i = word.length - 1; i >= 0; i -= 1) {
    reverso.push(word[i]);
}
final = reverso.join('');

console.log(final);