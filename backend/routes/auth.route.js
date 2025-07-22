import { Router } from 'express';
import { signup, login } from '../controllers/auth.controller.js';
import { signupValidation, loginValidation } from '../middlewares/authValidation.middleware.js';

const router = Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

export default router;