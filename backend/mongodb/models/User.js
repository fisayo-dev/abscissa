import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    plan: {type: String, required: true},
    education_grade: { type: String, required: true },
    all_whiteboards: [{
        type: mongoose.Schema.Types.ObjectId, ref:
        'Whiteboard'
    }],
    all_historys: [{
        type: mongoose.Schema.Types.ObjectId, ref:
        'History'
    }]
})

const userModel = mongoose.model('User', UserSchema)
export default userModel;
