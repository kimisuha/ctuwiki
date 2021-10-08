import mongoose from "mongoose";
import Schema from "mongoose";


const NghanhSchema = new mongoose.Schema({

    nghanh_id: Schema.Types.ObjectId,
    tennghanh: String,
    gioithieu: String,
    makhoa: {
        type: Schema.Types.ObjectId,
        ref: 'Khoa'
    }
});

export const Nghanh = mongoose.model('Nghanh', NghanhSchema);
export default Nghanh;