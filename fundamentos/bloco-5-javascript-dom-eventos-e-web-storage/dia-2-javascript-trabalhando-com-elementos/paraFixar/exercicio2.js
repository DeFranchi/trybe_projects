
let inserir = document.querySelector("#pai");
let newbrother = document.createElement('section');
inserir.appendChild(newbrother);

let ondeEsta = document.querySelector("#elementoOndeVoceEsta");
let newChild = document.createElement("section");
ondeEsta.appendChild(newChild);

let primeiroFilho = document.querySelector("#primeiroFilhoDoFilho");
let newChild2 = document.createElement("string");
primeiroFilho.appendChild(newChild2);



let elemento = document.querySelector("#primeiroFilho");
elemento.parentElement.removeChild(elemento);

let elemento2 = document.querySelector("#segundoEUltimoFilhoDoFilho");
elemento2.parentElement.removeChild(elemento2);

let elemento3 = document.querySelector("#terceiroFilho");
elemento3.parentElement.removeChild(elemento3);

let elemento4 = document.querySelector("#quartoEUltimoFilho");
elemento4.parentElement.removeChild(elemento4);
