import Mock from "mockjs";
const Random = Mock.Random;
import { param2Obj, sliceId } from "./utils.mjs";
import { zhRoleList, enRoleList } from "./role.mjs";

let list = [
    {
        role: { 1: "Super-Admin" },
        _id: "7CDEA40F-e743-7e3A-c13c-eEfaE8Cc48C8",
        id: "CefDe47C-B0e7-41e6-B9F4-f947BdFeaA06",
        openTime: "2019-05-29",
        username: "super-admin",
        mobile: "13267842991",
        avatar: "http://rfsjnlrct.hn-bkt.clouddn.com/super-admin.png",
    },
    {
        role: { 2: "Admin" },
        _id: "4WEA40F-e743-7e3A-c13c-eEfaE9Ty8C8",
        id: "4WEA40F-e743-7e3A-c13c-eEfaE9Ty8C8",
        openTime: "2021-05-05",
        username: "admin",
        mobile: "13195426971",
        avatar: "http://rfsjnlrct.hn-bkt.clouddn.com/admin.png",
    },
    {
        role: { 6: "Staff" },
        _id: "4WEA40F-e462-9t3X-c13R-eEoSt9Ty8C8",
        id: "4WEA40F-e462-9t3X-c13R-eEoSt9Ty8C8",
        openTime: "2022-03-14",
        username: "test",
        mobile: "15965248169",
        avatar: "http://rfsjnlrct.hn-bkt.clouddn.com/test.png",
    },
];
let zhList = [
    {
        role: { 1: "超级管理员" },
        _id: "7CDEA40F-e743-7e3A-c13c-eEfaE8Cc48C8",
        id: "CefDe47C-B0e7-41e6-B9F4-f947BdFeaA06",
        openTime: "2019-05-29",
        username: "super-admin",
        mobile: "13267842991",
        avatar: "http://rfsjnlrct.hn-bkt.clouddn.com/super-admin.png",
    },
    {
        role: { 2: "管理员" },
        _id: "4WEA40F-e743-7e3A-c13c-eEfaE9Ty8C8",
        id: "4WEA40F-e743-7e3A-c13c-eEfaE9Ty8C8",
        openTime: "2021-05-05",
        username: "admin",
        mobile: "13195426971",
        avatar: "http://rfsjnlrct.hn-bkt.clouddn.com/admin.png",
    },
    {
        role: { 6: "员工" },
        _id: "4WEA40F-e462-9t3X-c13R-eEoSt9Ty8C8",
        id: "4WEA40F-e462-9t3X-c13R-eEoSt9Ty8C8",
        openTime: "2022-03-14",
        username: "test",
        mobile: "15965248169",
        avatar: "http://rfsjnlrct.hn-bkt.clouddn.com/test.png",
    },
];
let pageList = [];
let count = 30;
let i = 0;
for (i; i < count; i++) {
    list.push(
        Mock.mock({
            "role|1": {
                1: "Super-Admin",
                2: "Admin",
                3: "Development Manager",
                4: "Marketing Manager",
                5: "Human Resources Manager",
                6: "Staff",
            },
            _id: "@id()",
            id: "@guid()",
            openTime: "@date()",
            username: "@first()",
            mobile: /^1[3-9]\d{9}$/,
            avatar: "http://rfsjnlrct.hn-bkt.clouddn.com/avatar.png",
        })
    );
    zhList.push(
        Mock.mock({
            "role|1": {
                1: "超级管理员",
                2: "管理员",
                3: "开发总管",
                4: "市场总管",
                5: "人事总管",
                6: "员工",
            },
            _id: "@id()",
            id: "@guid()",
            openTime: "@date()",
            username: "@first()",
            mobile: /^1[3-9]\d{9}$/,
            avatar: "http://rfsjnlrct.hn-bkt.clouddn.com/avatar.png",
        })
    );
}

function getStaffList(req) {
    const lang = req.get("acceptlanguage");
    const { page, size } = param2Obj(req.originalUrl);
    if (lang === "zh") {
        pageList = zhList.filter(
            (item, index) => index < size * page && index >= size * (page - 1)
        );
        return {
            success: true,
            code: 10000,
            data: {
                list: pageList,
                total: count,
                page: page,
                size: size,
            },
            message: "获取员工列表成功",
        };
    } else if (lang === "en") {
        pageList = list.filter(
            (item, index) => index < size * page && index >= size * (page - 1)
        );
        return {
            success: true,
            code: 10000,
            data: {
                list: pageList,
                total: count,
                page: page,
                size: size,
            },
            message: "success!",
        };
    }
}

