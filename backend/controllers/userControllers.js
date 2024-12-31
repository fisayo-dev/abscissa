import User from '../mongodb/models/User.js'
import * as dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY;

const createUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body
    
    try {
        // Hash the user password
        const hashedPassword = await bcrypt.hash(password, 20);
        
        const userExits = await User.findOne({ email })

        // If user exist return the user
        if (userExits) return res.status(400).json({ message: 'User already exist' });
        
        // If user doesn't exist, Create user 
        const newUser = new User({
            first_name, last_name, email, password: hashedPassword, all_whiteboards: [], all_historys: [], plan: 'free', education_grade: 'College'    
        })
        const savedUser = await newUser.save();
        console.log(savedUser)

        // Generate a JWT
        const token = jwt.sign({ savedUser }, SECRET_KEY, { expiresIn: '1h' });

        // Return the token to the client
        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error registering user' });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {

        const user = await User.findOne({ email })
        
        if (!user) return res.status(400).json({ message: "Sorry, but you don't seem to have an account" })
            
        // Check the password
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) return res.status(401).json({ message: 'Incorrect password' })
        
        // Generate a JWT
        const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ token })
    } catch (err) {
        res.status(500).json({messgae: 'An error occured while trying to log in the user'})
    }
    
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

export { createUser, deleteUser, loginUser, getUserInfoByID, getUsers, updateUser }

