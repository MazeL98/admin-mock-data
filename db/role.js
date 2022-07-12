const { param2Obj, sliceId } = require('./utils')
function getRoleList(req) {
  const lang = req.get('acceptlanguage')
  if (lang === 'zh') {
    return {
      success: true,
      code: 200,
      data: [
        {
          id: '1',
          title: '超级管理员',
          describe: '唯一账号，可以操作系统所有功能'
        },
        {
          id: '2',
          title: '管理员',
          describe: '由超管指定，可以为多个，协助超管管理系统'
        },
        {
          id: '3',
          title: '人事经理',
          describe: '主管人事相关业务'
        },
        {
          id: '4',
          title: '销售经理',
          describe: '主管销售相关业务'
        },
        {
          id: '5',
          title: '保安队长',
          describe: '主管安保相关业务'
        },
        {
          id: '6',
          title: '员工',
          describe: '普通员工'
        }
      ],
      message: '获取资料成功'
    }
  } else if (lang === 'en') {
    return {
      success: true,
      code: 200,
      data: [
        {
          id: '1',
          title: 'Super Administrator',
          describe: 'Unique account, can operate all features'
        },
        {
          id: '2',
          title: 'Administrator',
          describe:
            'Designated by the super-manager, it can be multiple, to assist the super-management system'
        },
        {
          id: '3',
          title: 'Human Resources Manager',
          describe: 'Responsible for personnel related business'
        },
        {
          id: '4',
          title: 'Sales manager',
          describe: 'Mainly responsible for sales'
        },
        {
          id: '5',
          title: 'Security captain',
          describe: 'In charge of security work'
        },
        {
          id: '6',
          title: 'Staff',
          describe: 'General staff'
        }
      ],
      message: 'success!'
    }
  }
}

let RolePermission = [
  {
    roleId: 1,
    permissions: ['1', '1-1', '1-2', '1-3', '2', '2-1', '3', '4', '5']
  },
  { roleId: 2, permissions: ['1', '1-2', '2', '3', '4', '5'] },
  { roleId: 3, permissions: ['1', '1-1', '1-3', '2', '2-1', '3', '4', '5'] },
  { roleId: 4, permissions: ['1', '1-1', '1-2', '1-3', '2', '2-1'] },
  { roleId: 5, permissions: ['4', '5'] },
  { roleId: 6, permissions: ['4', '5'] }
]
function getPermission(req) {
  const id = sliceId(req.url)
  const data = RolePermission.find((item) => item.roleId.toString() === id)
  return {
    success: true,
    code: 200,
    data: data.permissions,
    message: '获取权限成功'
  }
}

function distributePermission(req) {
  const { permissions, roleId } = param2Obj(req.originalUrl)
  const currentRole = RolePermission.find(
    (item) => item.roleId.toString() === roleId
  )
  currentRole.permissions = permissions
  return {
    success: true,
    code: 200,
    message: '更新成功'
  }
}

module.exports.getRoleList = getRoleList
module.exports.getPermission = getPermission
module.exports.distributePermission = distributePermission
