import Hotel from '../model/hotelModel.js';

// Get hotels by destination
export const getHotelsByDestination = async (req, res) => {
  const { destination } = req.query;
  try {
    if (!destination) {
      return res.status(400).json({ message: 'Destination is required' });
    }
    const hotels = await Hotel.find({ destination: { $regex: destination, $options: 'i' } });
    if (!hotels.length) {
      return res.status(404).json({ message: 'No hotels found for the given destination' });
    }
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hotels by destination', error });
  }
};
