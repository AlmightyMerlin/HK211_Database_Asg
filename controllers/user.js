var express = require("express");
var router = express.Router();
var userModel = require("../models/user");
var moment = require('moment');

router.get("/", async function (req, res) {
    let userList = await userModel.getAll();
    var viewBag = {
        userList: userList,
    };
    res.render("user/index", viewBag);
});

router.post("/add", async function (req, res) {
    var cmnd = req.body.cmnd;
    var ho_ten = req.body.ho_ten;
    var gioi_tinh = req.body.gioi_tinh;
    var email = req.body.email;
    var dia_chi = req.body.dia_chi;
    var ngay_sinh = moment(req.body.ngay_sinh).format("YYYY-MM-DD");
    
    try {
        await userModel.insertOne(cmnd, ho_ten, gioi_tinh, email, dia_chi, ngay_sinh);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/user");
});

router.post("/edit/", async function (req, res) {
    var cmnd = req.body.cmnd;
    var ho_ten = req.body.ho_ten;
    var gioi_tinh = req.body.gioi_tinh;
    var email = req.body.email;
    var dia_chi = req.body.dia_chi;
    var ngay_sinh = req.body.ngay_sinh;
    try {
        await userModel.updateOne(cmnd, ho_ten, gioi_tinh, email, dia_chi, ngay_sinh);
    } catch (err) {
        console.log(err);
        res.redirect("/500");
    }

    return res.redirect("/user");
});


router.post("/delete", async function (req, res) {
    var cmnd = req.body.cmnd;

    try {
        await userModel.deleteOne(cmnd);
    } catch (err) {
        return res.redirect("/500");
    }

    return res.redirect("/user");
});

module.exports = router;
