let valor = prompt('Digite o valor do produto');
let total = 0;
let oi = 'Lojas Tabajara';

console.log(oi);

console.log(`Valor do Produto: R$ ${valor}`)

while (valor != 0) {
   let proxValor = prompt('Digite o próximo valor ou 0 para parar');
   let price = parseFloat(proxValor);
   
   if (price === 0) {
    break;
   } total += price;
   console.log(`Valor do Produto: R$ ${price}`);
}

alert("Total: R$ " + total.toFixed(2));
console.log(`Total: R$ ${total.toFixed(2)}`);


while (true) {
  let proxValor = prompt("Dinheiro fornecido:");
  let paid = parseFloat(proxValor);

  if (isNaN(paid)) {
    alert("Valor inválido. Tente novamente.");
    console.log(`O valor recebido foi: R$ ${paid}`)
    continue;
  }

  if (paid < total) {
    alert("O dinheiro fornecido é insuficiente.");
    continue;
  }

  let change = paid - total;
  alert("Troco: R$ " + change.toFixed(2));
  console.log(`O valor recebido foi: R$ ${paid.toFixed(2)}`)
  console.log(`Troco: R$ ${change.toFixed(2)}`)
  break;
};



/* Lojas Tabajara
Produto 1: R$ 2.20
Produto 2: R$ 5.80
Produto 3: R$ 0
Total: R$ 9.00
Dinheiro: R$ 20.00
Troco: R$ 11.00
... */



/* const compra = {
    valor: ""
} 

 const valorProduto = document.getElementById('inputValor'); 
const somar = document.getElementById('somar');
const troco = document.getElementById('troco');


function valor (){
    const compra = {valor: ""};
}

function soma(){
    var valorProduto = parseInt(document.getElementById("inputValor").value);
    var resposta = document.getElementById('resposta');
    var soma='';
  
    for(var count=1; count<=1 ; count++)
     soma += inputValor+" + "+count+" = "+
        inputValor*count+"<br />";
    
    resposta.innerHTML = soma;
  } */























/* const input = document.getElementById('inputNumber');
const button = document.getElementById('submitButton');
const resultado = document.getElementById('resultado');



button.addEventListener('click', function() {

 
  function somarNumeros () {

      let resultadoSoma = 0;
      let numero = parseFloat(document.getElementById(input).value);
    
      while (!isNaN(numero)) {
        resultadoSoma += numero;
        numero = parseFloat(document.getElementById(input).value);
      }
    
      return resultadoSoma();
    }
  });  */
  
 /*  resultado.textContent = `O resultado da soma é: ${somarNumeros()}`; */


/* 
function somaNumeros() {
  let soma = 0;
  let numero = parseFloat(prompt("Digite um número:"));

  while (!isNaN(numero)) {
    soma += numero;
    numero = parseFloat(prompt("Digite outro número (ou digite qualquer outra coisa para parar):"));
  }

  return soma;
}








 */






/* 
let total = 0;

while (true) {
  let input = parseFloat(valorInput);
  
  if (valorEntrada === 0) {
    break;
  }

  total += valorEntrada;
}

alert("Total: R$ " + total.toFixed(2)); 

 */



/* while (true) {
  let input = valorInput;
  let paid = parseFloat(input);

  if (isNaN(paid)) {
    alert("Valor inválido. Tente novamente.");
    continue;
  }

  if (paid < total) {
    alert("O dinheiro fornecido é insuficiente.");
    continue;
  }

  let change = paid - total;
  alert("Troco: R$ " + change.toFixed(2));
  break;
} */
























/* 

 let total = 0;

while (true) {
  let input = prompt("Digite o preço do produto (ou 0 para encerrar):");
  let price = parseFloat(input);

  if (price === 0) {
    break;
  }

  total += price;
}

alert("Total: R$ " + total.toFixed(2));

while (true) {
  let input = prompt("Dinheiro fornecido:");
  let paid = parseFloat(input);

  if (isNaN(paid)) {
    alert("Valor inválido. Tente novamente.");
    continue;
  }

  if (paid < total) {
    alert("O dinheiro fornecido é insuficiente.");
    continue;
  }

  let change = paid - total;
  alert("Troco: R$ " + change.toFixed(2));
  break;
} 


const compra = {
    valor: ""
} 

 const valorProduto = document.getElementById('inputValor'); 
const somar = document.getElementById('somar');
const troco = document.getElementById('troco');


function valor (){
    const compra = {valor: ""};

    
}



function soma(){
    var valorProduto = parseInt(document.getElementById("inputValor").value);
    var resposta = document.getElementById('resposta');
    var soma='';
  
    for(var count=1; count<=1 ; count++)
     soma += inputValor+" + "+count+" = "+
        inputValor*count+"<br />";
    
    resposta.innerHTML = soma;
  }
 */