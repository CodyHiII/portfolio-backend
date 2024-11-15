import express from 'express';
import { signup } from '../controllers/auth.controller.js';
import { login } from '../controllers/auth.controller.js';

const router = express();

router.post('/signup', signup);
router.post('/login', login);

export default router;
