function BalancoFinanceiro(){
    let Gasto = 0;
    let Ganho = 0;
    let Saldo = 0;
    let gasto = 0;
    let ganho = 0;

   for(let i = 1; i < 13; i++){
        let ganho = parseFloat(prompt("Digite o ganho do "+i+"º mês:"));
        let gasto = parseFloat(prompt("Digite o gasto do "+i+"º mês:"));
        
        if( !isNaN(ganho)){
           Ganho += ganho;

        } else{
            alert("Por favor, digite um numero válido");
        }

        if( !isNaN(gasto)){
         
            Gasto += gasto;
        } else{
            alert("Por favor, digite um numero válido");
        }
       
    }

    alert("O Ganho bruto anual foi de: " + Ganho);
    alert("O gasto anual foi de: "+ Gasto);

    Saldo = Ganho - Gasto;

        if(Saldo = 0){
            alert("Sua empresa não obteve lucro nem prejuiso")
        }if(Saldo > 0){
            alert("Sua empresa obteve lucro");

        }else{
            alert("Sua empresa teve prejuiso");
        }

        alert("Seu saldo atual é de "+ Saldo);

}