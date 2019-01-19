// Importação do middleware express
const express = require('express');

// Iniciação do middleware express
var app = express();

// Importando do middleware consign
var consign = require('consign');

// Importando do middleware bodyParser
var bodyParser = require('body-parser')

// Apontado para meu middleware express aonde estará localizado minhas views
app.set('view engine', 'ejs');
app.set('views', './views');

// Apontando aonde está meus arquivos estaticos (CSS,JS,IMAGENS)
app.use(express.static('./static'))

// Configurando o middleware BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Carregando o consign
consign()
    .include('./routes')
    .into(app);

// Configurando para escutar na porta 3000
app.listen(3000, function () {
    console.log("Servidor ON")
});