import User from "../models/User.js";
import Attention from "../models/Attention.js";
import Khoa from "../models/Khoa.js";
import Nghanh from "../models/Nganh.js";


export const HomeController = async (req, res) => {

    res.render('Home.pug', {
        user: await User.find(),
        attention: await Attention.find(),
        khoa: await Khoa.find(),
        nghanh: await Nghanh.find()
    });
};


