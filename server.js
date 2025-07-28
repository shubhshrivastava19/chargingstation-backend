const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');   
const Auth=require('./routes/authRoutes')
const Stations=require('./routes/stationRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: '*', // or specify origin like 'http://localhost:3000'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.use('/api/auth', Auth );
app.use('/api/stations', Stations);

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));