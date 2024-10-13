const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');

// Register user
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ 
            username, 
            email, 
            password: hashedPassword 
        });

        await user.save();
        res.status(201).send({
            message: "User created successfully.",
            user_id: user._id
        });
    } catch (err) {
        res.status(400).send({
            message: "Error creating user.",
            error: err.message
        });
    }
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send({
                message: "Invalid email or password"
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                message: "Invalid email or password"
            });
        }
        res.status(200).send({
            message: "Login successful."
        });
    } catch (err) {
        res.status(500).send({
            message: "Error loging in.",
            error: err.message
        });
    }
});

module.exports = router;
