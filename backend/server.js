import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js';

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

// Setting up port
try {
    // connectDB(url)
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
} catch (error) {
    console.log(error)
}