function login(req) {
  const { username, password } = req.body
  const names = ['super-admin', 'admin', 'test']
  const tokens = {
    'super-admin': {
      token: 'super-admin-token'
    },
    admin: {
      token: 'admin-token'
    },
    test: {
      token: 'test-token'
    }
  }
  if (
    names.includes(username) &&
    password === 'e10adc3949ba59abbe56e057f20f883e'
  ) {
    return {
      success: true,
      code: 200,
      data: tokens[username],
      message: '登录成功'
    }
  } else {
    return {
      success: false,
      code: 600204,
      data: null,
      message: '用户名或密码错误'
    }
  }
}

function getUserProfile(req) {
  const token = req.get('authorization')
  const users = {
    'super-admin-token': {
      role: [
        {
          id: '1',
          title: '超级管理员'
        }
      ],
      _id: '612710a0ec87aa543c9c341d',
      id: '0',
      username: 'super-admin',
      title: '超级管理员',
      avatar:
        'https://img.freepik.com/free-vector/portrait-caucasian-woman-profile-with-long-hair-avatar-young-white-girl_102172-419.jpg',
      permission: {
        menus: [
          'StaffManage',
          'RoleList',
          'PermissionList',
          'ArticleRanking',
          'ArticleCreate'
        ],
        points: [
          'DistributeRole',
          'ImportStaff',
          'RemoveStaff',
          'DistributePermission'
        ]
      }
    },
    'admin-token': {
      role: [
        {
          id: '2',
          title: '普通管理员'
        }
      ],
      _id: '612710a0ec87aa543c9c341e',
      id: '1',
      username: 'admin',
      title: '普通管理员',
      avatar:
        'https://img.freepik.com/free-vector/portrait-strong-beautiful-woman-profile-with-blond-hair_102172-425.jpg',
      permission: {
        menus: [
          'StaffManage',
          'RoleList',
          'permissionList',
          'ArticleRanking',
          'ArticleCreate'
        ],
        points: ['ImportStaff']
      }
    },
    'test-token': {
      role: [
        {
          id: '3',
          title: '员工'
        }
      ],
      _id: '612723a0ec87aa5549c341e',
      id: '2',
      username: 'test',
      title: '员工',
      avatar:
        'https://img.freepik.com/free-vector/portrait-african-american-woman-profile-avatar-young-black-girl_102172-418.jpg',
      permission: null
    }
  }
  if (users[token]) {
    return {
      success: true,
      code: 200,
      data: users[token],
      message: '获取资料成功'
    }
  } else {
    return {
      success: false,
      code: 600201,
      data: null,
      message: '获取资料失败'
    }
  }
}
module.exports.login = login
module.exports.getUserProfile = getUserProfile
