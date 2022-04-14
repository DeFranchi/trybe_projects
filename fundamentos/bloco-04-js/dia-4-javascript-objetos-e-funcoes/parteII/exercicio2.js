//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maiorIndice(array){
    let max = 0;
    for(let a in array ){
        
    if(array[a] > array[max]){
        max = a;
    }
}
    return max;
}

let test = [2, 3, 6, 7, 10, 1]
console.log(maiorIndice(test))