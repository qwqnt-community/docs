# 迈出第一步

在上一节，我们完成了开发环境的配置。现在让我们正式进入插件编写的教学。

我们假设你已经拥有了基本的开发知识。

本篇及之后的所有教程均采用 Typescript。

## 窗口钩子

框架为我们提供了一些窗口钩子，下面让我们来认识一下。

这些钩子全部位于 qwqnt.main.hooks 下，只能在主进程中使用。

有如下钩子：

- qwqnt.main.hooks.whenBrowserWindowCreated.peek
- qwqnt.main.hooks.whenBrowserWindowCreated.on
- qwqnt.main.hooks.whenBrowserWindowCreating.on

whenBrowserWindowCreated 钩子在窗口构造完成后触发，而 whenBrowserWindowCreating 则在窗口构造时触发。

qwqnt.main.hooks.whenBrowserWindowCreated.peek 和 qwqnt.main.hooks.whenBrowserWindowCreated.on 如何选用则看你是否需要修改窗口实例。

如果需要修改，则选用 qwqnt.main.hooks.whenBrowserWindowCreated.on，因为这个钩子的回调函数需要一个 BrowserWindow 类型的返回值。

反之，则选用 qwqnt.main.hooks.whenBrowserWindowCreated.peek。

当然，如果你无法分辨，那么直接选用 qwqnt.main.hooks.whenBrowserWindowCreated.on 也是可以的。

下面让我们实战一下。

我们现在需要在窗口构建完成后，弹出弹框，提示：“窗口构建”。

```ts
// main.ts
import type { BrowserWindow } from 'electron';

qwqnt.main.hooks.whenBrowserWindowCreated.peek((window: BrowserWindow) => {
  alert('窗口构建');
});

// 当然你也可以选择用下面的方式，这两个方式在这个情境下作用相同
qwqnt.main.hooks.whenBrowserWindowCreated.on((window: BrowserWindow) => {
  alert('窗口构建');

  return window; // qwqnt.main.hooks.whenBrowserWindowCreated.on 必须返回一个 BrowserWindow
});
```

至于 qwqnt.main.hooks.whenBrowserWindowCreating.on，目前还不需要用到，你会在后面的篇章中再次看见它。