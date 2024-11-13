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

const confirm = async (req, res) => {
  const { token } = req.params;

  const userRegistered = await Veterinarian.findOne({ token });

  if (!userRegistered) {
    const error = new Error('The token is not valid');
    return res.status(400).json({ msg: error.message });
  }

  // Updates the user in the database
  try {
    userRegistered.confirmed = true;
    userRegistered.token = null;

    await userRegistered.save();

    res.json({ msg: 'User successfully confirmed' });
  } catch (error) {
    console.log(error.message);
  }
};

export { register, profile, confirm };
