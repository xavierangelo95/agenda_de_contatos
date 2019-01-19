module.exports = function (app){

    app.get('/registrarUsuario', function (req, res) {
        res.render('registrarUsuario')
    });

    app.get('/validarLogin', function (req, res) {
        res.render('agenda')
    });

    app.get('/recuperaUsuario', function (req, res) {
        res.render('recuperaUsuario')
    });


}