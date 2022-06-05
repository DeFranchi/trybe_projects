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
console.log(fetch)
const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try{ // executa o codigo no escopo do try, e se der erro, o erro é tratado
          // no escopo do cath(error);
  const result = await fetch(url) // promise 
  // usando o await a fetchJoke espera o Fecht temrinal toda sua execucao,
  // ate o ultimo .then() ou .catch(), so para depois executar o console.log.
    .then((response) => response.json()) //converteu para json
    .then((data) => console.log(data.value)) //pegar os values do obj
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`)
  }
}

fetchJoke();

// Algo deu errado :(
// TypeError: Only absolute URLs are supported