import express from 'express'
import { createHistory, deleteHistory, getHistorys } from '../controllers/historyControllers.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = express.Router()

// Protected Routes
router.get('/', getHistorys)
router.post('/create', authMiddleware, createHistory)
router.delete('/:id', authMiddleware, deleteHistory)

export default router