function maiorIndice(array){
    let min = 0;
    for(let indice in array ){
        
    if(array[indice] < array[min]){
        min = indice;
    }
}
    return min;
}

let test = [2, 3, 6, 7, 10, 1, -3]
console.log(maiorIndice(test))