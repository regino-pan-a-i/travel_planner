const mongoose = require('mongoose');
const connect = require('../database/connect');
const Travel = require('../database/models/travel');

const travels = [
    {
        destination: 'Cancun',
        transportation: 'Plane',
        price: 500,
        description: 'Sunny beach near the Caribbean Sea'
    },
    {
        destination: 'Paris',
        transportation: 'Plane',
        price: 800,
        description: 'City of love'
    },
    {
        destination: 'Tokyo',
        transportation: 'Plane',
        price: 1000,
        description: 'City of technology'
    },
    {
        destination: 'New York',
        transportation: 'Bus',
        price: 700,
        description: 'City that never sleeps'
    },
    {
        destination: 'Rome',
        transportation: 'Plane',
        price: 600,
        description: 'City of history'
    },
    {
        destination: 'Sydney',
        transportation: 'Plane',
        price: 900,
        description: 'City of beaches'
    },
    {
        destination: 'Rio de Janeiro',
        transportation: 'Plane',
        price: 950,
        description: 'City of carnival'
    },
    {
        destination: 'Dubai',
        transportation: 'Plane',
        price: 1100,
        description: 'City of luxury'
    },
    {
        destination: 'Cape Town',
        transportation: 'Plane',
        price: 750,
        description: 'City of nature'
    },
    {
        destination: 'Buenos Aires',
        transportation: 'Plane',
        price: 850,
        description: 'City of tango'
    
    }
]


const insertTravels = async (req, res, next) => {
    try{
        await connect();
        await Travel.insertMany(travels);
        console.log('Travels inserted successfully');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}

insertTravels();