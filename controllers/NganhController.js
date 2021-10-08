
import Nghanh from "../models/Nganh.js";

export const NghanhView = async (req, res) => {
    const info = await Nghanh.findById(req.params.nganh_id);
    if (Object.keys(info).length === 0 && info.constructor === Object) {
        res.render('CardAtten.pug', {
            'message': "can't find this document!",
            'class': "btn-warning",
            'info': Info
        });
    }

    res.render('NghanhDetail.pug', {
        "message": "detail for " + req.params.nganh_id,
        "info": info
    })
}

export const CreateNganhView = (req, res) => {
    res.render('CreateNghanh.pug');
}

export const CreateNganh = async (req, res) => {
    const info = req.body;

    try {
        const newNghanh = await new Nghanh(info);
        newNghanh.save();

        res.render('CardAtten.pug', {
            'message': "success create nghanh!",
            'class': "btn-success",
            'info': info
        });
    } catch (err) {
        res.render('CardAtten.pug', {
            'message': "fail create nghanh",
            'class': "btn-warning",
            'error': err,
            'info': info
        });
    }
}

export const UpdateNganhView = async  (req, res) => {
    const info = await Nghanh.findById(req.params.nghanh_id);
    const url = "http://localhost:5000/update-nghanh/" + info._id;
    res.render('UpdateNghanh.pug', { url, info });
    //res.send(info);
}

export const UpdateNganh = async (req, res) => {
    const info = {
        id: req.params.nghanh_id,
        change: req.body
    };

    try {
        await Nghanh.findByIdAndUpdate(info.id, info.change);
        const afterUpdate = Nghanh.findById(info.id);

        res.render('CardAtten.pug', {
            'message': "success update nghanh",
            'class': "btn-success",
            'info': afterUpdate
        });
    } catch (err) {
        res.render('CardAtten.pug', {
            'message': "fail update nghanh",
            'class': "btn-warning",
            'error': err,
            "info": info
        });
    }
}

export const DeleteNganhView = async (req, res) => {
    const info = await Nghanh.findById(req.params.nganh_id);
    const url = "http://localhost:5000/delete-nghanh/" + info._id
    res.render('DelNghanh', { url, info });
}

export const DeleteNganh = async (req, res) => {
    const id = req.params.nganh_id;
    const info = await Nghanh.findById(id);

    try {
        await Nghanh.findByIdAndDelete(id);
        res.render('CardAtten.pug', {
            'message': "success delete nghanh",
            'class': "btn-success",
            'info': info
        });
    } catch (err) {
        res.render('CardAtten.pug', {
            'message': "fail delete nghanh",
            'class': "btn-warning",
            'error': err,
            "info": info
        });
    }
}

