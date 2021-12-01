var express = require("express");
var router = express.Router();
var userModel = require("../models/user");
var cardModel = require("../models/card");
var moment = require('moment');

router.get("/", async function (req, res) {
    let cardList = await cardModel.getAll();
    let userList = await userModel.getAll();
    var viewBag = {
        cardList: cardList,
        userList: userList,
    };
    res.render("card/index", viewBag);
});

router.post("/add", async function (req, res) {
    var ma_so_the = req.body.ma_so_the;
    var diem_thuong = req.body.diem_thuong;
    var cap_bac_the = req.body.cap_bac_the;

    try {
        await cardModel.insertOne(ma_so_the, diem_thuong, cap_bac_the);
    } catch (err) {
        console.log(err);
        return res.redirect("/5000");
    }

    return res.redirect("/card");
});

router.post("/edit/", async function (req, res) {
    var ma_so_the = req.body.ma_so_the;
    var diem_thuong = req.body.diem_thuong;
    var cap_bac_the = req.body.cap_bac_the;

    try {
        await cardModel.updateOne(ma_so_the, diem_thuong, cap_bac_the);
    } catch (err) {
        console.log(err);
        res.redirect("/500");
    }

    return res.redirect("/card");
});


router.post("/delete", async function (req, res) {
    var ma_so_the = req.body.ma_so_the;

    try {
        await cardModel.deleteOne(ma_so_the);
    } catch (err) {
        return res.redirect("/500");
    }

    return res.redirect("/card");
});

module.exports = router;
