import User from '../mongodb/models/User.js';
import Otp from '../mongodb/models/Otp.js'; // Add a new model for OTP storage
import * as dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
const OTP_EXPIRY = 7 * 60 * 1000; // 7 minutes in milliseconds

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Send OTP
const sendOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const otp = crypto.randomInt(100000, 999999).toString(); // Generate 6-digit OTP
        const expiry = new Date(Date.now() + OTP_EXPIRY);

        // Save OTP to database
        await Otp.findOneAndUpdate(
            { email },
            { otp, expiry },
            { upsert: true, new: true }
        );

        // Send OTP email
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP is ${otp}. It expires in 7 minutes.`,
        });

        res.status(200).json({ message: 'OTP sent successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending OTP', error: error.message });
    }
};

// Create User with OTP Verification
const createUser = async (req, res) => {
    const { first_name, last_name, email, password, otp } = req.body;

    if (!email || !password || !otp) {
        return res.status(400).json({ message: 'Email, password, and OTP are required' });
    }

    try {
        // Verify OTP
        const otpRecord = await Otp.findOne({ email, otp });
        if (!otpRecord) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        if (otpRecord.expiry < new Date()) {
            return res.status(400).json({ message: 'OTP has expired' });
        }

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password and create user
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

        // Delete OTP after successful use
        await Otp.deleteOne({ email });

        // Generate JWT
        const token = jwt.sign({ id: savedUser._id }, SECRET_KEY, { expiresIn: '36h' });
        res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}

// User Login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const savedUser = await User.findOne({ email }).select('+password');
        if (!savedUser) return res.status(400).json({ message: "Sorry, but you don't seem to have an account" });

        const isPasswordValid = await bcrypt.compare(password, savedUser.password);
        if (!isPasswordValid) return res.status(401).json({ message: 'Incorrect password' });

        const token = jwt.sign({ id: savedUser._id }, SECRET_KEY, { expiresIn: '36h' });
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

const editUserProfile = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, education_grade } = req.body;

    try {
        // Find the user by ID and exclude password and all_historys fields
        const user = await User.findById(id).select('-password -all_historys');
        
        // If user doesn't exist, return 404
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Update the user with the new values from the request body
        user.first_name = first_name || user.first_name;
        user.last_name = last_name || user.last_name;   
        user.education_grade = education_grade || user.education_grade;

        // Save the updated user document
        await user.save();

        // Return the updated user data (you can adjust the response as needed)
        res.status(200).json({ message: 'User profile updated successfully', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating user profile', error: err.message });
    }
};


// Other functions for update, delete etc.
export { createUser, loginUser, getUserInfoByID, editUserProfile, sendOtp};
