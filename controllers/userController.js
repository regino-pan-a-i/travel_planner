const userController = {}


userController.getUsers = async (req, res) => {
    res.send('Here is where you will get all the users')

}


userController.getUser = async (req, res) => {
    res.send('Here is where you will get a single user')

}



module.exports = userController;