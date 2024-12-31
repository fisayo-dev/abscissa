import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    plan: {type: String, required: true},
    education_grade: { type: String, required: true },
    allWhiteboards: [{
        type: mongoose.Schema.Types.ObjectId, ref:
        'Whiteboard'
    }]
})

const userModel = mongoose.model('User', UserSchema)
export default userModel
