# 编译完整的 LLVM

起因是想找个在 Windows 子系统直接安装 LLDB 8.0 的办法，结果死活没找到，那就只能用源码自行编译一个用了，记录下过程以防以后需要。

以下是从零开始的步骤，这次编译总共花了差不多 6 个多小时 (以前我还以为 MateBook13 和 i7-8565u 很强，看来轻薄本就是轻薄本，不是很能打...)，大概需要安装目录约 50G 空间，编译目录约 85G 空间，跑之前得做好时间和空间消耗的准备。

## I. 安装 gcc
* sudo apt-get update
* sudo apt-get install gcc-4.8 g++-4.8 -y
* sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-4.8 60 --slave /usr/bin/g++ g++ /usr/bin/g++-4.8

## II. 安装依赖工具
* sudo apt-get install build-essential subversion swig python2.7-dev libedit-dev libncurses5-dev -y

## III. 下载源码包
* wget http://releases.llvm.org/8.0.0/llvm-8.0.0.src.tar.xz
* wget http://releases.llvm.org/8.0.0/cfe-8.0.0.src.tar.xz
* wget http://releases.llvm.org/8.0.0/compiler-rt-8.0.0.src.tar.xz
* wget http://releases.llvm.org/8.0.0/libcxx-8.0.0.src.tar.xz
* wget http://releases.llvm.org/8.0.0/libcxx-8.0.0.src.tar.xz
* wget http://releases.llvm.org/8.0.0/libunwind-8.0.0.src.tar.xz
* wget http://releases.llvm.org/8.0.0/lld-8.0.0.src.tar.xz
* wget http://releases.llvm.org/8.0.0/lldb-8.0.0.src.tar.xz
* wget http://releases.llvm.org/8.0.0/openmp-8.0.0.src.tar.xz
* wget http://releases.llvm.org/8.0.0/polly-8.0.0.src.tar.xz
* wget http://releases.llvm.org/8.0.0/clang-tools-extra-8.0.0.src.tar.xz
* wget http://releases.llvm.org/8.0.0/test-suite-8.0.0.src.tar.xz

## IV. 解压主库包
* tar -xvf llvm-8.0.0.src.tar.xz

## V. 创建工具目录
* cd llvm-8.0.0.src/
* mkdir -p tools/clang
* mkdir -p tools/clang/tools/extra
* mkdir -p tools/lld
* mkdir -p tools/lldb
* mkdir -p tools/polly
* mkdir -p projects/compiler-rt
* mkdir -p projects/libcxx
* mkdir -p projects/libcxxabi
* mkdir -p projects/libunwind
* mkdir -p projects/openmp

## VI. 解压工具源码
* tar -xvf ../cfe-8.0.0.src.tar.xz -C tools/clang/ --strip-components=1
* tar -xvf ../clang-tools-extra-8.0.0.src.tar.xz -C tools/clang/tools/extra/ --strip-components=1
* tar -xvf ../lld-8.0.0.src.tar.xz -C tools/lld --strip-components=1
* tar -xvf ../lldb-8.0.0.src.tar.xz -C tools/lldb/ --strip-components=1
* tar -xvf ../polly-8.0.0.src.tar.xz -C tools/polly/ --strip-components=1
* tar -xvf ../compiler-rt-8.0.0.src.tar.xz -C projects/compiler-rt/ --strip-components=1
* tar -xvf ../libcxx-8.0.0.src.tar.xz -C projects/libcxx --strip-components=1
* tar -xvf ../libcxxabi-8.0.0.src.tar.xz -C projects/libcxxabi/ --strip-components=1
* tar -xvf ../libunwind-8.0.0.src.tar.xz -C projects/libunwind/ --strip-components=1
* tar -xvf ../openmp-8.0.0.src.tar.xz -C projects/openmp/ --strip-components=1

## VII. 编译 llvm
* cd ..
* mkdir build
* cd build
* sudo mkdir /lldb
* sudo cmake -DCMAKE_INSTALL_PREFIX=/lldb ../llvm-8.0.0.src
* sudo cmake --build . --target install、

## VIII. 配置环境变量
* sudo vim /etc/profile
* 添加 export PATH="$PATH:/lldb/bin"

## IX. 查看结果
* lldb -v