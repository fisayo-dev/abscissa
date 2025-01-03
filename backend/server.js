import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

// Routes
import usersRouters from './routes/usersRouters.js';
import historyRoutes from './routes/historyRoutes.js';

dotenv.config();
const app = express();

// ENV variables
const port = process.env.PORT || 7000;
const localUrl = process.env.MONGO_URI_LOCAL;
const productionUrl = process.env.MONGO_URI_PRODUCTION;

// CORS Configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://abscissa.vercel.app'  // Production frontend URL
    : (origin, callback) => {
        // Allow specific origins in development
        const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000'];
        if (allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // Ensure credentials (like cookies) are sent
};

// Middleware
app.use(cors(corsOptions));  // Apply CORS middleware with options
app.use(express.json({ limit: '50mb' }));  // Increase body size limit if needed

// Routes
app.use('/api/v1/users', usersRouters);
app.use('/api/v1/historys', historyRoutes);

// Test route to check if backend route is working
app.get('/api/', (req, res) => {
  res.status(200).json({ message: 'Backend route working' });
});

// MongoDB Connection
const MONGO_URI = process.env.NODE_ENV === 'production' ? productionUrl : localUrl;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
try {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
} catch (error) {
  console.error('Error starting the server:', error);
}
