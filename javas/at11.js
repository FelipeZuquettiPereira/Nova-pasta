function folha_pagamento_variavel(){

    let salario = parseFloat(prompt("Digite o salário do funcionário:"));
    let desconto, salario_liquido;

    if (salario <= 1000) {
        desconto = salario * 0.08;
        salario_liquido = salario - desconto;
        alert("Salário bruto: R$ " + salario);
        alert("Desconto aplicado: 8%");
        alert("Valor do desconto: R$ " + desconto);
        alert("Salário líquido: R$ " + salario_liquido);
    }else if(salario > 1000 && salario <= 1500) {
        desconto = salario * 0.085;
        salario_liquido = salario - desconto;
        alert("Salário bruto: R$ " + salario);
        alert("Desconto aplicado: 8.5%");
        alert("Valor do desconto: R$ " + desconto);
        alert("Salário líquido: R$ " + salario_liquido);
    }else {
        desconto = salario * 0.9;
        salario_liquido = salario - desconto;
        alert("Salário bruto: R$ " + salario);
        alert("Desconto aplicado: 9%");
        alert("Valor do desconto: R$ " + desconto);
        alert("Salário líquido: R$ " + salario_liquido);
    }


}