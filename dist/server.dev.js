"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _Home = _interopRequireDefault(require("./Routers/Home.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//----------------------------------------------------------import use file-----------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------import use file------------------------------------------------------------------
//router file import
//-------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------declare normal app info space------------------------------------------------------------
var app = (0, _express["default"])();
var port = process.env.port || 5000;
var uri = "mongodb+srv://kimisuha:kimisuha1912@cluster0.ndj1x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(_bodyParser["default"].json({
  limit: '50mb'
}));
app.use(_bodyParser["default"].urlencoded({
  extended: true,
  limit: '50mb'
}));
app.use((0, _cors["default"])()); //-------------------------------------------------------------------------------------------------------------------------------------------

app.set('views', './View');
app.set('view engine', 'pug'); //------------------------------------database atlas connect--------------------------------------------------------------------------------

_mongoose["default"].connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('Success connect database!');
})["catch"](function (err) {
  console.log(err);
}); //-------------------------------------------------------------------------------------------------------------------------------------------


app.use(_Home["default"]); //------------------------------------test space--------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

app.listen(port, function () {
  console.log("server is running on ".concat(port));
});