import express from 'express'
import { createHistory, deleteHistory, getHistorys } from '../controllers/historyControllers.js'

const router = express.Router()

router.get('/', getHistorys)
router.post('/create', createHistory)
router.delete('/:id', deleteHistory)

export default router