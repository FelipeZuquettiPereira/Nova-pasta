function consoante_vogal() {

    let letra = prompt("Digite uma letra:");

    if(letra.length !== 1 || !/[a-zA-Z]/.test(letra)) {
        alert("Por favor, digite uma única letra válida.");
        return;
    }

    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        alert("A letra " + letra + " é uma vogal.");
    } else {
        alert("A letra " + letra + " é uma consoante.");
    }
}