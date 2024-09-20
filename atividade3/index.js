const calc = require ('./util/calculadora');

const express = require ('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Atividade3 - APP Calculadora");
});

app.get('/somar/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let result = calc.somar(a, b);
    res.send(`A soma entre ${a} e ${b} é ${result}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let result = calc.subtrair(a, b);
    res.send(`A subtração entre ${a} e ${b} é ${result}`);
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let result = calc.multiplicar(a, b);
    res.send(`A multiplição entre ${a} e ${b} é ${result}`);
});

app.get('/dividir/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let result = calc.dividir(a, b);
    res.send(`A divisão entre ${a} e ${b} é ${result}`);
});


const PORT = 8080;
//colocar a inicialização da aplicação
app.listen(PORT, ()=>{
    console.log("App rodando na porta " + PORT);
});