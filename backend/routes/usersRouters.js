import express from 'express';
import { createUser, loginUser, getUserInfoByID } from '../controllers/userControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// User Routes
router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/:id', authMiddleware, getUserInfoByID); // Protected Route
export default router;
