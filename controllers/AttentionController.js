
import Attention from "../models/Attention.js";

export const AttentionView = async (req, res) => {
    const info = await Attention.findById(req.params.a_id);
    /* if (Object.keys(info).length === 0 && info.constructor === Object) {
        res.render('CardAtten.pug', {
            'message': "can't find this document!",
            'class': "btn-warning",
            'info': Info
        });
    } */
    if (info != null) {
        res.status(200).send(info);
    } else {
        res.status(500);
    }
    /* 
        res.render('AttenDetail.pug', {
            "message": "detail for " + req.params.a_id,
            "info": info
        }); */

}

/* export const CreateAttenView = (req, res) => {
    res.render('CreateAtten.pug');
}
 */
export const CreateAtten = async (req, res) => {
    const Info = req.body;
    /* try {
        const newAtten = await new Attention(Info);
        newAtten.save();

        res.render('CardAtten.pug', {
            'message': "success create attention",
            'class': "btn-success",
            'info': Info
        });
    } catch (err) {
        res.render('cardAtten.pug', {
            'message': "fail create attention",
            'class': "btn-warning",
            'err': err,
            'info': Info
        });
    } */

    try {
        const newAtten = await new Attention(Info);
        newAtten.save();

        res.status(200);
    } catch (err) {
        res.status(500).send(err);
    }
}



