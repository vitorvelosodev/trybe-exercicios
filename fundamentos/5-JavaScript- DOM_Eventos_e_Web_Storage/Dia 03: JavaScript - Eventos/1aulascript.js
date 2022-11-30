const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Classe CSS dela é tech, que possui um translateY

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// OK

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
// OK

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
// OK

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
firstLi.addEventListener('click', addClassTech);
secondLi.addEventListener('click', addClassTech);
thirdLi.addEventListener('click', addClassTech);

input.addEventListener('change',editText);

myWebpage.addEventListener('dblclick', changeAddress);

myWebpage.addEventListener('mouseenter', changeColorRed);
myWebpage.addEventListener('mouseleave', changeColorWhite)

function addClassTech (event1) {
  document.querySelector('.tech').classList.remove('tech');
  event1.target.classList.add('tech');
}

function editText (event1) {
  document.querySelector('.tech').innerHTML = document.getElementById("input").value;
}

function changeAddress (event1) {
  location.href = 'https://vitorvelosodev.github.io';
}

function changeColorRed (event1) {
  event1.target.style.color = 'green';
}

function changeColorWhite (event1) {
  event1.target.style.color = 'white';
}

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.