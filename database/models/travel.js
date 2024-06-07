const mongoose  = require('mongoose');


const travelSchema = new mongoose.Schema({
    destination: String,
    transportation: String,
    price: Number,
    description: String,
})


const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;