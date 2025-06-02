const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const chargerRoutes = require('./routes/chargerRoutes');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// ✅ Correct CORS setup for Vercel
const corsOptions = {
  origin: ['https://charging-station-app-five.vercel.app'], // your Vercel domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/chargers', chargerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
