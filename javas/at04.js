function decrescente() {
    
    let numeros = [];

    for (let i = 0; i < 4; i++) {
        let numero = parseFloat(prompt("Digite o " + (i + 1) + "º número:"));
        numeros.push(numero);
    }

    // Ordenar em ordem decrescente
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3 - i; j++) {
            if (numeros[j] < numeros[j + 1]) {
                let extra = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = extra;
            }
        }
    }

    alert("A ordem decrescente dos números é: " + numeros.join(", "));
}