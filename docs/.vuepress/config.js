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
          '/0x01_编译完整的 LLVM',
          '/0x02_管理 Ubuntu 下的版本'
        ]
      }
    ]
  }
};