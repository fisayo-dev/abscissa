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

// Set CORS origin dynamically based on environment
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://abscissa.vercel.app' // Replace with your production frontend URL
    : 'http://localhost:5173', // Local frontend URL (adjust the port if necessary)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Enable cookies (if needed)
};

// Setting up necessary middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));

// Routes
app.use('/api/v1/users', usersRouters);
app.use('/api/v1/historys', historyRoutes);

// Test route to check if backend route is working
app.get('/api/', (req, res) => {
  res.status(200).json({ message: 'Backend route working' });
});

// Setting up mongodb connection
const MONGO_URI = process.env.NODE_ENV === 'production' ? productionUrl : localUrl;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Setting up port
try {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
