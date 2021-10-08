import mongoose from "mongoose";
import Schema from "mongoose";

const KhoaSchema = new mongoose.Schema({

    khoa_id: Schema.Types.ObjectId,
    tenkhoa: String,
    tentruongkhoa: String,
    gioithieu: String
});

export const Khoa = mongoose.model('Khoa', KhoaSchema);
export default Khoa;