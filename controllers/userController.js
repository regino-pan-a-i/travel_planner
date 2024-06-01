const mongoose = require('mongoose');
const connect = require('../database/connect')
const User = require('../database/models/user')
const userController = {}


userController.getUsers = async (req, res, next) => {
    try{
        await connect();

        const users = await User.find({});
        res.json(users)
    }
    catch (error){
        const err = new Error("Couldn't get users");
        err.status = 'fail'
        err.statusCode = 500
        next(err)
    }
    finally {
        mongoose.disconnect();
    }

}


userController.getUserById = async (req, res, next) => {
    try{
        await connect();

        const user = await User.findById(req.params.id).exec();
        res.json(user)
    }
    catch (error){
        const err = new Error(error.message);
        err.status = "fail"
        err.statusCode = 500
        next(err)

    }
    finally {
        mongoose.disconnect();
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
        const err = new Error(error.message);
        err.status = "fail"
        err.statusCode = 500
        next(err)

    }
    finally {
        mongoose.disconnect();
    }
}

userController.updateUser = async (req, res) => {
    console.log('Here is where you will update a user')
    try{
        await connect();
        const updatedContact = await User.findByIdAndUpdate(
            { _id: req.params.id },
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            },
            { new: true 
            }
        );
        if (!updatedContact) {
            res.status(404).send('User not found');
        }
        else {
            res.json(updatedContact);
        }
    } 
    catch (error) {
        const err = new Error(error.message);
        err.status = "fail"
        err.statusCode = 500
        next(err)
    }
    finally {
        mongoose.disconnect();
    }
}

userController.deleteUser = async (req, res) => {
    // res.send('Here is where you will delete a user')
    try{
        await connect();
        const contac = await User.findByIdAndDelete(req.params.id);
        if(!contac){
            res.status(404).send('User not found');
        }
        else{
            return res.json({ message: 'User deleted' })
        }
    } 
    catch (error){
        console.log('Error deleting document:', error)
        const err = new Error(error.message);
        err.status = "fail"
        err.statusCode = 500
        next(err)    }
    finally {
        mongoose.disconnect();
    }
}

module.exports = userController;