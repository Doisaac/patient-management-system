import Veterinarian from "../models/Veterinarian.js";

const register = async (req, res) => {
  const { email, password, name } = req.body;

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

export { 
  register, 
  profile,
};
