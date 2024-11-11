import Veterinarian from '../models/Veterinarian.js';

const register = async (req, res) => {
  const { email } = req.body;
  // Prevents duplicated users
  const userExists = await Veterinarian.findOne({ email });

  if (userExists) {
    const error = new Error('The user is already registered');
    return res.status(400).json({ msg: error.message });
  }

  try {
    // Saves a new veterinarian
    const veterinarian = new Veterinarian(req.body);
    const saveVeterinarian = await veterinarian.save();

    // Shows the veterinarian data as a JSON response
    res.json(saveVeterinarian);
  } catch (error) {
    console.log(error.message);
  }
};

const profile = (req, res) => {
  res.json({ msg: 'Showing profile...' });
};

export { register, profile };
