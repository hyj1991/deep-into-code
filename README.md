访问语雀地址获得更好的阅读体验: [Node.js / V8 / Libuv 源码阅读笔记](https://www.yuque.com/yijun-rrmp0/nxwlp3)，语雀会在 Github 文章整理完成后进行更新。

## 章节目录

* [V8 引擎](#章节目录)
  * [准备工作](https://github.com/hyj1991/sourcecode_notes/blob/master/docs/V8_PREPARE.md)
    * [编译完整的 LLVM](https://github.com/hyj1991/sourcecode_notes/blob/master/docs/0x01_%E7%BC%96%E8%AF%91%E5%AE%8C%E6%95%B4%E7%9A%84%20LLVM.md)
    * [管理 Ubuntu 下的 GCC 版本](https://github.com/hyj1991/sourcecode_notes/blob/master/docs/0x02_%E7%AE%A1%E7%90%86%20Ubuntu%20%E4%B8%8B%E7%9A%84%E7%89%88%E6%9C%AC.md)
  * [单独编译 V8 引擎](https://github.com/hyj1991/sourcecode_notes/blob/master/docs/0x03_%E5%8D%95%E7%8B%AC%E7%BC%96%E8%AF%91%20V8%20%E5%BC%95%E6%93%8E.md)
  * [初步了解 V8 引擎 (未完成)](https://github.com/hyj1991/sourcecode_notes/blob/master/docs/0x04_%E5%88%9D%E6%AD%A5%E4%BA%86%E8%A7%A3%20V8%20%E5%BC%95%E6%93%8E.md)
  * [逆工程 V8 对象 (一)](https://github.com/hyj1991/sourcecode_notes/blob/master/docs/0x05_%E9%80%86%E5%B7%A5%E7%A8%8B%20V8%20%E5%AF%B9%E8%B1%A1.md)
* [Libuv (未开始)](#章节目录)
* [Node.js (未开始)](#章节目录)

前期可能不会以完整体系的方式来进行编写（防止自己弃坑），会挑感兴趣的部分进行解析编写，等后续成文篇数足够编成体系的时候再进行章节的整理。

## 本地阅读

本地采用了 vuepress 方便实时预览

### 安装

```bash
npm install
```

### 运行

```bash
npm run docs:dev
```

运行完毕后打开浏览器访问 `http://localhost:8080/` 即可进行阅读。

## LICENSE

本书采用 **保持署名—非商用** **创意共享 4.0 许可证**。<br />只要保持原作者署名和非商用，您可以自由地阅读、分享、修改本书。<br />详细的法律条文请参见 [创意共享](https://creativecommons.org/licenses/by-nc/4.0/) 网站。