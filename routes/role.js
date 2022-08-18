import express from "express";
import { getRoleList, getPermission, distributePermission } from "../role.js";

const router = express.Router();

// 获取角色列表
router.get("/list", (req, res) => {
    res.json(getRoleList(req));
});
// 获取指定角色的权限
router.get("/permission/:roleId", (req, res) => {
    res.json(getPermission(req));
});

// 更新角色的权限
router.post("/distribute-permission", (req, res) => {
    res.json(distributePermission(req));
});

export default router;
