import User from '../mongodb/models/user.js';
import * as dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

// User Creation
const createUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    try {
        const userExits = await User.findOne({ email });
        if (userExits) return res.status(400).json({ message: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword,
            all_whiteboards: [],
            all_historys: [],
            plan: 'free',
            education_grade: 'College',
        });

        const savedUser = await newUser.save();

        const token = jwt.sign({ id: savedUser._id }, SECRET_KEY, { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error registering user', error: err.message });
    }
};

// User Login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const savedUser = await User.findOne({ email }).select('+password');
        if (!savedUser) return res.status(400).json({ message: "Sorry, but you don't seem to have an account" });

        const isPasswordValid = await bcrypt.compare(password, savedUser.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Incorrect password' });

        const token = jwt.sign({ id: savedUser._id }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error logging in', error: err.message });
    }
};

// Get User by ID
const getUserInfoByID = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select('-password -all_historys');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching user details', error: err.message });
    }
};

// Other functions for update, delete etc.
export { createUser, loginUser, getUserInfoByID };
