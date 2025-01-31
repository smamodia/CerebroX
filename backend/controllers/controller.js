import { Bus, Train, Flight } from '../models/model.js';

// Controller function to get buses
export const getBuses = async (req, res) => {
  const { source, destination } = req.query;

  try {
    if (!source || !destination) {
      return res.status(400).json({ message: "Source and destination are required" });
    }

    const buses = await Bus.find({ source, destination });

    if (buses.length === 0) {
      return res.status(404).json({ message: "No buses found for the given route" });
    }

    res.status(200).json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to get trains
export const getTrains = async (req, res) => {
  const { source, destination } = req.query;

  try {
    if (!source || !destination) {
      return res.status(400).json({ message: "Source and destination are required" });
    }

    const trains = await Train.find({ source, destination });

    if (trains.length === 0) {
      return res.status(404).json({ message: "No trains found for the given route" });
    }

    res.status(200).json(trains);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to get flights
export const getFlights = async (req, res) => {
  const { source, destination } = req.query;

  try {
    if (!source || !destination) {
      return res.status(400).json({ message: "Source and destination are required" });
    }

    const flights = await Flight.find({ source, destination });

    if (flights.length === 0) {
      return res.status(404).json({ message: "No flights found for the given route" });
    }

    res.status(200).json(flights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




