var express = require("express");
var app = express();

var homeController = require('./controllers/home');
var userController = require("./controllers/user");
var customerController = require("./controllers/customer");
var phoneController = require("./controllers/phone");
var cardController = require("./controllers/card");
var managerController = require("./controllers/manager");

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


app.use("/", homeController);
app.use("/user", userController);
app.use("/customer", customerController);
app.use("/phone", phoneController);
app.use("/card", cardController);
app.use("/manager", managerController);

app.listen(5000, function() {
    console.log("Server is listening on port 5000!");
})