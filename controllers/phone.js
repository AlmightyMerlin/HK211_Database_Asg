var express = require("express");
var router = express.Router();
var phoneModel = require("../models/phone");
var userModel = require("../models/user");
var moment = require('moment');


router.get("/", async function (req, res) {
    let phoneList = await phoneModel.getAll();
    let userList = await userModel.getAll();
    var viewBag = {
        phoneList: phoneList,
        userList: userList,
    };
    res.render("phone/index", viewBag);
});

router.post("/add", async function (req, res) {
    var cmnd = req.body.cmnd;
    var so_dien_thoai = req.body.so_dien_thoai;

    try {
        await phoneModel.insertOne(cmnd, so_dien_thoai);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/phone");
});

router.post("/edit/", async function (req, res) {
    var cmnd = req.body.cmnd;
    var so_dien_thoai = req.body.so_dien_thoai;

    try {
        await phoneModel.updateOne(cmnd, so_dien_thoai);
    } catch (err) {
        console.log(err);
        res.redirect("/500");
    }

    return res.redirect("/phone");
});


router.post("/delete", async function (req, res) {
    var cmnd = req.body.cmnd;

    try {
        await phoneModel.deleteOne(cmnd);
    } catch (err) {
        console.log(err);
        return res.redirect("/500");
    }

    return res.redirect("/phone");
});

module.exports = router;
