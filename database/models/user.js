const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
      },
    lastName: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true
      },
    password: {
        type: String,
        required: true
      },
    pastTravels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Travel',
        required: false
      }],
    likedTravels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Travel',
        required: false
      }],
    upcomingTravels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Travel',
        required: false
      }]

});

const User = mongoose.model('User', userSchema);

module.exports = User;
