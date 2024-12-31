import express from 'express'
import { createUser,updateUser,deleteUser,getUserInfoByID,getUsers, loginUser } from '../controllers/userControllers.js'

const router = express.Router()

router.post('/create', createUser)
router.post('/login', loginUser)
router.get('/', getUsers)
router.get('/:id', getUserInfoByID)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router
