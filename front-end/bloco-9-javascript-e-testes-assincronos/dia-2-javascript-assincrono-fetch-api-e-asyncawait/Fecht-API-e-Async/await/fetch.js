// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//   .then((response) => response.json()) // o argumento da funcao intertna de um, sera o retorno do anterior.
//   .then((data) => console.log(data.value));

// }

// fetchJoke();
// // o then(), espera a reposta do fecth(), ou o then() anterior ser concluida para comecar sua execucao.

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url) // promise 
    .then((response) => response.json()) //converteu para json
    .then((data) => console.log(data.value)) //pegar os values do obj
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :(
// TypeError: Only absolute URLs are supported