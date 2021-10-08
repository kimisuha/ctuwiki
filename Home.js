import express, { Router } from "express";
//-------------------------------------------------------import controller space-------------------------------------------------------------

import { HomeController, } from "./controllers/HomeController.js";
import {
    UserInfo,
    NewUserView, NewUser,
    UpdateUserView, UpdateUser,
    DeleteUserView, DeleteUser
} from "./controllers/UserController.js";

import {
    AttentionView,
    CreateAttenView, CreateAtten
} from "./controllers/AttentionController.js";

import {
    KhoaView,
    KhoaCreateView, KhoaCreate,
    UpdateKhoaView, UpdateKhoa,
    KhoaDelView, KhoaDel
} from "./controllers/KhoaController.js";

import {
    NghanhView,
    CreateNganhView, CreateNganh,
    UpdateNganhView, UpdateNganh,
    DeleteNganhView, DeleteNganh
} from "./controllers/NganhController.js";
import { AdminView } from "./controllers/AdminController.js";
//-------------------------------------------------------------------------------------------------------------------------------------------

const route = express.Router();

//----------------------------------------------------------route declare space----------------------------------------------------------

route.get('/', HomeController);
route.get('/admin', AdminView);
//------------user-------------------------------------

route.get('/user/:u_id', UserInfo);

route.get('/new-user', NewUserView);
route.post('/new-user', NewUser);

route.get('/update-user/:u_id', UpdateUserView);
route.post('/update-user/:u_id', UpdateUser);

route.get('/delete-user/:u_id', DeleteUserView);
route.post('/delete-user/:u_id', DeleteUser);

//------------khoa-----------------------------------------

route.get('/khoa/:khoa_id', KhoaView);

route.get('/create-khoa', KhoaCreateView);
route.post('/create-khoa', KhoaCreate);

route.get('/update-khoa/:khoa_id', UpdateKhoaView);
route.post('/update-khoa/:khoa_id', UpdateKhoa);

route.get('/delete-khoa/:khoa_id', KhoaDelView);
route.post('/delete-khoa/:khoa_id', KhoaDel);

//-------------nghanh----------------------------------------

route.get('/nghanh/:nganh_id', NghanhView);

route.get('/create-nghanh', CreateNganhView);
route.post('/create-nghanh', CreateNganh);

route.get('/update-nghanh/:nghanh_id', UpdateNganhView);
route.post('/update-nghanh/:nghanh_id', UpdateNganh);

route.get('/delete-nghanh/:nganh_id', DeleteNganhView);
route.post('/delete-nghanh/:nganh_id', DeleteNganh);

//------------attention-----------------------------------------

route.get('/attention/:a_id', AttentionView);

route.get('/create-attention', CreateAttenView);
route.post('/create-attention', CreateAtten)
//-------------------------------------------------------------------------------------------------------------------------------------------


export default route;