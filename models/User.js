import mongoose from "mongoose";
import Schema from "mongoose";

const UserSchema = mongoose.Schema({
    u_id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    position: String,
    manghanh: {
        type: Schema.Types.ObjectId,
        ref: 'Nghanh'
    }
});

const User = mongoose.model('User', UserSchema);

export default User;