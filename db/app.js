function getFeature(req) {
  const lang = req.get('acceptlanguage')
  if (lang === 'zh') {
    return {
      success: true,
      code: 10000,
      data: [
        {
          title: 'Vue3 + 全家桶',
          percentage: 100,
          content:
            '项目基于最新的Vue3全家桶进行开发，全面使用最新的 RFC script setup 语法标准，为你带来不一样的 Vue3 开发体验'
        },
        {
          title: 'Element-Plus',
          percentage: 100,
          content:
            'Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库。是 Element UI 的官方 Vue 3 兼容版本'
        },
        {
          title: 'Vue-Element-Admin',
          percentage: 100,
          content:
            'Vue-Element-Admin  是一个后台前端解决方案，它基于 Vue 和 Element-UI 实现，并有用 70K stars。本项目使用最新 Vue 技术对其进行了重构，并在其现有功能上进行了扩展，致力于为大家带来更加符合现代后台开发的前端技术解决方案'
        },
        {
          title: 'ESLint + Git Hooks',
          percentage: 100,
          content: 'ESLint 对应编码规范，Git Hooks 对应 Git 规范。'
        },
        {
          title: '权限验证（页面权限、功能权限、动态权限、权限配置）',
          percentage: 100,
          content:
            '全面的后台权限验证系统，实现了页面权限、功能权限、动态权限、权限配置等全方位的权限功能'
        },
        {
          title: '功能引导',
          percentage: 100,
          content: '对用户的功能引导'
        },
        {
          title: '可配置 + 收缩侧边栏',
          percentage: 100,
          content: '根据路由动态生成的 Menu 菜单，实现真正的配置Menu'
        },
        {
          title: '动态面包屑',
          percentage: 100,
          content: '动态生成的面包屑数据'
        },
        {
          title: 'Tags View',
          percentage: 100,
          content: '便签快捷导航功能'
        },
        {
          title: 'SVG Sprite 图标',
          percentage: 100,
          content: '自定义的 Svg Icon 配合el-icon自动分配导入'
        },
        {
          title: '国际化',
          percentage: 100,
          content: '多语言的国际化功能实现'
        },
        {
          title: '动态换肤',
          percentage: 100,
          content: '主题更换功能，提供缓存实现'
        },
        {
          title: '页面搜索',
          percentage: 100,
          content: '根据路由配置自动化生成的页面搜索数据，无需手动配置'
        },
        {
          title: 'excel 导出、导入',
          percentage: 100,
          content: 'excel 表格的导入、导出实现'
        },
        {
          title: 'zip 导入',
          percentage: 100,
          content: '页面数据导出为 zip '
        },
        {
          title: '富文本 + MarkDown 编辑器',
          percentage: 100,
          content: '常用的编辑器功能，包含富文本编辑器 && MarkDown 编辑器'
        },
        {
          title: '动态表格 + 拖拽表格 + 内联编辑表格',
          percentage: 100,
          content:
            '表格列表的常见操作，多用于包含表格项的展示功能中。包括：动态表格 && 拖拽表格 && 内联编辑表格 '
        },
        {
          title: '统一错误处理',
          percentage: 100,
          content:
            '页面级别的错误由 Vue-Router 统一处理。包含 401 和 404 的错误处理'
        },
        {
          title: '发布',
          percentage: 100,
          content: '构建与发布'
        },
        {
          title: '其他',
          percentage: 100,
          content:
            '除了以上功能之外，我们还实现了很多其他功能，比如：CDN、动态的环境变量配置、懒加载、跨域等等'
        }
      ],
      message: '获取资料成功'
    }
  } else if (lang === 'en') {
    return {
      success: true,
      code: 10000,
      data: [
        {
          title: 'Vue3 + Family Bucket',
          percentage: 100,
          content:
            'The project is developed based on the latest Vue3 family bucket, fully using the latest RFC script setup Syntax standards, bring you a different vue3 development experience'
        },
        {
          title: 'Element-Plus',
          percentage: 100,
          content:
            'Element Plus, a set for developers, designers and product managers The desktop component library based on Vue 3.0. Is the official vue 3 compatible version of Element UI'
        },
        {
          title: 'Vue-Element-Admin',
          percentage: 100,
          content:
            'Vue-Element-Admin is a backend Front-end solution, it is based on vue and element-ui implementation, and has 70k stars。This project uses the latest vue technology to reconstruct it, and expand its existing functions, and is committed to bringing you a front-end technology solution that is more in line with modern back-end development.'
        },
        {
          title: 'ESLint + Git Hooks',
          percentage: 100,
          content:
            'ESLint corresponds to the coding standard, and Git Hooks corresponds to the Git standard.'
        },
        {
          title:
            'Authority verification (page authority, function authority, dynamic authority, authority configuration)',
          percentage: 100,
          content:
            'A comprehensive background authority verification system, which implements a full range of authority functions such as page authority, function authority, dynamic authority, authority configuration, etc.'
        },
        {
          title: 'Feature Guide',
          percentage: 100,
          content: 'Keep you up to date with new features'
        },
        {
          title: 'Configurable + Shrink Sidebar',
          percentage: 100,
          content: 'Base on routing dynamically generate Menu.'
        },
        {
          title: 'Dynamic Breadcrumb',
          percentage: 100,
          content: 'Dynamically generate breadcrumb datas.'
        },
        {
          title: 'Tags View',
          percentage: 100,
          content: 'Easy Navigation.'
        },
        {
          title: 'SVG Sprite Icons',
          percentage: 100,
          content:
            'Customized SVG Icons are automatically assigned and imported with el-icon'
        },
        {
          title: 'I18n',
          percentage: 100,
          content: 'Free switch multi-language'
        },
        {
          title: 'Multiple Dynamic Themes',
          percentage: 100,
          content: 'Freely switch themes and cache the page.'
        },
        {
          title: 'Page Search',
          percentage: 100,
          content:
            'Automatically generate page search data based on routing without manual configuration.'
        },
        {
          title: 'Excel Import & Export',
          percentage: 100,
          content: 'Import and Export Excel Documents.'
        },
        {
          title: 'Zip Export',
          percentage: 100,
          content: 'Export data as zip.'
        },
        {
          title: 'Rich Text + MarkDown Editor',
          percentage: 100,
          content:
            'Common features of editors, including rich text and MarkDown editor.'
        },
        {
          title: 'Dynamic Table + Drag and Drop Table + Inline Editing Table',
          percentage: 100,
          content:
            'Common operations of table lists, mostly used in display table items. Including: dynamic table && drag and drop table && inline editing table '
        },
        {
          title: 'Error Handling',
          percentage: 100,
          content:
            'Page-level errors are handled uniformly by vue-router. Contains 401 and 404 error handling'
        },
        {
          title: 'Release',
          percentage: 100,
          content: 'Build and release.'
        },
        {
          title: 'Others',
          percentage: 100,
          content:
            'In addition to the above features, we have also implemented many others, such as: CDN, dynamic environment variable configuration, lazy loading, cross-domain, etc.'
        }
      ],
      message: 'success!'
    }
  } else {
    return {
      success: false,
      code: 600205,
      message: '获取资料失败'
    }
  }
}

module.exports.getFeature = getFeature
