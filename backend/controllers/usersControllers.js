import mongoose from 'mongoose'
import User from '../mongodb/models/user.js'
import * as dotenv from 'dotenv'

dotenv.config()

const createUser = async (req, res) => {
    
    
}
const getUsers = async (req, res) => {
    const allUsers = await User.find()
    res.status(200).json(allUsers)
}
const getUserInfoByID = async (req, res) => {
    
}
const deleteUser = async (req, res) => {
    
}
const updateUser = async (req, res) => {
    
}

export { createUser, deleteUser, getUserInfoByID, getUsers, updateUser }

