import Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";
import User from "../mongodb/models/User.js";
import Otp from "../mongodb/models/Otp.js";
import * as dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
const OTP_EXPIRY = 7 * 60 * 1000; // OTP validity: 7 minutes

// Initialize Mailtrap transport
const transport = Nodemailer.createTransport(
    MailtrapTransport({
        token: process.env.MAILTRAP_API_TOKEN,
    })
);

// Send OTP function
const sendOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        // Check if a valid OTP already exists
        const existingOtp = await Otp.findOne({ email });
        if (existingOtp && existingOtp.expiry > new Date()) {
            return res.status(400).json({ message: "A valid OTP already exists. Please wait until it expires." });
        }

        // Generate OTP
        const otp = crypto.randomInt(100000, 999999).toString();
        const expiry = new Date(Date.now() + OTP_EXPIRY);

        // Save OTP to the database
        await Otp.findOneAndUpdate(
            { email },
            { otp, expiry },
            { upsert: true, new: true }
        );

        // Send OTP email via Mailtrap
        const mailOptions = {
            from: {
                address: process.env.MAILTRAP_SENDER_EMAIL,
                name: process.env.MAILTRAP_SENDER_NAME,
            },
            to: email,
            template_uuid: process.env.MAILTRAP_TEMPLATE_UUID,
            template_variables: {
                recepient_name: email, 
                otp: otp,
                current_date: new Date().toLocaleString(),
            },
        };

        await transport.sendMail(mailOptions);

        res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
        console.error("Error sending OTP:", error.message);
        res.status(500).json({ message: "Error sending OTP", error: error.message });
    }
};

// Create User with OTP Verification
const createUser = async (req, res) => {
    const { first_name, last_name, email, password, otp } = req.body;

    if (!email || !password || !otp) {
        return res.status(400).json({ message: "Email, password, and OTP are required" });
    }

    try {
        // Verify OTP
        const otpRecord = await Otp.findOne({ email, otp });
        if (!otpRecord) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        if (otpRecord.expiry < new Date()) {
            return res.status(400).json({ message: "OTP has expired" });
        }

        // Check if the user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password and create the user
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword,
            all_whiteboards: [],
            all_historys: [],
            plan: "free",
            education_grade: "College",
        });

        const savedUser = await newUser.save();

        // Delete OTP after successful use
        await Otp.deleteOne({ email });

        // Generate JWT token
        const token = jwt.sign({ id: savedUser._id }, SECRET_KEY, { expiresIn: "36h" });

        res.status(201).json({ message: "User created successfully", token });
    } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
};

// User Login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const savedUser = await User.findOne({ email }).select("+password");
        if (!savedUser) return res.status(400).json({ message: "Sorry, but you don't seem to have an account" });

        const isPasswordValid = await bcrypt.compare(password, savedUser.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Incorrect password" });

        const token = jwt.sign({ id: savedUser._id }, SECRET_KEY, { expiresIn: "36h" });
        res.status(200).json({ token });
    } catch (err) {
        console.error("Error logging in:", err.message);
        res.status(500).json({ message: "Error logging in", error: err.message });
    }
};

// Get User by ID
const getUserInfoByID = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select("-password -all_historys");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user details:", err.message);
        res.status(500).json({ message: "Error fetching user details", error: err.message });
    }
};

// Edit User Profile
const editUserProfile = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, education_grade } = req.body;

    try {
        // Find user by ID and exclude password and all_historys
        const user = await User.findById(id).select("-password -all_historys");

        if (!user) return res.status(404).json({ message: "User not found" });

        // Update user data
        user.first_name = first_name || user.first_name;
        user.last_name = last_name || user.last_name;
        user.education_grade = education_grade || user.education_grade;

        // Save updated user document
        await user.save();

        res.status(200).json({ message: "User profile updated successfully", user });
    } catch (err) {
        console.error("Error updating user profile:", err.message);
        res.status(500).json({ message: "Error updating user profile", error: err.message });
    }
};

// Export all functions
export { createUser, loginUser, getUserInfoByID, editUserProfile, sendOtp };
