const { sliceId } = require('./utils')

function getAllPermission(req) {
  const lang = req.get('acceptlanguage')
  if (lang === 'zh') {
    return {
      success: true,
      code: 200,
      data: [
        {
          id: '1',
          permissionName: '员工管理',
          permissionMark: 'StaffManage',
          permissionDesc: '员工管理菜单',
          children: [
            {
              id: '1-1',
              permissionName: '分配角色',
              permissionMark: 'DistributeRole',
              permissionDesc: '为员工分配角色'
            },
            {
              id: '1-2',
              permissionName: '导入员工',
              permissionMark: 'ImportStaff',
              permissionDesc: '通过 excel 导入员工'
            },
            {
              id: '1-3',
              permissionName: '删除员工',
              permissionMark: 'RemoveStaff',
              permissionDesc: '删除员工'
            }
          ]
        },
        {
          id: '2',
          permissionName: '角色列表',
          permissionMark: 'RoleList',
          permissionDesc: '角色列表菜单',
          children: [
            {
              id: '2-1',
              permissionName: '分配权限',
              permissionMark: 'DistributePermission',
              permissionDesc: '为角色分配权限'
            }
          ]
        },
        {
          id: '3',
          permissionName: '权限列表',
          permissionMark: 'PermissionList',
          permissionDesc: '权限列表菜单',
          children: []
        },
        {
          id: '4',
          permissionName: '文章排名',
          permissionMark: 'ArticleRanking',
          permissionDesc: '文章排名菜单',
          children: []
        },
        {
          id: '5',
          permissionName: '创建文章',
          permissionMark: 'ArticleCreate',
          permissionDesc: '创建文章页面',
          children: []
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
          permissionName: 'Staff Manage',
          permissionMark: 'StaffManage',
          permissionDesc: 'Staff management menu',
          children: [
            {
              id: '1-1',
              permissionName: 'Assign Roles',
              permissionMark: 'DistributeRole',
              permissionDesc: 'Assign roles to employees'
            },
            {
              id: '1-2',
              permissionName: 'Import Employees',
              permissionMark: 'ImportStaff',
              permissionDesc: 'Import employees via excel'
            },
            {
              id: '1-3',
              permissionName: 'Delete Employees',
              permissionMark: 'RemoveStaff',
              permissionDesc: 'Delete Employees'
            }
          ]
        },
        {
          id: '2',
          permissionName: 'Role List',
          permissionMark: 'RoleList',
          permissionDesc: 'Role list menu',
          children: [
            {
              id: '2-1',
              permissionName: 'Assign Permissions',
              permissionMark: 'DistributePermission',
              permissionDesc: 'Assign permissions to roles'
            }
          ]
        },
        {
          id: '3',
          permissionName: 'Permission List',
          permissionMark: 'PermissionList',
          permissionDesc: 'Permission list menu',
          children: []
        },
        {
          id: '4',
          permissionName: 'Article Ranking',
          permissionMark: 'ArticleRanking',
          permissionDesc: 'Article ranking menu',
          children: []
        },
        {
          id: '5',
          permissionName: 'Create Articles',
          permissionMark: 'ArticleCreate',
          permissionDesc: 'Create article page',
          children: []
        }
      ],
      message: 'success!'
    }
  } else {
    return {
      success: false,
      code: -999,
      message: '获取失败'
    }
  }
}
module.exports.getAllPermission = getAllPermission
