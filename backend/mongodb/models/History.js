import mongoose from "mongoose"

const HistorySchema = new mongoose.Schema({
    date: {type: Date, required: true},
    expression: {type: String, required: true},
    result: {type: String, required: true},
    calculator_type: { type: String, required: true },
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const HistoryModel = mongoose.model('History', HistorySchema)
export default HistoryModel