const mongoose = require('mongoose');
const env = require("dotenv").config()

async function connectToDatabase() {
  const uri = process.env.DATABASE_URL;
  console.log(uri)
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    console.log('Connected to MongoDB');
    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectToDatabase;
