https://www.babeljs.cn/docs/usage/cli/#babel-node
编译并运行 test.js
npx babel-node test

npx babel-node src/a

(babel-node 顾名思义 就是带有 babel 环境的 node  刚才 src/a  如果直接用node src/a 运行就会报错 用这个就不会了)

当然可以在文件入口处使用
require('babel-register')
再用 node 执行

https://github.com/sunyongjian/blog/issues/30
它的原理是通过改写 node 本身的 require，添加钩子，然后在 require 其他模块的时候，就会触发 babel 编译。也就是你引入require('babel-register')的文件代码，是不会被编译的。只有通过 require 引入的其他代码才会。