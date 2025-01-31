import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import hotelRoutes from './routes/hotelRoutes.js'; // Add `.js` for ES Modules

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; 

// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/hotels', hotelRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
