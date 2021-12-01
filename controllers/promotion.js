var express = require("express");
var router = express.Router();
var promotionModel = require("../models/promotion");
var moment = require('moment');

router.get("/", async function (req, res) {
    let promotionList = await promotionModel.getAll();
    var viewBag = {
        promotionList: promotionList,
    };
    res.render("promotion/index", viewBag);
});

router.post("/add", async function (req, res) {
    var ma_khuyen_mai = req.body.ma_khuyen_mai;
    var ten_khuyen_mai = req.body.ten_khuyen_mai;
    var ngay_ap_dung = moment(req.body.ngay_ap_dung).format("YYYY-MM-DD");
    var ngay_het_han = moment(req.body.ngay_het_han).format("YYYY-MM-DD");

    
    try {
        await promotionModel.insertOne(ma_khuyen_mai, ten_khuyen_mai, ngay_ap_dung, ngay_het_han);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/promotion");
});

router.post("/edit/", async function (req, res) {
    var ma_khuyen_mai = req.body.ma_khuyen_mai;
    var ten_khuyen_mai = req.body.ten_khuyen_mai;
    var ngay_ap_dung = req.body.ngay_ap_dung;
    var ngay_het_han = req.body.ngay_het_han;

    try {
        await promotionModel.updateOne(ma_khuyen_mai, ten_khuyen_mai, ngay_ap_dung, ngay_het_han);
    } catch (err) {
        console.log(err);
        res.redirect("/500");
    }

    return res.redirect("/promotion");
});


router.post("/delete", async function (req, res) {
    var ma_khuyen_mai =  req.body.ma_khuyen_mai;

    try {
        await promotionModel.deleteOne(ma_khuyen_mai);
    } catch (err) {
        console.log(err);
        return res.redirect("/500");
    }

    return res.redirect("/promotion");
});

module.exports = router;
