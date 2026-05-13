function variaveis() {

    let numero1, numero2, diferenca = 0, dobro, triplo, dobroTriplo;

    numero1 = parseFloat(prompt("Digite o primeiro número:"));
    numero2 = parseFloat(prompt("Digite o segundo número:"));

    if(numero1 >= numero2) {
        diferenca = numero1 - numero2;
    }else if(numero1 < numero2) {
        diferenca = numero2 - numero1;
    }

    alert("A diferença entre os números é: " + diferenca);

    dobro = numero1 * 2;
    triplo = numero2 * 3;
    dobroTriplo = dobro + triplo;

    alert("A soma do dobro do primeiro numero e o triplo do segundo é de: " + dobroTriplo);

    multiplicacao = numero1 * numero2;

    alert("A multiplicação dos dois números é de: " + multiplicacao);
}