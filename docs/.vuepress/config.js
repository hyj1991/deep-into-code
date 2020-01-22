'use strict';

module.exports = {
  themeConfig: {
    // displayAllHeaders: true,
    sidebar: [
      {
        title: '源码笔记',
        path: '/',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          {
            title: 'V8 引擎',
            path: '/V8',
            collapsable: false,
            children: [
              {
                title: '1. 准备工作',
                path: '/V8_PREPARE',
                collapsable: false,
                children: [
                  {
                    title: '编译完整的 LLVM',
                    path: '/0x01_编译完整的 LLVM'
                  },
                  {
                    title: '管理 Ubuntu 下的版本',
                    path: '/0x02_管理 Ubuntu 下的版本'
                  }
                ]
              },
              {
                title: '2. 单独编译 V8 引擎',
                path: '/0x03_单独编译 V8 引擎'
              },
              {
                title: '3. 初步了解 V8 引擎 (尚未完成)',
                path: '/0x04_初步了解 V8 引擎'
              },
              {
                title: '4. 逆工程 JS 对象 (一): 浅谈 V8 对象布局',
                path: '/0x05_逆工程 V8 对象'
              }
            ]
          },
          {
            title: '许可证信息',
            path: '/0x99_LICENSE.md'
          }
        ]
      }
    ]
  }
};