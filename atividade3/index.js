const cc = require ('./calc_case/calc_case');

const express = require ('express');

const app = express();

app.get('/somar/:a/:b', function(req, res){
    let num = req.params.a;
    let num2 = req.params.b;
    res.send(cc.somar(num, num2));
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("App rodando na porta " + PORT);
});