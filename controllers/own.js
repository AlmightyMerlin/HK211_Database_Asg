var express = require("express");
var router = express.Router();
var ownModel = require("../models/own");
var moment = require('moment');


router.get("/", async function (req, res) {
    let ownList = await ownModel.getAll();
    var viewBag = {
        ownList: ownList,
    };
    res.render("own/index", viewBag);
});

router.post("/add", async function (req, res) {
    var mskh = req.body.mskh;
    var ma_so_the = req.body.ma_so_the;
    var ngay_dang_ky = req.body.ngay_dang_ky;

    try {
        await ownModel.insertOne(mskh, ma_so_the, ngay_dang_ky);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/own");
});

router.post("/edit/", async function (req, res) {
    var mskh = req.body.mskh;
    var ma_so_the = req.body.ma_so_the;
    var ngay_dang_ky = req.body.ngay_dang_ky;

    try {
        await ownModel.updateOne(mskh, ma_so_the, ngay_dang_ky);
    } catch (err) {
        console.log(err);
        res.redirect("/5000");
    }

    return res.redirect("/own");
});


router.post("/delete", async function (req, res) {
    var mskh = req.body.mskh;

    try {
        await ownModel.deleteOne(mskh);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/own");
});

module.exports = router;
