const connect = require('../database/connect')
const mongoose = require('mongoose');
const Travel = require('../database/models/travel')
const travelController = {}


travelController.getTravels = async (req, res, next) => {
    try{
        await connect();

        const travels = await Travel.find({});
        res.json(travels)
        
    } catch(error){
        const err = new Error(error.message);
        err.status = "fail"
        err.statusCode = 500
        next(err)

    }
    finally {
        mongoose.disconnect();
    }
}


travelController.getTravelById = async (req, res) => {
    try{
        await connect();

        const travels = await Travel.findById(req.params.id).exec();
        res.json(travels)
        
    } catch(error){
        const err = new Error(error.message);
        err.status = "fail"
        err.statusCode = 500
        next(err)

    }
    finally {
        mongoose.disconnect();
    }

}

travelController.createTravel = async (req, res, next) => {
    try{
        await connect();
        const travel = new Travel({
            destination: req.body.destination,
            transportation: req.body.transportation,
            price: req.body.price,
            description: req.body.description
        })

        const savedTravel = await travel.save();
        res.status(201).send(`This is the ID for the new travel: ${savedTravel._id}`);
        
    } catch(error){
        const err = new Error(error.message);
        err.status = "fail"
        err.statusCode = 500
        next(err)

    }
    finally {
        mongoose.disconnect();
    }
}

travelController.updateTravel = async (req, res, next) => {
    try{
        await connect();
        const response = await Travel.findByIdAndUpdate(
            {_id : req.params.id}, 
            {
                destination: req.body.destination,
                transportation: req.body.transportation,
                price: req.body.price,
                description: req.body.description
            }, 
            {new: true});
        if(!response){
            res.status(404).send('Travel not found');
        }
        else{
            return res.send('Travel updated')
        }    
    } catch(error){
        const err = new Error(error.message);
        err.status = "fail"
        err.statusCode = 500
        next(err)

    }
    finally {
        mongoose.disconnect();
    }
}

travelController.deleteTravel = async (req, res, next) => {
    try{
        await connect();

        const travel = await Travel.findByIdAndDelete(req.params.id).exec();
        if(!travel){
            res.status(404).send('Travel not found');
        }
        else{
            return res.send('Travel deleted')
        }
    } catch(error){
        const err = new Error(error.message);
        err.status = "fail"
        err.statusCode = 500
        next(err)

    }
    finally {
        mongoose.disconnect();
    }
}


module.exports = travelController;