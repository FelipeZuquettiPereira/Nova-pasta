function folha_pagamento(){
    let nome = prompt("Digite o nome do funcionário:");
    let salario = parseFloat(prompt("Digite o salário do funcionário:"));
    let desconto = salario * 0.10;
    let salario_liquido = salario - desconto;
    alert("Funcionário: " + nome);
    alert("O desconto aplicado é de: " + desconto);
    alert("O salário líquido do funcionário é: " + salario_liquido);
}