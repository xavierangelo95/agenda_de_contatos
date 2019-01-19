module.exports = function (app) {

    app.post('/registrarContato', function (req, res) {
        console.log(req)
        res.send(req.body);
    })
}