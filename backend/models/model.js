import mongoose from 'mongoose';

// Bus Schema
const BusSchema = new mongoose.Schema({
  bus_company: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: String, required: true },
});

// Train Schema
const TrainSchema = new mongoose.Schema({
  train_company: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  duration: { type: String, required: true },
  class: { type: String, required: true },
  price: { type: String, required: true },
});

// Flight Schema
const FlightSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
 // departure_time: { type: String, required: true },
 // arrival_time: { type: String, required: true },
  duration: { type: String, required: true },
  price_one_way: { type: String, required: true },
  price_return:{ type: String, required: true },
});

export const Bus = mongoose.model('Bus', BusSchema);
export const Train = mongoose.model('Train', TrainSchema);
export const Flight = mongoose.model('Flight', FlightSchema);

