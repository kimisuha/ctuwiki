import User from "../models/User.js";
import Attention from "../models/Attention.js";
import Khoa from "../models/Khoa.js";
import Nghanh from "../models/Nganh.js";

export const AdminView = async (req, res) => {

    try {
        const user = await User.find();
        const atten = await Attention.find();
        const khoa = await Khoa.find();
        const nghanh = await Nghanh.find();

        res.status(200).render('Admin.pug', {
            "user": user,
            "atten": atten,
            "khoa": khoa,
            "nghanh": nghanh
        });
    } catch (err) {
        res.render(' ', {
            'err': err
        });
    }
}


