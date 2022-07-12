const express = require("express");

const router = express.Router();

const { login, getUserProfile } = require("../db/sys");
// 首次登录获取token
router.post("/login", (req, res) => {
    res.json(login(req));
});

// 根据token获取用户资料
router.get("/profile", (req, res) => {
    res.json(getUserProfile(req));
});

module.exports = router;
