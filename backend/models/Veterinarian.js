import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import generateId from '../helpers/generateId.js';

const veterinarianSchema = mongoose.Schema({
  name: {
    type: String,
    requiered: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    default: null,
    trim: true,
  },
  web: {
    type: String,
    default: null,
  },
  token: {
    type: String,
    default: generateId(),
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

veterinarianSchema.pre('save', async function(next) {
  // Avoids double hash
  if (!this.isModified('password')) next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Define the model to use
const Veterinarian = mongoose.model('Veterinarian', veterinarianSchema);

export default Veterinarian;
