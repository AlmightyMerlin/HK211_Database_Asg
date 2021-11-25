var express = require("express");
var router = express.Router();
var facultyModel = require("../models/faculty");

router.get("/", async function (req, res) {
    let facultyList = await facultyModel.getAll();
    var viewBag = {
        facultyList: facultyList,
    };
    res.render("faculty/index", viewBag);
});

router.post("/add", async function (req, res) {
    var name = req.body.name;
    var eyear = req.body.eyear;
    try {
        await facultyModel.insertOne(name, eyear);
    } catch (err) {
        return res.redirect("/5000");
    }

    return res.redirect("/faculty");
});

router.post("/edit/", async function (req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var eyear = req.body.eyear;
    try {
        await facultyModel.updateOne(id, name, eyear);
    } catch (err) {
        res.redirect("/500");
    }

    return res.redirect("/faculty");
});


router.post("/delete", async function (req, res) {
    var id = req.body.id;

    try {
        await facultyModel.deleteOne(id);
    } catch (err) {
        return res.redirect("/500");
    }

    return res.redirect("/faculty");
});

module.exports = router;
