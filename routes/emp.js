const express = require('express');
const router = express.Router();
const Employee = require('../models/employees');


// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find(); 
        res.status(200).send(employees);
    } catch (err) {
        res.status(500).send({ message: 'Server error. Could not retrieve employees.' });
    }
});



