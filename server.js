//----------------------------------------------------------import use file-----------------------------------------------------------------

import express from "express";
import Mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
//-------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------import use file------------------------------------------------------------------

//router file import
import Home from "./Home.js";
//import User from "./models/User.js";
//-------------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------declare normal app info space------------------------------------------------------------

const app = express();
const port = process.env.port || 5000;
const uri = "mongodb+srv://kimisuha:kimisuha1912@cluster0.ndj1x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const upload = multer();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(cors());
app.use(upload.array()); 
app.use(express.static('public'));
//-------------------------------------------------------------------------------------------------------------------------------------------


app.set('views', './View');
app.set('view engine', 'pug');

//------------------------------------database atlas connect--------------------------------------------------------------------------------

Mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Success connect database!');
    }).catch((err) => {
        console.log(err)
    })
//-------------------------------------------------------------------------------------------------------------------------------------------

app.use(Home);

//------------------------------------test space--------------------------------------------------------------------------------
/*  app.get('/test', (req, res) => {
    const x = {
        title: "title",
        test: "something"
    }

    res.render('test.pug', { x });
})  */
//-------------------------------------------------------------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})