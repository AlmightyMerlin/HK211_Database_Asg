var express = require("express");
var router = express.Router();
var dangkyModel = require("../models/dangky");
var moment = require('moment');

router.get("/", async function (req, res) {
    let dangkyList = await dangkyModel.getAll();
    var viewBag = {
        dangkyList: dangkyList,
    };
    res.render("dangky/index", viewBag);
});

router.post("/add", async function (req, res) {
    var msnv = req.body.msnv;
    var ma_so_the = req.body.ma_so_the;
    var mskh = req.body.mskh;
    var ngay_dang_ky = moment(req.body.ngay_dang_ky).format("YYYY-MM-DD");
    
    try {
        await dangkyModel.insertOne(msnv, ma_so_the, mskh, ngay_dang_ky);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/dangky");
});

router.post("/edit/", async function (req, res) {
    var msnv = req.body.msnv;
    var ma_so_the = req.body.ma_so_the;
    var mskh = req.body.mskh;
    var ngay_dang_ky = req.body.ngay_dang_ky;
    try {
        await dangkyModel.updateOne(msnv, ma_so_the, mskh, ngay_dang_ky);
    } catch (err) {
        console.log(err);
        res.redirect("/500");
    }

    return res.redirect("/dangky");
});


router.post("/delete", async function (req, res) {
    var cmnd = req.body.cmnd;

    try {
        await dangkyModel.deleteOne(cmnd);
    } catch (err) {
        return res.redirect("/500");
    }

    return res.redirect("/dangky");
});

module.exports = router;
