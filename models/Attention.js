import mongoose from "mongoose";
import Schema from "mongoose";


const AttenSchema = new mongoose.Schema({

    a_id: Schema.Types.ObjectId,
    title: String,
    content: String,
    receiver: String,
    date: Date,
    create_at: Date
});

export const Attention = mongoose.model('Attention', AttenSchema);
export default Attention;