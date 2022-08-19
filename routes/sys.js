import express from "express";
import { login, getUserProfile } from "../db/sys.js";

const router = express.Router();

// 首次登录获取token
router.post("/login", (req, res) => {
    res.json(login(req));
});

// 根据token获取用户资料
router.get("/profile", (req, res) => {
    res.json(getUserProfile(req));
});

export default router;
