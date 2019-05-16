const app = require('./src/config/custom-express');

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000!');
});



// Referencia para o modulo node HTTP
// const http = require('http');
// const servidor = http.createServer(function(req, resp) {
    
//     let html = '';
//     if(req.url == '/') {
//         html = "teste";
//     }

//     resp.end(html);
// });
// servidor.listen(3000);

 