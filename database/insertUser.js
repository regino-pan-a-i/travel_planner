const mongoose = require('mongoose');
const connectToDatabase = require('./connect');
const User = require('./models/user'); // Adjust the path if necessary
const bcrypt = require('bcrypt');


const usersData = [
    {
        firstName: 'Amy',
        lastName: 'Rodriguez',
        email: 'rod23018@byui.edu',
        password: 'Test123',
        pastTravels: [new mongoose.Types.ObjectId('66612458e0ab54e074b600c4')],
        likedTravels: [new mongoose.Types.ObjectId('66612458e0ab54e074b600c4')],
        upcomingTravels: [new mongoose.Types.ObjectId('66612458e0ab54e074b600c5')]
    },
    {
        firstName: 'Claudia',
        lastName: 'Regino',
        email: 'reginopca@gmail.com',
        password: 'Test123',
        pastTravels: [new mongoose.Types.ObjectId('66612458e0ab54e074b600c4')],
        likedTravels: [new mongoose.Types.ObjectId('66612458e0ab54e074b600ca'), new mongoose.Types.ObjectId('66612458e0ab54e074b600cd')],
        upcomingTravels: [new mongoose.Types.ObjectId('66614a3ef2f96101ee8f1a64')]
    },
    {
        firstName: 'Carlos',
        lastName: 'Regino',
        email: 'reginosjc@gmail.com',
        password: 'Test123',
        pastTravels: [new mongoose.Types.ObjectId('66627082208cd19ccac936f8')],
        likedTravels: [new mongoose.Types.ObjectId('66612458e0ab54e074b600c4')],
        upcomingTravels: [new mongoose.Types.ObjectId('66612458e0ab54e074b600c5')]
    }
];

async function insertUsers() {
    try {
        await connectToDatabase();
        await User.insertMany(usersData);
        console.log('Users inserted successfully');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}

insertUsers();
