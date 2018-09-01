
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
