let notas = [5, 8.5, "7", false];

notas[4] = true;

console.log(notas);

//tamanho array
console.log(notas.length);

for(let i = 0; i<notas.length; i++){
    //estrutura de controle - condição
    if(typeof notas[i] == 'number'){
        if(notas[i]>= 7){
            console.log("Aprovado");

        }
        else console.log('Reprovado');
    }
    else console.log("Nota invalida")

    

}

//Declarar matriz 
let A = [
    [2,1,0],
    [0,1,0],
    [1,2,1]
];

console.log(A[1][2]);

let capitais = {
    DF: 'Brasília',
    DF_DDD: 61,
    BA: 'Salvador',
    BA_DDD: 71
};

console.log(capitais.DF);

for (const key in capitais) {
    
        const valor = capitais[key];
        console.log(key + ' - ' + valor);
    
}

function verificarNumeroPar(n){
    if( n% 2 == 0 ){
        return true;
    }else{
        return false;
    }
}

console.log(verificarNumeroPar(2)); 
console.log(verificarNumeroPar(3));  