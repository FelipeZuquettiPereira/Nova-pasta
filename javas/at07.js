function picole() {
    
let codigo = prompt("a - Chocolate \n b - Morango \n c - Creme \n d - Manga \n e - Melancia \n f - Vanilla Ice \n g - Céu Azul \n h - Brownie \n i - Hawaiano \n Digite o código do sabor (a até i):");

switch (codigo) {
    case 'a':
        alert("Sabor: Chocolate - Preço: R$ 1,50");
        break;
    case 'b':
        alert("Sabor: Morango - Preço: R$ 2,50");
        break;
    case 'c':
        alert("Sabor: Creme - Preço: R$ 2,50");
        break;
    case 'd':
        alert("Sabor: Manga - Preço: R$ 3,20");
        break;
    case 'e':
        alert("Sabor: Melancia - Preço: R$ 3,40");
        break;
    case 'f':
        alert("Sabor: Vanilla Ice - Preço: R$ 3,00");
        break;
    case 'g':
        alert("Sabor: Céu Azul - Preço: R$ 3,60");
        break;
    case 'h':
        alert("Sabor: Brownie - Preço: R$ 4,00");
        break;
    case 'i':
        alert("Sabor: Hawaiano - Preço: R$ 5,00");
        break;
    default:
        alert("Código inválido! Por favor, escolha de 'a' até 'i'.");
}
}