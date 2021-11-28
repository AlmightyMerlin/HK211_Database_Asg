var express = require("express");
var app = express();

var homeController = require('./controllers/home');
var facultyController = require("./controllers/faculty");
var userController = require("./controllers/user");
var phoneController = require("./controllers/phone");
var phoneController = require("./controllers/manager");

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
app.use("/faculty", facultyController);
app.use("/user", userController);
app.use("/phone", phoneController);
app.use("/manager", phoneController);

app.listen(5000, function() {
    console.log("Server is listening on port 5000!");
})