import { permissionListZh } from "./permission.js";
import { users } from "./sys.js";
import { sliceId, generatePermission } from "./utils.js";

const zhRoleList = [
    {
        id: "1",
        title: "超级管理员",
        describe: "唯一账号，可以操作系统所有功能",
    },
    {
        id: "2",
        title: "管理员",
        describe: "由超管指定，可以为多个，协助超管管理系统",
    },
    {
        id: "3",
        title: "开发总管",
        describe: "主管产品开发",
    },
    {
        id: "4",
        title: "市场总管",
        describe: "主管市场营销相关业务",
    },
    {
        id: "5",
        title: "人事总管",
        describe: "主管人事相关业务",
    },
    {
        id: "6",
        title: "员工",
        describe: "普通员工",
    },
];
const enRoleList = [
    {
        id: "1",
        title: "Super-Admin",
        describe: "Unique account, can operate all features",
    },
    {
        id: "2",
        title: "Admin",
        describe:
            "Designated by the super-manager, it can be multiple, to assist the super-management system",
    },
    {
        id: "3",
        title: "Development Manager",
        describe: "Responsible for developing products",
    },
    {
        id: "4",
        title: "Marketing Manager",
        describe: "Mainly responsible for marketing ",
    },
    {
        id: "5",
        title: "Human Resources Manager",
        describe: "Responsible for personnel related business",
    },
    {
        id: "6",
        title: "Staff",
        describe: "General staff",
    },
];

function getRoleList(req) {
    const lang = req.get("acceptlanguage");
    if (lang === "zh") {
        return {
            success: true,
            code: 200,
            data: zhRoleList,
            message: "获取资料成功",
        };
    } else if (lang === "en") {
        return {
            success: true,
            code: 200,
            data: enRoleList,
            message: "success!",
        };
    }
}

let RolePermission = [
    {
        roleId: 1,
        permissions: ["1", "1-1", "1-2", "1-3", "2", "2-1", "3", "4", "5"],
    },
    { roleId: 2, permissions: ["1", "1-2", "2", "3", "4", "5"] },
    { roleId: 3, permissions: ["1", "1-1", "1-3", "2", "2-1", "3", "4", "5"] },
    { roleId: 4, permissions: ["1", "1-1", "1-2", "1-3", "2", "2-1"] },
    { roleId: 5, permissions: ["4", "5"] },
    { roleId: 6, permissions: ["4", "5"] },
];
function getPermission(req) {
    const id = sliceId(req.url);
    const data = RolePermission.find((item) => item.roleId.toString() === id);

    return {
        success: true,
        code: 200,
        data: data.permissions,
        message: "获取权限成功",
    };
}

function distributePermission(req) {
    const { permissions, roleId } = req.body;
    const currentRole = RolePermission.find(
        (item) => item.roleId.toString() === roleId
    );

    currentRole.permissions = permissions;
    // newList 原 permissionList 的嵌套展开
    const newList = [];
    generatePermission(permissionListZh, newList);
    // 根据 权限ID 取出对应 mark放入markList中
    const markList = [];
    permissions.forEach((item) => {
        const res = newList.find((permItem) => {
            return permItem.id === item;
        });
        if (res) {
            markList.push(res);
        }
    });
    // markList 分类并赋值给 userInfo
    const pointsList = [];
    const menuList = [];
    markList.forEach((item) => {
        if (item.id.length > 1) {
            pointsList.push(item.permissionMark);
        } else if (item.id.length === 1) {
            menuList.push(item.permissionMark);
        }
    });

    for (let key in users) {
        if (users[key].id === roleId) {
            users[key].permission = { menus: menuList, points: pointsList };
        }
    }
    return {
        success: true,
        code: 200,
        message: "更新成功",
    };
}

export {
    getRoleList,
    getPermission,
    distributePermission,
    zhRoleList,
    enRoleList,
};
