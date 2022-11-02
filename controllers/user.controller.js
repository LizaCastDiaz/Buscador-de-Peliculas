const models = require('../models/index')
const userController = {}
userController.getuser = (req, res) => { //cambiamos 
    models.user.findAll()
    .then((resp) => {
        res.send(resp)
    })

}