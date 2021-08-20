const { request, response } = require("express");
const express = require("express");
const app = express();
const PORT = 8080;

app.get('/soma/:num1/:num2', (request, response)=>{
    const num1 = request.params.num1;
    const num2 = request.params.num2;
    const resultado = parseFloat(num1)+parseFloat(num2);
    response.send('O resultado é ' + resultado);
})

app.listen(PORT, ()=> {
    console.log('Servidor rodando na porta' +PORT);
})