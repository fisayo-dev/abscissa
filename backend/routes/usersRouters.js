import express from 'express'
import { createUser,updateUser,deleteUser,getUser,getUsers } from '../controllers/usersControllers.js'

const router = express.Router()

router.post('/create', createUser)
router.get('/', getUsers)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router
