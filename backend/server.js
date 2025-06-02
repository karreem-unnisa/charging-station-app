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

// ✅ CORS must allow the FRONTEND (Vercel) URL
const corsOptions = {
  origin: ['https://charging-station-app-five.vercel.app'], // <== correct this
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.options('*', cors(corsOptions)); // handle preflight requests

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chargers', chargerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
