import express from 'express';
import {
  register,
  profile,
  confirm,
  authenticate,
  forgetPassword,
  checkPasswordToken,
  saveNewPassword,
  updateProfile
} from '../controllers/veterinarianController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

// Public area
router.post('/', register);
router.get('/confirm/:token', confirm);
router.post('/login', authenticate);
router.post('/forgetPassword', forgetPassword);
router.route('/forgetPassword/:token').get(checkPasswordToken).post(saveNewPassword);

// Private area
router.get('/profile', checkAuth, profile);
router.put('/profile/:id', checkAuth, updateProfile)

export default router;
