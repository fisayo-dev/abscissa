import mongoose from "mongoose";

const WhiteboardSchema = new mongoose.Schema({
    title: {type: String, requird: true},
    date_created: {type: Date, requird: true},
    publicity: {type: Boolean, requird: true},
    content: { type: String, requird: true },
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const WhiteboardModel = mongoose.model('Whiteboard', WhiteboardSchema)
export default WhiteboardModel
