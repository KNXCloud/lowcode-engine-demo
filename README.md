# lowcode-engine-demo

Lowcode Engine Vue demo，[在线演示](https://knxcloud.github.io/lowcode-engine-demo/)

## 运行演示

```bash
git clone git@github.com:KNXCloud/lowcode-engine-demo.git
cd lowcode-engine-demo
pnpm install
pnpm start
```

## 使用注意事项

使用变量时：

- `this.props.xxx` -> `this.xxx`
- `this.state.xxx` -> `this.xxx`

现阶段 vue 代码编辑器还未适配，可以直接使用 react 代码编辑器编辑代码

- state 内容会自动转化为 vue data
- lifecycle 自动适配为 vue lifecycle
  - `componentDidMount` -> `onMounted`
  - `componentDidCatch` -> `onErrorCaptured`
  - `shouldComponentUpdate` -> `onBeforeUpdate`
  - `componentWillUnmount` -> `onBeforeUnmount`
- 其余方法自动转化为 vue methods
