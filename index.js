// Mo Harry Bandukda
// Student ID: 101451857
// COMP 3123 - Assignment One - Full Stack Development I

// loading env variables
require('dotenv').config(); 

// importing required moduls
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const users = require('./routes/user');
const emp = require('./routes/emp'); 

app.use(express.json());

// Routes setup for user and emp 
app.use('/users', users);
app.use('/emp', emp); 

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI; 
if (!mongoURI) {
    console.error('MONGODB_URI is undefined. Please check your .env file.');
    process.exit(1);
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
