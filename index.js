var express = require("express");
var app = express();

var homeController = require('./controllers/home');
var facultyController = require("./controllers/faculty");
var userController = require("./controllers/user");
var phoneController = require("./controllers/phone");
var promotionController = require("./controllers/promotion")
var staffController = require("./controllers/staff")
var dangkyController = require("./controllers/dangky");
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
app.use("/promotion", promotionController);
app.use("/staff",staffController)
app.use("/dangky", dangkyController);

app.listen(5000, function() {
    console.log("Server is listening on port 5000!");
})
