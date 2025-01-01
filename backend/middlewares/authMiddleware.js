import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Authentication token missing' });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // Add user to the request object
        next();
    } catch (err) {
        console.error(err);
        res.status(403).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;
