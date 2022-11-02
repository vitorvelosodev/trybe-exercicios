// 1
let nome = 'Viti';

function substituaX(nome) {
    const frase = 'Tryber x aqui!';
    let newPhrase = '';
    for (let i = 0; i < frase.length; i += 1) {
        if (frase[i] == 'x') {
            newPhrase += nome;
        } else {
            newPhrase += frase[i];
        }
    }
    return newPhrase;
}

console.log(substituaX(nome));

// 2

function minhasSkills(nomeSkill) {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let resultado = `${nomeSkill}\nMinhas três habilidades são:\n${fixSkills(skills)}`;
    return resultado;
}

function fixSkills(skills) {
    let j = '';
    for(let i = 0; i < skills.length; i += 1) {
        j += `- ${skills[i]}\n`;
    }
    j = j.slice(0,-1);
    return j;
}

console.log(minhasSkills(substituaX(nome)));