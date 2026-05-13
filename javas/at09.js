function criacao_variavel() {
  let numero = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  let numero2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  let extra = 0;

  if (numero > numero2) {
    alert("Os numeros gerdos são: " + numero + " e " + numero2);
  } else{
    alert("Os numeros gerdos são: " + numero2 + " e " + numero);
  }
  
}
