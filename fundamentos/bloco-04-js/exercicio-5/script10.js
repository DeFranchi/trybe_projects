const custo = -10 ;
const valor = 20;
const produtos = 1000;

let custoTotal = custo * 1.2;
let lucro = (valor - custoTotal) * produtos

if(custo > 0 && valor > 0 && produtos > 0){
    console.log(lucro)
} else {
    console.log("Error")
}






