import User from '../mongodb/models/user.js'
import History from '../mongodb/models/history.js'

const getHistorys = (req, res) => {
    res.send(`Deleted history ${req.query.id}`)
}

const createHistory = (req, res) => {
    
}

const deleteHistory = (req, res) => {
    
}

export { getHistorys, deleteHistory, createHistory }
