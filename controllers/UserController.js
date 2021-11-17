import User from "../models/User.js";

export const UserInfo = async (req, res) => {

    const info = await User.findById(req.params.u_id);
    /* if (Object.keys(info).length === 0 && info.constructor === Object) {
        res.render('CardAtten.pug', {
            'message': "can't find this document!",
            'class': "btn-warning",
            'info': info
        });
    }

    res.render('UserDetail.pug', {
        "message": "detail for " + req.params.u_id,
        "info": info
    }) */
    if(info != null){
        res.status(200).send(info);
    }
    else{
        res.status(500);
    }
}

/* export const NewUserView = (req, res) => {

    res.setTimeout(12000);
    res.render('AddUser.pug');
} */

export const NewUser = async (req, res) => {
    const Info = req.body;
    try {
        const newUser = new User(Info);
        await newUser.save();
        res.status(200).send(newUser);

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
    const info =  await User.findById(id);

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

