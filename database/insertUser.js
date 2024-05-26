const mongoose = require('mongoose');
const connectToDatabase = require('./connect');


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
}); 
const User = mongoose.model('User', userSchema);


const usersData = [
    {
      firstName: 'Amy',
      lastName: 'Rodriguez',
      email: 'rod23018@byui.edu',
      password: 'Test123'
    },
    {
      firstName: 'Claudia',
      lastName: 'Regino',
      email: 'reginopca@gmail.com',
      password: 'Test123'
    },
    {
      firstName: 'Carlos',
      lastName: 'Regino',
      email: 'reginosjc@gmail.com',
      password: 'Test123'
    }
];


async function insertUsers(){
    try{
        await connectToDatabase();
        await User.insertMany(usersData);
        console.log('Users inserted successfully');
    }
    catch(err){
        console.log(err);
    }
    finally{
        mongoose.disconnect();
    }
}



insertUsers();