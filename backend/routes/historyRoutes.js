import express from 'express'
import { createHistory, deleteHistory, getHistorys } from '../controllers/historyControllers'

const router = express.Router()

router.get('/', getHistorys)
router.put('/create', createHistory)
router.delete('/:id', deleteHistory)

export default router