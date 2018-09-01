
编译整个src目录到output 下
npx babel src --out-dir  output

## babelrc
```
{
  "presets": [
    "env"
  ],
  "plugins": [
    ["transform-runtime", {
      "helpers": true,
      "polyfill": true,
      "regenerator": true,
      "moduleName": "babel-runtime"
    }]
  ]
}
```
如果你的 rc 是这么配置的
那么在 babel V7 中会尝试去寻找 @babel/env   @babel/transform-runtime

babel7 和 babel6 中关于包的命名有些不同
babel7 的全家桶都是在@babel 这个私有前缀下的

PS  虽然这里配置了 browsers": ["last 2 versions", "safari >= 7"]  但是这只是编译的语法适用于 browser  并不表示 runtime 中没有外部引用了