function addStaff(config) {
    const newList = config.body;
    if (newList instanceof Array && newList.length > 0) {
        newList.forEach((item) => {
            item._id = Random.guid();
        });
        list = [...newList, ...list];
        count = count + newList.length;
    }
    return {
        success: true,
        code: 10000,
        message: "添加成功",
    };
}

function deleteStaff(req) {
    const { id } = param2Obj(req.url);
    const lang = req.get("acceptlanguage");

    if (!id) {
        return {
            success: false,
            code: -999,
            message: "参数错误",
        };
    }

    if (lang === "zh") {
        zhList = zhList.filter((item) => item._id !== id);
        return {
            success: true,
            code: 10000,
            message: "删除成功",
        };
    } else if (lang === "en") {
        list = list.filter((item) => item._id !== id);
        return {
            success: true,
            code: 10000,
            message: "success!",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "删除失败",
        };
    }
}

function getAllStaffList(req) {
    const lang = req.get("acceptlanguage");
    if (lang === "zh") {
        return {
            success: true,
            code: 200,
            data: {
                list: zhList,
                total: count,
            },
            message: "获取所有员工数据成功",
        };
    } else if (lang === "en") {
        return {
            success: true,
            code: 200,
            data: {
                list: list,
                total: count,
            },
            message: "success",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "获取失败",
        };
    }
}

function getStaffInfo(req) {
    const lang = req.get("acceptlanguage");
    const id = sliceId(req.url);
    if (lang === "zh") {
        const staffInfo = zhList.find((item) => item._id === id);
        const newInfo = {
            remark: ["超级管理员", "前端工程师"],
            experience: [
                {
                    startTime: "1536336000000",
                    endTime: "1599494400000",
                    title: "某在线教育平台",
                    desc: "开发后台管理系统",
                },
                {
                    startTime: "1614528000000",
                    endTime: "1625068800000",
                    title: "某电商平台",
                    desc: "开发移动端页面",
                },
            ],
            genter: "男",
            nationality: "汉",
            address: "深圳市南山区xx大道 xxx号xxxx大厦1205",
            major: "前端开发工程师",
            prize: "xxx程序设计竞赛N等奖",
        };

        return {
            success: true,
            code: 200,
            data: { ...staffInfo, ...newInfo },
            message: "获取成功",
        };
    } else if (lang === "en") {
        const staffInfo = list.find((item) => item._id === id);
        const newInfo = {
            remark: ["super-admin", "front-end engineer"],
            experience: [
                {
                    startTime: "1536336000000",
                    endTime: "1599494400000",
                    title: "an online-course company ",
                    desc: "development of Content Manage System ",
                },
                {
                    startTime: "1614528000000",
                    endTime: "1625068800000",
                    title: "某电商平台",
                    desc: "development of mobile website",
                },
            ],
            genter: "Male",
            nationality: "Han",
            address:
                "1205, xxx Building, xxx Avenue, Nanshan District, Shenzhen",
            major: "Front-end development engineer",
            prize: "xxx Programming Competition xxx prize",
        };

        return {
            success: true,
            code: 200,
            data: { ...staffInfo, ...newInfo },
            message: "success!",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "获取失败",
        };
    }
}

function getStaffRoles(req) {
    const lang = req.get("acceptlanguage");
    const id = sliceId(req.url);
    if (lang === "zh") {
        const staff = zhList.find((item) => item._id === id);
        return {
            success: true,
            code: 200,
            data: staff.role,
            message: "获取角色成功",
        };
    } else if (lang === "en") {
        const staff = list.find((item) => item._id === id);
        return {
            success: true,
            code: 200,
            data: staff.role,
            message: "success!",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "获取失败",
        };
    }
}

function updateRoles(req) {
    const lang = req.get("acceptlanguage");
    const id = sliceId(req.url);
    const { roles } = req.body;
    // 1、找到被更新的user
    const staffZh = zhList.find((item) => item._id === id);
    const staffEn = list.find((item) => item._id === id);
    // 2、找到角色名称
    const newRoleNumber = Object.keys(roles);
    const roleZh = zhRoleList.filter((item) => {
        return newRoleNumber.find((num) => item.id === num);
    });
    roleZh.forEach((item) => (staffZh.role[item.id] = item.title));
    const roleEn = enRoleList.filter((item) => {
        return newRoleNumber.find((num) => item.id === num);
    });
    roleEn.forEach((item) => (staffEn.role[item.id] = item.title));
    if (lang === "zh") {
        return {
            success: true,
            code: 200,
            message: "更新员工角色成功",
        };
    } else if (lang === "en") {
        return {
            success: true,
            code: 200,
            message: "success!",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "获取失败",
        };
    }
}

export {
    getStaffList,
    addStaff,
    deleteStaff,
    getAllStaffList,
    getStaffInfo,
    getStaffRoles,
    updateRoles,
};
