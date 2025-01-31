import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Hotel from '../model/hotelModel.js';

// Load environment variables
dotenv.config();

// Sample dataset
const hotels = [
  {
    name: 'Taj Rambagh Palace Jaipur',
    destination: 'Jaipur, Rajasthan, India',
    rooms: [
      { roomNumber: 1, type: 'Palace', price: 200, isAvailable: true },
    ],
    price_per_night: 200,
    amenities: ['Pool', 'Gym', 'Restaurant'],
    imageUrl: 'https://assets.cntraveller.in/photos/60ba1a2cbfe773a828a46a71/16:9/w_1024%2Cc_limit/Alsisar.png',
  },
  {
    name: 'Le Meridien Jaipur Resort & Spa',
    destination: 'Jaipur, Rajasthan, India',
    rooms: [
      { roomNumber: 101, type: 'Superior', price: 180, isAvailable: true },
    ],
    price_per_night: 180,
    amenities: ['Spa', 'Pool', 'Restaurant'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNa3UR_1dSrcJ35SIOuEeDKWLk83dKcUtiYg&s',
  },
  {
    name: 'The Oberoi, Manali',
    destination: 'Manali, Himachal Pradesh, India',
    rooms: [
      { roomNumber: 201, type: 'Premier Valley View', price: 300, isAvailable: true },
    ],
    price_per_night: 300,
    amenities: ['Mountain View', 'Restaurant'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVnjE_LNcjU-9JIn-AbhuYrfXX0brJdgsGJQ&s',
  },
  {
    name: 'Himachal Pradesh Tourism Development Corporation (HPTDC) - Manali',
    destination: 'Manali, Himachal Pradesh, India',
    rooms: [
      { roomNumber: 301, type: 'Standard ', price: 80, isAvailable: true },
    ],
    price_per_night: 80,
    amenities: ['Restaurant'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk3EkamoduhvQHh2eiogSUxtB7xq9HbgQxQ&s',
  },
  {
    name: 'The Wildflower Hall, Shimla',
    destination: 'Shimla, Himachal Pradesh, India',
    rooms: [
      { roomNumber: 401, type: 'Luxury', price: 220, isAvailable: true },
    ],
    price_per_night: 220,
    amenities: ['Spa', 'Restaurant', 'Mountain View'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVBBG2nPwGQPO3qiCbizRb7Bu8MbjdHHCdg&s',
  },
  {
    name: 'The Claridges, New Delhi',
    destination: 'New Delhi, India',
    rooms: [
      { roomNumber: 501, type: 'Deluxe ', price: 250, isAvailable: true },
    ],
    price_per_night: 250,
    amenities: ['Restaurant', 'Bar'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5nQoXkVHv-OqR4aFog04K9iOAJ9wKSeiqQ&s',
  },
  {
    name: 'The Imperial, New Delhi',
    destination: 'New Delhi, India',
    rooms: [
      { roomNumber: 601, type: 'Heritage', price: 280, isAvailable: true },
    ],
    price_per_night: 280,
    amenities: ['Gym', 'Restaurant'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvR7AIeV0NqguAg6T9bod-gCmJt1lG7bItoA&s',
  },
  {
    name: 'Ananda in the Himalayas, Rishikesh',
    destination: 'Rishikesh, Uttarakhand, India',
    rooms: [
      { roomNumber: 701, type: 'Palace ', price: 350, isAvailable: true },
    ],
    price_per_night: 350,
    amenities: ['Spa', 'Yoga'],
    imageUrl: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'The Oberoi Mumbai',
    destination: 'Mumbai, Maharashtra, India',
    rooms: [
      { roomNumber: 801, type: 'Premier Ocean View ', price: 400, isAvailable: true },
    ],
    price_per_night: 400,
    amenities: ['Ocean View', 'Restaurant'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEmJK2awvk8wubiwMyg6Vmuj7alMWc4WIaA&s',
  },
  {
    name: 'Trident Nariman Point',
    destination: 'Mumbai, Maharashtra, India',
    rooms: [
      { roomNumber: 901, type: 'Deluxe Sea View', price: 380, isAvailable: true },
    ],
    price_per_night: 380,
    amenities: ['Sea View', 'Restaurant'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxre9F5b343iaM1MnE5y4FSkHTjKdyRFxjg&s',
  },
  {
    name: 'The St. Regis Mumbai',
    destination: 'Mumbai, Maharashtra, India',
    rooms: [
      { roomNumber: 1001, type: 'Grand Deluxe ', price: 450, isAvailable: true },
    ],
    price_per_night: 450,
    amenities: ['Luxury', 'Restaurant', 'Bar'],
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9VEpeeu6H4AcaaaXE051Mnv1byf9UDDLZg&s',
  },
  
];




// Connect to database and seed data
const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data
    await Hotel.deleteMany();
    console.log('Existing data cleared');

    // Insert new data
    await Hotel.insertMany(hotels);
    console.log('Database seeded successfully');

    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
