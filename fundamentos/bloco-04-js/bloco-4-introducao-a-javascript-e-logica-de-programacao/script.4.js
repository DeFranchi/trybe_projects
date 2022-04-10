let divisores = 0;
let resposta = 0;
for (let number = 1; number <=50; number++){
    let isPrime = true
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
          }
        }
    
    if(isPrime == true){
        resposta = number;
    }  
}

console.log(resposta);