const express = require('express');
const User = require('../Models/user');
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const user = new User({ firstName, lastName, email, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful!' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;