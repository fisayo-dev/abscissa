import User from '../mongodb/models/user.js'
import History from '../mongodb/models/history.js'
import mongoose from 'mongoose'

const getHistorys = async (req, res) => {
    const { creator } = req.query;
    try {
        const creatorHistories = History.findOne({ creator })
        res.status(200).json({ historys: creatorHistories })
    } catch (err) {
        res.status(500).json({ message: 'Error trying to get histories' })
    }
    
}

const createHistory = async (req, res) => {
    try {

        const { date, expression, result, calculator_type, email } = req.body;
        
        // Find if user exist
        const user = await User.findOne({ email })
        
        if (!user) throw new Error('User not found')
            
        // Create history document
        const newHistory = new History({
            date, expression, result, calculator_type, creator: user._id
        })
        await newHistory.save()
        
        // Update history array for particular user
        user.all_historys.push(newHistory._id)
        await user.save()
        
        
        res.status(201).json({ message: 'History successfully created' })
        
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteHistory = async (req, res) => {
    
}

export { getHistorys, deleteHistory, createHistory }
