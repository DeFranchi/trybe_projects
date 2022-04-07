let peca = "BISPO".toLowerCase();

switch (peca){
    case "bispo" :
        console.log("Sua peca é o bispo. Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas."); 
        break;
    case "cavalo" :
        console.log("Sua peca é o cavelo. É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.");
        break;
    case "peão" :
        console.log("Sua peca é o peão. Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.");
        break;
    default:
        case peca :
        console.log("Error")
}




