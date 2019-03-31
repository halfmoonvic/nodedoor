[![Build Status](https://travis-ci.org/halfmoonvic/nodedoor.svg?branch=test)](https://travis-ci.org/halfmoonvic/nodedoor)

阻塞非阻塞 I/O （很像是 同步异步）
阻塞： I/O 时进程休眠等等 I/O 完成后进行下一步。
非阻塞：I/O 时函数立即返回，进程不等待 I/O 完成

事件驱动： 用户点击按钮时 触发事件

CPU 密集： 压缩、解压、加密、解密（计算、逻辑判断）
I/O 密集： 文件操作、网络操作、数据库（存取设备、网络设施读取操作）

NodeJs 在处理高并发、I/O 密集场景性能优势明显

Web 常见场景
1. 静态资源读取（JavaScript，css, html, 全是 I/O 操作）　
2. 数据库操作（数据存取到物理磁盘上或者内存中）
3. 渲染页面（读取模板文件，在根据数据生成html）　　

进程：计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位
多进程：启动多个进程，多个进程可以一块执行多个任务
线程：进程内一个相对独立的、可调度的执行单元，与同属一个进程的线程共享进程的资源


### require 规则
1. / 表示绝对路径， ./ 表示相对于当前文件的
2. 支持 js、json、node 扩展名，不写依次尝试
3. 不写路径 则认为是 build-in 模块或者各级 node_modules 内的第三方模块　

### require特性
1. module 被加载的时候执行，加载后缓存
2. 一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出


`npm root -g` 查看全局安装包的位置

### module.exports 与 exports 区别
exports 是 module.exports 的快捷方式，引用。但要注意，你不可以设置它的指向（赋值），如果赋值就会失去对 module.exports 的引用。如
```
exports = {
  a: 1,
  b: 2,
  test: 100
}
```
这样的话，当前模块没有任何输出。 只能是 `exports.obj = {}` 的形式才可以.
因为最开始 exports 就是默认指向了 module.exports。


### global 全局对象
1. global 与 浏览器下 的 window 很相像，一些全局属性方法挂到 global 对象上
2. CommonJS Buffer process console setTimeout setTimeout setImmediate 都是其属性
`global.num  = 2` 其它模块使用的时候 直接 `num` 就好，不用加 `global`,加也没事

### process进程
`argv0` 是 `argv` 第一个值的引用　 

`process.nextTick` 将任务放到当前队列的队尾
`setImmediate` 将任务放到下一队列的队首
`setTimeout` 放在中间...


### API
##### 1. `path`
`__dirname __filename` 总是返回文件的绝对路径  
`process.cwd()` （进程在哪里启动的） 总是返回执行 node 命令 在哪个文件夹启动的
`require` 方法中总是相对当前文件所在文件夹

### Buffer
1. `buffer` 用于处理二进制数据流
2. 实例类似整数数组，大小固定
3. C++ 代码在 V8堆外分配物理内存


### fs stream（流）
理解：有方向的数据。从一个设备流向另外一个设备。在Linux当中，将设备抽象为文件，数据从一个文件流向另外一个文件。
我们平常操作文件是先将文件放在内存当中，然后进行操作。电脑看电影，起初电脑内存只有512M的时候，却也是可以看2G的电影。利用stream，将文件一点点读取放入到内存中，然后播放。



### 版本号 X.Y.Z 模式
1. Z 代表BUG的修复  
2. Y 代表有了新功能，保证着向下兼容
3. X 代表了大版本升级，不保证兼容  

linux 中，X是偶数时候代表稳定版，是奇数位的时候代表不稳定版。但并不是所有程序都如此遵从

package.json 当中 依赖库后面的 ^2.0.0(2.x) 代表着安装此依赖时，X 位不变，其它的照最新的来
package.json 当中 依赖库后面的 ~1.2.0(1.2.*) 代表着安装此依赖时，X、Y位不变，Z位按照最新的来



## 本地构建 
##### babel
preset 可以理解为是一个套餐，他可以转译许多语法，
而 plugin 知识针对个别转译的
