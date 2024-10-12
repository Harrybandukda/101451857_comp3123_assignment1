const express = require('express');
const router = express.Router();
const User = require('../models/users');

// Register user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email, password});
        if (!user) {
            return res.status(401).send("Invalid password or email");
        }
        res.status(200).send(user); 
    } catch (err) {
        res.status(500).send(err);  
    }
});

module.exports = router;
