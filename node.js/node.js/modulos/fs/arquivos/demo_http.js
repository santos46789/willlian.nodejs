var http = require('http');

//cria um server
http.createServer(function (req, res) {
  res.write('Hello World!'); //exibe uma resposta para o usuario
  res.end(); //finaliza a resposta
}).listen(8080); //hospedado na porta 8080