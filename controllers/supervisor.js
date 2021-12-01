var express = require("express");
var router = express.Router();
var supervisorModel = require("../models/supervisor");
var userModel = require("../models/user");
var moment = require('moment');


router.get("/", async function (req, res) {
    let supervisorList = await supervisorModel.getAll();
    let userList = await userModel.getAll();
    var viewBag = {
        supervisorList: supervisorList,
        userList: userList,
    };
    res.render("supervisor/index", viewBag);
});

router.post("/add", async function (req, res) {
    var ma_nguoi_giam_sat = req.body.ma_nguoi_giam_sat;
    try {
        await supervisorModel.insertOne(ma_nguoi_giam_sat);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/supervisor");
});

router.post("/edit/", async function (req, res) {
    var cmnd = req.body.cmnd;
    var so_dien_thoai = req.body.so_dien_thoai;

    try {
        await supervisorModel.updateOne(ma_nguoi_giam_sat);
    } catch (err) {
        console.log(err);
        res.redirect("/500");
    }

    return res.redirect("/supervisor");
});


router.post("/delete", async function (req, res) {
    var ma_nguoi_giam_sat = req.body.ma_nguoi_giam_sat;

    try {
        await supervisorModel.deleteOne(ma_nguoi_giam_sat);
    } catch (err) {
        console.log(err);
        return res.redirect("/500");
    }

    return res.redirect("/supervisor");
});

module.exports = router;
