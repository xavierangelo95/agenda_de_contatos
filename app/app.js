// Importação do 'servidor' express
const express = require('express');

// Iniciação do 'servidor' express
var app = express();

// Importando o consign
var consign = require('consign');

// Apontado para meu 'servidor' express aonde estará localizado minhas views
app.set('view engine', 'ejs');
app.set('views', './views');

// Apontando aonde está meus arquivos estaticos (CSS,JS,IMAGENS)
app.use(express.static('./static'))

consign()
    .include('./routes')
    .into(app);


// Configurando para escutar na porta 3000
app.listen(3000, function () {
    console.log("Servidor ON")
});