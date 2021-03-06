const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");

// 引入各模块的路由
const appRouter = require("./routes/app");
const sys = require("./routes/sys");
const staffManage = require("./routes/staff-manage");
const permission = require("./routes/permission");
const role = require("./routes/role");
const article = require("./routes/article");
const chart = require("./routes/chart");

// 初始化默认
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/app", appRouter);
app.use("/sys", sys);
app.use("/staff-manage", staffManage);
app.use("/permission", permission);
app.use("/role", role);
app.use("/article", article);
app.use("/chart", chart);
// 初始化默认
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
