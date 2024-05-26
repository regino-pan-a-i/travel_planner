const connect = require('../database/connect')
const User = require('../database/models/user')
const userController = {}


userController.getUsers = async (req, res) => {
    try{
        await connect();

        const users = await User.find({});
        res.json(users)
    }
    catch (error){
        res.status(500).json({ message: error.message });

    }

}


userController.getUserById = async (req, res) => {
    try{
        await connect();

        const user = await User.findById(req.params.id).exec();
        res.json(user)
    }
    catch (error){
        res.status(500).json({ message: error.message });

    }

}

userController.createUser = async (req, res) => {
    try{
        await connect();
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })

        const savedUser = await user.save();    
        res.status(201).send(`This is the ID for the new user: ${savedUser._id}`);
    }
    catch (error){
        res.status(400).json({ message: error.message });

    }
}

userController.updateUser = async (req, res) => {
    res.send('Here is where you will update a user')
}

userController.deleteUser = async (req, res) => {
    res.send('Here is where you will delete a user')
}

module.exports = userController;