import express from 'express';
import { createUser, loginUser, getUserInfoByID } from '../controllers/userControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public Routes
router.post('/create', createUser);
router.post('/login', loginUser);

// Protected Routes
router.get('/:id', authMiddleware, getUserInfoByID); 
export default router;
