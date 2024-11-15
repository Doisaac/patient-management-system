import jwt from 'jsonwebtoken';
import Veterinarian from '../models/Veterinarian.js';

const checkAuth = async (req, res, next) => {

  let token;

  if ( req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {

      token = req.headers.authorization.split(' ')[1];
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.veterinarian = await Veterinarian.findById(decoded.userId).select("-password -tok -confirmed");

      return next();
      
    } catch (error) {
      const errorMessage = new Error('The token is not valid');
      return res.status(403).json({ msg: errorMessage.message });
    }
  }

  if (!token) {
    const error = new Error('The token is not valid or nonexistent token');
    return res.status(403).json({ msg: error.message });
  }

  next();
};

export default checkAuth;