const express = require("express");

const router = express.Router();
const { getAllPermission } = require("../db/permission");

// 获取所有权限列表
router.get("/list", (req, res) => {
    res.json(getAllPermission(req));
});
module.exports = router;
