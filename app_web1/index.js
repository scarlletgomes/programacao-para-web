const lc = require('./letter_case/letter_case');

//importando o pacote express
const express = require('express');

// criando aplicação express
const app = express();

app.get('/', function(req, res){
    res.send('Hello Word!');
});

app.get('/upper/:n', function(req, res){
    let word = req.params.n;
    res.send(lc.to_upper(word));
});

app.get('/lower', function(req, res){
    let word = req.params.n;
    res.send(lc.to_lower(word));
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("App rodando na porta " + PORT);
});



