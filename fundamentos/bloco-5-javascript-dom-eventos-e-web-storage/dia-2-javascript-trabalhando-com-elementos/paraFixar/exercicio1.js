

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById("primeiroFilhoDoFilho").innerText = "testestes"; //adicionar um texto

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let ondeEsta = document.querySelector("#elementoOndeVoceEsta ").parentNode ;//acessar elemento
ondeEsta.style.backgroundColor = "red"; // adicionar cor

//Acesse o primeiroFilho a partir de pai .
document.querySelector('#pai').firstElementChild; //retorna o primeiro elemento filho.

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').previousElementSibling; // retorna o elemento anterior

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').nextSibling; // retorna o proximo nó

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').nextElementSibling // retorna o ultimo elemento filho

//Agora acesse o terceiroFilho a partir de pai .
document.querySelector('#pai').lastElementChild.previousElementSibling;


