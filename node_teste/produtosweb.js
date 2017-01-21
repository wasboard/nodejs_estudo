
//Bibilioteca de configuração do servidor -> require = trazer função contida no node js 
var http =  require('http');
var server = http.createServer();
server.listen(3000);
console.log('O servidor esta rodando!!!')