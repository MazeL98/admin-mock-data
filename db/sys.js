// 处理日期，自动更新当日日期
import dayjs from "dayjs";
import schedule from "node-schedule";
let today = dayjs().valueOf();
let tomorrow = dayjs().add(1, "day").valueOf();
let theDayAfterTmr = dayjs().add(2, "day").valueOf();
const generateDate = () => {
    schedule.scheduleJob("0 18 0 * * *", () => {
        today = dayjs().valueOf();
        tomorrow = dayjs().add(1, "day").valueOf();
        theDayAfterTmr = dayjs().add(2, "day").valueOf();
    });
};
generateDate();

// 基本数据
const MyTasks = [
    {
        date: today,
        tasks: [
            {
                title: "页面布局",
                desc: "设计商品详情模块的布局",
                member: [
                    {
                        id: "1",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "2",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "3",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                ],
                isCompleted: false,
            },
            {
                title: "数据可视化",
                desc: "引入echars.js给项目添加数据可视化功能",
                member: [
                    {
                        id: "1",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "2",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "3",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                ],
                isCompleted: false,
            },
        ],
    },
    {
        date: tomorrow,
        tasks: [
            {
                title: "修复Bug",
                desc: "修复A项目页面样式Bug",
                member: [
                    {
                        id: "1",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "2",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "3",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                ],
                isCompleted: false,
            },
            {
                title: "项目优化",
                desc: "优化B项目的接口请求",
                member: [
                    {
                        id: "1",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "2",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "3",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                ],
                isCompleted: false,
            },
            {
                title: "封装公共组件",
                desc: "封装C项目中会复用的公共组件",
                member: [
                    {
                        id: "1",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "2",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "3",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                ],
                isCompleted: false,
            },
        ],
    },
    {
        date: theDayAfterTmr,
        tasks: [
            {
                title: "修复Bug",
                desc: "修复C项目因插件升级产生的Bug",
                member: [
                    {
                        id: "1",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "2",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                    {
                        id: "3",
                        avatar: "https://s3.bmp.ovh/imgs/2022/06/16/7c21232f9646d231.png",
                    },
                ],
                isCompleted: false,
            },
        ],
    },
];

let users = {
    "super-admin-token": {
        role: [
            {
                id: "1",
                title: "超级管理员",
            },
        ],
        _id: "612710a0ec87aa543c9c341d",
        id: "1",
        username: "super-admin",
        title: "超级管理员",
        avatar: "http://qiniuyun.mazel98.com/super-admin.png",
        permission: {
            menus: [
                "StaffManage",
                "RoleList",
                "PermissionList",
                "ArticleRanking",
                "ArticleCreate",
            ],
            points: [
                "DistributeRole",
                "ImportStaff",
                "RemoveStaff",
                "DistributePermission",
            ],
        },
        myTasks: MyTasks,
    },
    "admin-token": {
        role: [
            {
                id: "2",
                title: "普通管理员",
            },
        ],
        _id: "612710a0ec87aa543c9c341e",
        id: "2",
        username: "admin",
        title: "管理员",
        avatar: "http://qiniuyun.mazel98.com/admin.png",
        permission: {
            menus: [
                "StaffManage",
                "RoleList",
                "permissionList",
                "ArticleRanking",
                "ArticleCreate",
            ],
            points: ["ImportStaff"],
        },
        myTasks: MyTasks,
    },
    "test-token": {
        role: [
            {
                id: "6",
                title: "员工",
            },
        ],
        _id: "612723a0ec87aa5549c341e",
        id: "6",
        username: "test",
        title: "员工",
        avatar: "http://qiniuyun.mazel98.com/test.png",
        permission: {
            menus: ["ArticleRanking", "ArticleCreate"],
        },
        myTasks: MyTasks,
    },
};
// 登录，返回token
function login(req) {
    const { username, password } = req.body;
    const names = ["super-admin", "admin", "test"];
    const tokens = {
        "super-admin": {
            token: "super-admin-token",
        },
        admin: {
            token: "admin-token",
        },
        test: {
            token: "test-token",
        },
    };
    if (
        names.includes(username) &&
        password === "e10adc3949ba59abbe56e057f20f883e"
    ) {
        return {
            success: true,
            code: 200,
            data: tokens[username],
            message: "登录成功",
        };
    } else {
        return {
            success: false,
            code: 600204,
            data: null,
            message: "用户名或密码错误",
        };
    }
}

// 返回用户信息
function getUserProfile(req) {
    const token = req.get("authorization");
    if (users[token]) {
        return {
            success: true,
            code: 200,
            data: users[token],
            message: "获取资料成功",
        };
    } else {
        return {
            success: false,
            code: 600201,
            data: null,
            message: "获取资料失败",
        };
    }
}

export { login, getUserProfile, users };
