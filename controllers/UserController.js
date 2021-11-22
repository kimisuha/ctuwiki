import User from "../models/User.js";

export const UserInfo = async (req, res) => {
    const info = await User.findById(req.params.u_id);
    
    try {
        res.status(200).send(info);
    } catch (err) {
        res.status(500).send(err);
    }
    
}

export const NewUser = async (req, res) => {
    const Info = req.body;
    try {
        const newUser = await new User(Info);
        newUser.save();
        res.status(200);

    } catch (err) {
        res.status(500).send(err);
    }
    /* return res.render('CardAtten.pug', {
        'message': "success update for user",
        'class': "btn-success",
        'info': Info,
    }); */
}

export const UpdateUserView = async (req, res) => {
    const info = await User.findById(req.params.u_id);
    /* const url = "http://localhost:5000/update-user/" + info._id;
    res.render('UpdateUser.pug', { info, url }); */
    res.status(200).send(info);
    //res.send(url);
}

export const UpdateUser = async (req, res) => {
    const info = {
        id: req.params.u_id,
        change: req.body
    }

    try {
        await User.findByIdAndUpdate(info.id, info.change)
        const afterUpdate = User.findById(info.id);
        /* res.render('CardAtten.pug', {
            'message': "success update for user",
            'class': "btn-success",
            'info': afterUpdate
        }); */

        res.status(200).send(afterUpdate);
    } catch (err) {
        /* res.render('CardAtten.pug', {
            'message': "success update for user",
            'info': updateVal,
            'class': "btn-waring",
            'error': err,
        }); */
        res.status(500).send(err);
    }
    //res.send(req.body);
}

/* export const DeleteUserView = async (req, res) => {
    const info = await User.findById(req.params.u_id);
    const url = "http://localhost:5000/delete-user/" + info._id;
    res.render('UserDel.pug', { info, url });
} */

export const DeleteUser = async (req, res) => {
    const id = req.params.u_id;
    const info = await User.findById(id);

    try {

        await User.findByIdAndDelete(id);
        /* res.render('CardAtten.pug', {
            'message': "success delete user",
            'class': "btn-success",
            'info': info
        }); */

        res.status(200);

    } catch (err) {
        /* res.render('CardAtten.pug', {
            'info': updateVal,
            'class': "btn-waring",
            'error': err,
            'info': info
        }); */

        res.status(500).send(err);
    }
}

