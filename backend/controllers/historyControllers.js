import User from '../mongodb/models/User.js'
import History from '../mongodb/models/History.js'

const getHistorys = async (req, res) => {
    const { creator } = req.query;
    try {
        const creatorHistories = await History.find({ creator })
        res.status(200).json(creatorHistories)
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
    const { id } = req.params
    
    try {
        const historyExist = await History.findById(id)
        if (!historyExist) return res.status(404).json({ message: 'Sorry this history cannot be found in our database' }) 
        
        await History.deleteOne({_id: id})
        res.status(200).json({message: 'Your history has been successfully deleted'})
    } catch (err) {
        res.status(500).json({message: 'An error occurred trying to delete histroy... Pls try again'})
    }
}

export { getHistorys, deleteHistory, createHistory }
