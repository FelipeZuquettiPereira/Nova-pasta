function par_impar() {
    let numero = parseInt(prompt("Digite um número:"));
    let numero_final;

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    numero_final = numero + 1;

    if (numero % 2 === 0) {
        alert("O número " + numero + " é par. O próximo número ímpar é: " + numero_final);
    } else {
        alert("O número " + numero + " é ímpar. O próximo número par é: " + numero_final);
    }
}