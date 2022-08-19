import createError from "http-errors";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

const app = express();
const __dirname = path.resolve();
// 引入各模块的路由
import permission from "./routes/permission.js";
import staffManage from "./routes/staff-manage.js";
import sys from "./routes/sys.js";

import role from "./routes/role.js";
import article from "./routes/article.js";
import chart from "./routes/chart.js";

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/sys", sys);
app.use("/staff-manage", staffManage);
app.use("/permission", permission);
app.use("/role", role);
app.use("/article", article);
app.use("/chart", chart);

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

export default app;
