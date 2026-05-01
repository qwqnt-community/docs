# 构建环境

从现在开始，你将从头开始开发一个 QwQNT 框架插件。

该节内容将会简要介绍如何构建一个插件开发环境。

## 使用模板

QwQNT 框架并未提供官方实现的插件模板。

下列均为社区模板，出现任何问题均与 QwQNT 框架官方无关。

### adproqwq 模板

[点击查看](https://github.com/adproqwq/QwQNT-PluginTemplate-Vite-pnpm/)

该模板由 [@adproqwq](https://github.com/adproqwq/) 提供。

该模板完全为 Typescript 设计，采用 pnpm + Vite + Oxc 开发链。

### xiyuesaves 模板

[点击查看](https://github.com/xiyuesaves/ts-plugin-template/)

该模板由 [@xiyuesaves](https://github.com/xiyuesaves/) 提供。

该模板完全为 Typescript 设计，采用 pnpm 作为包管理器。

该模板可用于开发 QwQNT 框架与 LiteLoaderQQNT 框架通用插件。

## 手动构建

我们使用 Typescript 为例。

我们假设你已经完成了项目的初始化。

### package.json

首先，请在 package.json 中添加 QwQNT 框架官方的 schema 。

::: code-group

```json [package.json]
"$schema": "https://raw.githubusercontent.com/qwqnt-community/types/main/plugin.schema.json" // [!code ++]
```

:::

然后请按照[开发规范](./development-standards)填写好 name 等字段，这里不做赘述。

比较重要的是，虽然 QwQNT 框架允许加载 esm ，但是我们仍然建议打包为 cjs 。

下面是 qwqnt 字段的介绍：

::: code-group

```json [package.json]
"qwqnt": {
  "name": "", // 插件显示的名字
  "inject": {
    "main": "", // 插件主进程入口文件
    "preload": "", // 插件 preload 入口文件
    "renderer": "" // 插件渲染进程入口文件
  },
  "dependencies": { // 插件的依赖，这不同于 npm 的依赖，这里是对其他插件的依赖
    "plugin1": "^1.0.0", // 必须依赖
    "plugin2?": "^1.0.0" // 可选依赖
  }
}
```

:::

### tsconfig

由于 Electron 项目的特殊性，我们建议你将 tsconfig.json 拆分为两个文件分别对应使用 node 的主进程和使用 web 的 preload 和渲染进程。

假设你将其拆分为 tsconfig.node.json 和 tsconfig.web.json 。

请执行下列命令以安装 QwQNT 框架官方核心类型定义库。

::: code-group

```sh [npm]
npm install github:qwqnt-community/types --save-dev
```

```sh [pnpm]
pnpm add github:qwqnt-community/types -D
```

:::

然后再修改两个 tsconfig.*.json 文件。

::: code-group

```json [tsconfig.node.json]
"compilerOptions": { // [!code ++]
  "types": ["@qwqnt/types/main"] // [!code ++]
} // [!code ++]
```

```json [tsconfig.web.json]
"compilerOptions": { // [!code ++]
  "types": ["@qwqnt/types/preload", "@qwqnt/types/renderer"] // [!code ++]
} // [!code ++]
```

:::

在 tsconfig.json 中引入这两个文件：

::: code-group

```json [tsconfig.json]
"references": [ // [!code ++]
  { "path": "./tsconfig.node.json" }, // [!code ++]
  { "path": "./tsconfig.web.json" } // [!code ++]
] // [!code ++]
```

:::

你也可以再添加 @electron-toolkit/tsconfig 包，这是可选的。

如果你添加了 @electron-toolkit/tsconfig 包，那么你需要在上面的基础上添加：

::: code-group

```json [tsconfig.node.json]
"extends": "@electron-toolkit/tsconfig/tsconfig.node.json" // [!code ++]
```

```json [tsconfig.web.json]
"extends": "@electron-toolkit/tsconfig/tsconfig.web.json" // [!code ++]
```

:::

### 依赖

这里使用 electron-vite 包进行插件的编译工作。

具体请参照[官方文档](https://electron-vite.github.io/)进行对应配置。

对于打包工作，这里使用 unplugin-zip-pack 包。

我们假设你使用 electron.vite.config.ts 配置 electron-vite。

使用 unplugin-zip-pack 插件需要完成下列工作。

::: code-group

```ts [electron.vite.config.ts]
import { defineConfig } from 'electron-vite';
import { resolve } from 'path'; // [!code ++]
import viteZipPack from 'unplugin-zip-pack/vite'; // [!code ++]

export default defineConfig({
  // 其他配置项...
  renderer: {
    plugins: [ // [!code ++]
      viteZipPack({ // [!code ++]
        in: resolve(__dirname, './dist'), // [!code ++]
        out: resolve(__dirname, `./your_plugin_name.zip`), // [!code ++]
      }), // [!code ++]
    ], // [!code ++]
  },
});
```

:::

这样你就基本完成了环境的构建。我们将在下节正式开始插件的开发。