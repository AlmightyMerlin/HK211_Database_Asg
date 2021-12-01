var express = require("express");
var router = express.Router();
var customerModel = require("../models/customer");
var userModel = require("../models/user");  
var moment = require('moment');

router.get("/", async function (req, res) {
    let customerList = await customerModel.getAll();
    let userList = await userModel.getAll();
    var viewBag = {
        customerList: customerList,
        userList: userList,
    };
    res.render("customer/index", viewBag);
});

// router.post("/add", async function (req, res) {
//     var cmnd = req.body.cmnd;
//     var mskh = req.body.mskh;
    
//     try {
//         await customerModel.insertOne(cmnd, mskh);
//     } catch (err) {
//         console.log(err);    
//         return res.redirect("/5000");
//     }

//     return res.redirect("/customer");
// });

router.post("/edit/", async function (req, res) {
    var cmnd = req.body.cmnd;
    var mskh = req.body.mskh;
    try {
        await customerModel.updateOne(cmnd, mskh);
    } catch (err) {
        console.log(err);
        res.redirect("/500");
    }

    return res.redirect("/customer");
});


router.post("/delete", async function (req, res) {
    var cmnd = req.body.cmnd;

    try {
        await customerModel.deleteOne(cmnd);
    } catch (err) {
        console.log(err);
        return res.redirect("/500");
    }

    return res.redirect("/customer");
});

module.exports = router;
