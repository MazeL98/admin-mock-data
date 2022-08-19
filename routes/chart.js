import express from "express";
import {
    getOverview,
    getCalendarData,
    getTimePointData,
    getTrend,
} from "../db/chart.js";

const router = express.Router();

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

export default router;
