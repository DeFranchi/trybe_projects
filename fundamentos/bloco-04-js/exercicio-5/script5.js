const primeiroAngulo = 60;
const segundoAngulo = 60;
const terceiroAngulo = 60;
const valorTriangulo = primeiroAngulo + segundoAngulo +terceiroAngulo;

if((valorTriangulo > 180 || valorTriangulo < 180) & valorTriangulo < 0){
    console.log(false);
} else if(valorTriangulo === 180){
    console.log(true);
} else{
    console.log("error")
}



