const gerarNumero = () => {
    const numeroSorteado = ((Math.random() *5) +1);
    return Math.floor(numeroSorteado);
}

const resultadoFinal = (numeroSorteado, callBack) => {
    if (numeroSorteado === callBack()) {
        return "Parabens voce ganhou";
    } else {
        return "Tente novamente";
    }
}
console.log(resultadoFinal(5, gerarNumero));