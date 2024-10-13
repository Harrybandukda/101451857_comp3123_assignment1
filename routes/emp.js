const express = require('express');
const router = express.Router();
const Employee = require('../models/employees');

// Get all employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find(); 
        res.status(200).send(employees); 
    } catch (err) {
        res.status(500).send({ message: 'Server error. Could not retrieve employees.' });
    }
});

// Add new employee
router.post('/employees', async (req, res) => {
    const employee = new Employee(req.body); 
    try {
        await employee.save();
        res.status(201).send({
            message: 'Employee created successfully.',
            employee_id: employee._id 
        });
    } catch (err) {
        res.status(400).send({
            message: 'Error creating employee.',
            error: err.message 
        });
    }
});

// Get employee by ID
router.get('/employees/:eid', async (req, res) => {
    const {eid} = req.params; 
    try {
        const employee = await Employee.findById(eid); 
        if (!employee) {
            return res.status(404).send({ message: 'Emp not found.' }); 
        }
        res.status(200).send(employee); 
    } catch (err) {
        res.status(500).send({ message: 'Server issue. Could not retieve emp.' });
    }
});

// Update employee details
router.put('/employees/:eid', async (req, res) => {
    const { eid } = req.params; 
    const updates = req.body; 
    try {
        const employee = await Employee.findByIdAndUpdate(eid, updates, { new: true, runValidators: true }); 
        if (!employee) {
            return res.status(404).send({ message: 'employee not found.' }); 
        }
        res.status(200).send({
            message: 'Employee details updated.',
            employee
        }); 
    } catch (err) {
        res.status(400).send({ 
            message: 'Error updating employee.',
            error: err.message 
        });
    }
});

// Delete employee
router.delete('/employees/:eid', async (req, res) => {
    const { eid } = req.params; 
    try {
        const employee = await Employee.findByIdAndDelete(eid);
        if (!employee) {
            return res.status(404).send({ message: 'employee not found.' }); 
        }
        res.status(200).send({
            message: 'Employee deleted.',
            employee
        }); 
    } catch (err) {
        res.status(500).send({ message: 'Server issue. Could not delete employee.' });
    }
});

module.exports = router;
