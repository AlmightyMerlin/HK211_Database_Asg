var express = require("express");
var router = express.Router();
var branchModel = require("../models/branch");
var moment = require('moment');


router.get("/", async function (req, res) {
    let branchList = await branchModel.getAll();
    var viewBag = {
        branchList: branchList,
    };
    res.render("branch/index", viewBag);
});

router.post("/add", async function (req, res) {
    var ma_chi_nhanh = req.body.ma_chi_nhanh;
    var dia_chi = req.body.dia_chi;
    var ten_chi_nhanh = req.body.ten_chi_nhanh;

    try {
        await branchModel.insertOne(dia_chi, ma_chi_nhanh, ten_chi_nhanh);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/branch");
});

router.post("/edit/", async function (req, res) {
    var ma_chi_nhanh = req.body.ma_chi_nhanh;
    var dia_chi = req.body.dia_chi;
    var ten_chi_nhanh = req.body.ten_chi_nhanh;

    try {
        await branchModel.updateOne(dia_chi, ma_chi_nhanh, ten_chi_nhanh);
    } catch (err) {
        console.log(err);
        res.redirect("/5000");
    }

    return res.redirect("/branch");
});


router.post("/delete", async function (req, res) {
    var ma_chi_nhanh = req.body.ma_chi_nhanh;

    try {
        await branchModel.deleteOne(ma_chi_nhanh);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/branch");
});

module.exports = router;
