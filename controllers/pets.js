const Pet = require('../models/pets')
module.exports = app => {
    app.post('/pets', (req, res) => {
        Pet.adiciona(req.body, res)
    })
}
