import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
// import connectDB from './mongodb/connect.js';
import mongoose from 'mongoose'

// Routes
import usersRouters from './routes/usersRouters.js'

dotenv.config()
const app = express()

// ENV variables
const port = process.env.PORT || 7000;
const url = process.env.MONGODB_URL


// Setting up necessary middleware
app.use(cors())
app.use(express.json({ limit: '50mb' }))

// Routes
app.use('/api/v1/users',usersRouters)

// Setting up mongodb connection

const MONGO_URI =
    process.env.NODE_ENV === 'production' ? process.env.MONGO_URI_PRODUCTION : process.env.MONGO_URI_LOCAL;

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// Setting up port
try {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
} catch (error) {
    console.log(error)
}