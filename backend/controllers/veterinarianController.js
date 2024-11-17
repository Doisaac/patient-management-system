import Veterinarian from '../models/Veterinarian.js';
import generateJWT from '../helpers/generateJWT.js';
import generateId from '../helpers/generateId.js';

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
  const { veterinarian } = req;

  res.json({ "profile": veterinarian });
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

const authenticate = async (req, res) => {
  const { email, password } = req.body;

  // Validates if the email exist
  const user = await Veterinarian.findOne({ email });

  if (!user) {
    const error = new Error('The user does not exist');
    return res.status(404).json({ msg: error.message });
  } 

  // Validates if the user is not yet confirmed
  if (!user.confirmed) {
    const error = new Error('The account is not yet confirmed');
    return res.status(403).json({ msg: error.message });
  }

  // Validates password 
  if (await user.checkPassword(password)) {
    // Authenticates 
    res.json({ token: generateJWT(user._id) });
  } else {
    const error = new Error('The password is incorrect');
    return res.status(403).json({ msg: error.message });
  }
}

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  
  const veterinarian = await Veterinarian.findOne({ email });

  if (!veterinarian) {
    const error = new Error('The user does not exist');
    return res.status(400).json({ msg: error.message });
  }
  
  try {
    veterinarian.token = generateId();
    await veterinarian.save();
    return res.json({ msg: 'We have sent you an email with the instructions' });
  } catch (error) {
    console.log(error);
  }
};

const checkPasswordToken = async (req, res) => {

  const { token } = req.params;

  const veterinarian = await Veterinarian.findOne({ token });
  
  if (veterinarian) {
    // The token is valid
    res.json({ msg: 'The token is valid and user exists' });
  } else {
    const error = new Error('Token no válido');
    return res.status(400).json({ msg: error.message });
  }
};

const saveNewPassword = (req, res) => {

};

export {
  register,
  profile,
  confirm,
  authenticate,
  forgetPassword,
  checkPasswordToken,
  saveNewPassword,
};
