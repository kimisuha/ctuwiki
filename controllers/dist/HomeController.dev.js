"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeController = void 0;

var _Nganh = require("../models/Nganh.js");

var _Khoa = require("../models/Khoa.js");

var _Attention = require("../models/Attention.js");

var _User = require("../models/User.js");

var HomeController = function HomeController(req, res) {
  res.render('Home.pug');
};
/* export const Test = (req, res) =>{
    res.send("Success");
}; */


exports.HomeController = HomeController;