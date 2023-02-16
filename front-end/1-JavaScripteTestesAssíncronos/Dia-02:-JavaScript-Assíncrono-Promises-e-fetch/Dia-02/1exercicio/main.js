import './style.css'

const btnDog = document.querySelector('#get-dog');
const btnCat = document.querySelector('#get-cat');
const btnSurprise = document.querySelector('#get-surprise');

const animalImg = document.querySelector('#image-animal');

btnDog.addEventListener('click', async () => animalImg.src = await getDog());
btnCat.addEventListener('click', async () => animalImg.src = await getCat());
btnSurprise.addEventListener('click', async () => animalImg.src = await surpriseMe());

async function getDog() {
  const request = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await request.json();
  return dog.message;
}

function getCat() {
  const request = fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => data.file);
  return request;
}

function surpriseMe() {
  const request = Promise.race([getDog(), getCat()]);
  console.log(request);
  return request;
}
