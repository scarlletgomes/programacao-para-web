/* Implemente uma função com a seguinte assinatura: verificarNumeroPrimo(n);

A função deve verificar se o número "n" recebido é primo e retornar true, caso verdadeiro, ou false caso não seja primo.

No mesmo arquivo, faça a chamada da função para os seguintes casos de teste:

verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false */

function verificarNumeroPrimo(n){

    let cont = 0;
    for(i = 2; i <= n; i++){
       
        if(n % i == 0){
            cont ++;
        } 
     }

        if(cont == 1){
            return true;
            }else{
            return false;
        }
    
};

console.log(verificarNumeroPrimo(0)); 
console.log(verificarNumeroPrimo(1)); 
console.log(verificarNumeroPrimo(2)); 
console.log(verificarNumeroPrimo(3)); 
console.log(verificarNumeroPrimo(7)); 
console.log(verificarNumeroPrimo(83)); 
console.log(verificarNumeroPrimo(100)); 
console.log(verificarNumeroPrimo(991)); 
console.log(verificarNumeroPrimo(104729)); 
console.log(verificarNumeroPrimo(14348907)); 

