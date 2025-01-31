import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import { Bus, Train, Flight } from '../models/model.js';

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected for seeding');

    // Seed Buses
    const busFilePath = './Data/bus_details.json';
    const busData = JSON.parse(fs.readFileSync(busFilePath, 'utf8'));
    if (await Bus.countDocuments() === 0) {
      await Bus.insertMany(busData);
      console.log('Bus data seeded successfully');
    } else {
      console.log('Bus data already exists, skipping...');
    }

    // Seed Trains
    const trainFilePath = './Data/train_details.json';
    const trainData = JSON.parse(fs.readFileSync(trainFilePath, 'utf8'));
    if (await Train.countDocuments() === 0) {
      await Train.insertMany(trainData);
      console.log('Train data seeded successfully');
    } else {
      console.log('Train data already exists, skipping...');
    }

    // Seed Flights
    const flightFilePath = './Data/flight_details.json';
    const flightData = JSON.parse(fs.readFileSync(flightFilePath, 'utf8'));
    if (await Flight.countDocuments() === 0) {
      await Flight.insertMany(flightData);
      console.log('Flight data seeded successfully');
    } else {
      console.log('Flight data already exists, skipping...');
    }

    process.exit();
  } catch (err) {
    console.error('Error seeding data:', err.message);
    process.exit(1);
  }
};

export default seedData;


/*import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import Bus from '../models/Bus.js';

dotenv.config();

// Path to the JSON file
const filePath = './Data/bus_details.json';
// Connect to MongoDB and insert data
const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    // Read and parse JSON data
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Delete existing data (optional, for clean start)
    await Bus.deleteMany();
    console.log('Existing data cleared');

    // Insert the new data
    await Bus.insertMany(jsonData);
    console.log('Bus data inserted successfully');

    process.exit();
  } catch (err) {
    console.error('Error seeding data:', err.message);
    process.exit(1);
  }
};

export default seedData;
*/