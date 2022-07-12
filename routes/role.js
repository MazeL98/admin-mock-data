const express = require("express");

const router = express.Router();

const {
    getRoleList,
    getPermission,
    distributePermission,
} = require("../db/role");

// 获取角色列表
router.get("/list", (req, res) => {
    res.json(getRoleList(req));
});
// 获取指定角色的权限
router.get("/:roleId", (req, res) => {
    res.json(getPermission(req));
});

// 更新角色的权限
router.post("/distribute-permission", (req, res) => {
    res.json(distributePermission(req));
});
module.exports = router;
