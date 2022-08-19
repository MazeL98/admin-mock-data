import express from "express";
import Mock from "mockjs";
import {
    getStaffList,
    addStaff,
    deleteStaff,
    getAllStaffList,
    getStaffInfo,
    getStaffRoles,
    updateRoles,
} from "../db/staff-manage.js";

const router = express.Router();

// 根据page&size参数返回相应员工列表
router.get("/list", (req, res) => {
    res.json(getStaffList(req));
});

// 添加员工信息
router.post("/list", (req, res) => {
    res.json(Mock.mock(addStaff(req)));
});

// 删除某个员工信息
router.get("/delete", (req, res) => {
    res.json(Mock.mock(deleteStaff(req)));
});

// 获取所有员工数据列表
router.get("/all-list", (req, res) => {
    res.json(getAllStaffList(req));
});

// 获取指定员工数据
router.get("/:id", (req, res) => {
    res.json(getStaffInfo(req));
});

// 获取指定员工的角色
router.get("/role/:id", (req, res) => {
    res.json(Mock.mock(getStaffRoles(req)));
});

// 更新员工的角色
router.post("/update-role/:id", (req, res) => {
    res.json(updateRoles(req));
});

export default router;
