import express from 'express';
import { createUser, loginUser, getUserInfoByID, editUserProfile } from '../controllers/userControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public Routes
router.post('/create', createUser);
router.post('/login', loginUser);

// Protected Routes
router.get('/:id', authMiddleware, getUserInfoByID); 
router.put('/edit/:id', authMiddleware, editUserProfile)
export default router;
