const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace <your-mongodb-uri> with your actual MongoDB URI)
mongoose.connect('mongodb+srv://fursatop137:Mohd_137@cluster0.agpcu.mongodb.net/bakeryDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});