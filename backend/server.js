import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

// Routers
import usersRouters from 'routes/usersRouters.js'

dotenv.config()
const app = express()

// Setting up necessary middleware
app.use(cors())
app.use(express.json({ limit: '50mb' }))

// Routes
app.use('/api/v1/users',usersRouters)

// Setting up port
app.listen(3000, () => {
    console.log('Listening on port 3000')
})