import express from 'express';
import { signup, login } from '../controllers/user.controller.js';
import { signupValidation, loginValidation } from '../middlewares/user.middleware.js';

const router = express.Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

export default router;