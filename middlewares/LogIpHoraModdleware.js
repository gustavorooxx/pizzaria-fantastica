const fs = require('fs');
const path = require('path')

const LogIpHoraMiddleware = (req, res, next) => {
// var ip = req.ip;
// var data = new Date().toISOString();
// var rota = req.url

let linha = req.ip + " | " + new Date().toISOString() + " | " + req.url + '\n';
//opção usando template string
// let linha = `${req.ip} | ${new Date().toISOString()} | ${req.url}\n`;

//maneira errada
// fs.appendFile('./logs/log.txt', linha)

//maneira correta
//__dirname traz o caminho absoluto que esta sendo executado (a partir da pagina /middlewares ele volta e entra em /logs/log.txt)
fs.appendFileSync(path.join(__dirname,'../logs/log.txt'), linha)

next();
}

module.exports = LogIpHoraMiddleware;