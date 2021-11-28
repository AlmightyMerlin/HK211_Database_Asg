var express = require("express");
var router = express.Router();
var managerModel = require("../models/manager");
var moment = require('moment');


router.get("/", async function (req, res) {
    let managerList = await managerModel.getAll();
    var viewBag = {
        managerList: managerList,
    };
    res.render("manager/index", viewBag);
});

router.post("/add", async function (req, res) {
    var msnv = req.body.msnv;
    var ma_chi_nhanh = req.body.ma_chi_nhanh;
    var ngay_bat_dau = req.body.ngay_bat_dau;

    try {
        await managerModel.insertOne(msnv, ma_chi_nhanh, ngay_bat_dau);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/manager");
});

router.post("/edit/", async function (req, res) {
    var msnv = req.body.msnv;
    var ma_chi_nhanh = req.body.ma_chi_nhanh;
    var ngay_bat_dau = req.body.ngay_bat_dau;

    try {
        await managerModel.updateOne(msnv, ma_chi_nhanh, ngay_bat_dau);
    } catch (err) {
        console.log(err);
        res.redirect("/500");
    }

    return res.redirect("/manager");
});


router.post("/delete", async function (req, res) {
    var msnv = req.body.msnv;

    try {
        await managerModel.deleteOne(msnv);
    } catch (err) {
        console.log(err);
        return res.redirect("/500");
    }

    return res.redirect("/manager");
});

module.exports = router;
