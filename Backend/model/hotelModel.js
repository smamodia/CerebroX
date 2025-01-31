import mongoose from 'mongoose';

// Room Schema
const RoomSchema = new mongoose.Schema({
  roomNumber: { type: Number, required: true },
  type: { type: String, required: true }, // Single, Double, Suite
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, required: true },
});

// Hotel Schema
const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  destination: { type: String, required: true },
  rooms: [RoomSchema],
  price_per_night: { type: Number, required: true },
  amenities: { type: [String], required: true }, // List of amenities like pool, gym, etc.
  imageUrl: { type: String, required: true }, // URL for the hotel's image
});

// Create Hotel Model
const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;
