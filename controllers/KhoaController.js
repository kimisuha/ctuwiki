import Khoa from "../models/Khoa.js";


export const KhoaView = async (req, res) => {
    const info = await Khoa.findById(req.params.khoa_id);
    /* if (Object.keys(info).length === 0 && info.constructor === Object) {
        res.render('CardAtten.pug', {
            'message': "can't find this document!",
            'class': "btn-warning",
            'info': Info
        });
    }

    res.render('KhoaDetail.pug', {
        "message": "detail for " + req.params.khoa_id,
        "info": info
    }); */

    if (info != null) {
        res.status(200).send(info);
    } else {
        res.status(500);
    }
}
/* 
export const KhoaCreateView = (req, res) => {
    res.render('CreateKhoa.pug');
} */

export const KhoaCreate = async (req, res) => {
    const info = req.body;
    try {

        const newKhoa = await new Khoa(info);
        newKhoa.save();

        res.status(200)

    } catch (err) {
        res.status(500).send(err);
    }
/*     res.status(200).render('CardAtten.pug', {
        'message': "success create khoa!",
        'class': "btn-success",
        'info': info
    }); */
}

export const UpdateKhoaView = async (req, res) => {
    const info = await Khoa.findById(req.params.khoa_id);
    /* const url = "http://localhost:5000/update-khoa/" + info._id;
    res.render('UpdateKhoa.pug', { info, url }); */
    res.status(200).send(info);
}

export const UpdateKhoa = async (req, res) => {
    const info = {
        id: req.params.khoa_id,
        change: req.body
    };
    try {
        await Khoa.findByIdAndUpdate(info.id, info.change);
        const afterUpdate = await Khoa.findById(info.id);

        res.status(200);/* .render('CardAtten.pug', {
            'message': "success update khoa",
            'class': "btn-success",
            'info': afterUpdate
        }); */
    } catch (err) {
        res.status(500).send(err);/* render('CardAtten', {
            'message': "error",
            'class': "btn-warning",
            'err': err,
            'info': afterUpdate
        }); */
    }
}

/* export const KhoaDelView = async (req, res) => {
    const info = await Khoa.findById(req.params.khoa_id);
    const url = "http://localhost:5000/delete-khoa/" + info._id;
    res.render('DelKhoa.pug', { url, info });
} */

export const KhoaDel = async (req, res) => {
    const id = req.params.khoa_id;
    const info = await Khoa.findById(id);

    try {
        await Khoa.findByIdAndDelete(info._id);
        /* res.render('CardAtten.pug', {
            'message': "success delete khoa",
            'class': "btn-success",
            'info': info
        }) */

        res.status(200);
    } catch (err) {
        /* res.render('CardAtten.pug', {
            'message': "fail delete khoa",
            'class': "btn-warning",
            'err': err,
            'info': info
        }); */

        res.status(500).send(err);
    }
}

