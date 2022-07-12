const express = require("express");

const router = express.Router();

const { getFeature } = require("../db/app");

// 根据语言获取功能数据
router.get("/feature", (req, res) => {
    res.json(getFeature(req));
});

module.exports = router;
