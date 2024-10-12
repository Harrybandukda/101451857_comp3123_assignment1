require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const users = require('./routes/users');
const PORT = process.env.PORT || 5000;

app.use('/users', users);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
