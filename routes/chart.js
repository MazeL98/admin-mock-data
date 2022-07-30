const express = require("express");

const router = express.Router();
const {
    getOverview,
    getCalendarData,
    getTimePointData,
    getTrend,
} = require("../db/chart");

router.get("/overview", (req, res) => {
    res.json(getOverview(req));
});

router.get("/calendar", (req, res) => {
    res.json(getCalendarData());
});

router.get("/time/balance", (req, res) => {
    res.json(getTimePointData(req));
});

router.get("/trend", (req, res) => {
    res.json(getTrend(req));
});

module.exports = router;
