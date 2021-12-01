var express = require("express");
var app = express();

var branchController = require("./controllers/branch");
var userController = require("./controllers/user");
var phoneController = require("./controllers/phone");
var managerController = require("./controllers/manager");
var customerController = require("./controllers/customer");
var promotionController = require("./controllers/promotion");
var staffController = require("./controllers/staff");
var supervisorController = require("./controllers/supervisor");

var moment = require('moment');
app.locals.moment = moment

app.set("view engine", "pug");
app.use(express.static("public"));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());


app.use("/", userController);
app.use("/user", userController);
app.use("/phone", phoneController);
app.use("/manager", managerController);
app.use("/branch", branchController);
app.use("/customer", customerController);
app.use("/promotion", promotionController);
app.use("/staff",staffController)
app.use("/supervisor",supervisorController)

app.listen(5000, function() {
    console.log("Server is listening on port 5000!");
})