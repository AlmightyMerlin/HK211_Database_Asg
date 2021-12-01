var express = require("express");
var router = express.Router();
var staffModel = require("../models/staff");
var moment = require('moment');

router.get("/", async function (req, res) {
    let staffList = await staffModel.getAll();
    var viewBag = {
        staffList: staffList,
    };
    res.render("staff/index", viewBag);
});

router.post("/add", async function (req, res) {
    var cmnd = req.body.cmnd;
    var ma_nguoi_giam_sat = req.body.ma_nguoi_giam_sat;
    var msnv = req.body.msnv;
    
    try {
        await staffModel.insertOne(cmnd, ma_nguoi_giam_sat, msnv);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/staff");
});

router.post("/edit/", async function (req, res) {
    var cmnd = req.body.cmnd;
    var ma_nguoi_giam_sat = req.body.ma_nguoi_giam_sat;
    var msnv = req.body.msnv;
    try {
        await staffModel.updateOne(cmnd, ma_nguoi_giam_sat, msnv);
    } catch (err) {
        console.log(err);
        res.redirect("/500");
    }

    return res.redirect("/staff");
});


router.post("/delete", async function (req, res) {
    var cmnd = req.body.cmnd;

    try {
        await staffModel.deleteOne(cmnd);
    } catch (err) {
        return res.redirect("/500");
    }

    return res.redirect("/staff");
});

module.exports = router;
