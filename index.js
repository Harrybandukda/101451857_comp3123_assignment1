require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const user = require('./routes/user');

app.use(express.json());
app.use('/user', user); 

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
