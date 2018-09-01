
编译整个src目录到output 下
npx babel src --out-dir  output


和之前babel-normal 中的生成结果不同  本例子中引入的这些函数没有放在文件开头  而是通过 require 引入

babel 有很多帮助函数，例如 toArray函数， jsx转化函数。这些函数是 babel transform 的时候用的，都放在 babel-helpers这个包中。如果 babe 编译的时候检测到某个文件需要这些 helpers，在编译成模块的时候，会放到模块的顶部。

## babel-runtime
这个包很简单，就是引用了 core-js 和 regenerator

core-js
core-js 是用于 JavaScript 的组合式标准化库，它包含 es5 （e.g: object.freeze）, es6的 promise，symbols, collections, iterators, typed arrays， es7+提案等等的 polyfills 实现  但是就是没有 regenerator

regenerator
它是来自于 facebook 的一个库，主要实现了 generator/yeild， async/await。




## babel-external-helpers
https://github.com/sunyongjian/blog/issues/30
但是如果多个文件都需要提供，会重复引用这些 helpers，会导致每一个模块都定义一份，代码冗余。
所以有babel-external-helpers 可以 require 依赖 不过是手动的
难道不能自动的吗？

## 推荐用babel-plugin-transform-runtime
transform-runtime 是为了方便使用 babel-runtime 的
babel-plugin-transform-runtime 插件这个插件让 Babel 发现代码中使用到 Symbol、Promise、Map 等新类型时，自动且按需进行 polyfill（会以 require 的方式引入），因为是“自动”所以非常受大家的欢迎。在官网中，Babel 提醒大家如果正在开发一个 library 的话，建议使用这种方案，因为没有全局变量和 prototype 污染。
(polyfill可能会改写全局变量  可能的意思是  比如Promise的话浏览器如果支持就不会改写 没有的话就会写)

由于它不会污染全局变量  因此 [1,2,3].includes(3) 这种是无法转换的  毕竟要改写 Array 的原型才能有这个方法
```
'!!!'.repeat(3);
'hello'.includes('h');
```
这只能通过 babel-polyfill 来转码，因为 babel-polyfill 是直接在原型链上增加方法。


## polyfill
polyfill 的缺点也显而易见，那就是占文件空间并且无法按需定制。
不同于 babel-runtime 的是，babel-polyfill 是一次性引入你的项目中的，就像是 React 包一样，同项目代码一起编译到生产环境。