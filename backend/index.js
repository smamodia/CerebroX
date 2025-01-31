import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import seedData from './Data/seed.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

// Middleware
app.use(express.json());
app.use('/api', router);


// Database Connection and Server
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');
    // Uncomment this if you want to seed data initially
    // await seedData();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Database connection error:', err.message));



/*
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import seedData from './Data/seed.js';  // Corrected import for default export
import BusRoutes from './routes/BusRoutes.js';
import Bus from './models/Bus.js'; // Import the Bus model


dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Test Route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    // Seed data if needed
    const count = await Bus.countDocuments();
    if (count === 0) {
      console.log('No data found. Seeding initial data...');
      await seedData();  // Call the seedData function to insert initial data
    }
  } catch (err) {
    console.log(err.message);
  }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api", BusRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server is listening on port ${port}`);
});
*/