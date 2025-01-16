---
title: 属性篇
date: 2025-01-015 14:00:00
---

# HTML 属性篇

## 标签独有属性

### \<a>

- **download**

  > 指定链接点击后下载指定的文件，而不是导航到文件。

  ```html
  <a href="file.pdf" download="example">下载 PDF 文件</a>
  ```

  点击链接时浏览器会下载 file.pdf，并将文件名显示为 example.pdf。



### \<img>

- **srcset**

  > 指定一组图像及其尺寸或分辨率。

- **sizes**

  > 告知浏览器图片在不同视口宽度下应占据的显示宽度，帮助浏览器决定应加载哪一张图片。



```html
<img 
  src="small.jpg" 
  srcset="small.jpg 600w, medium.jpg 1000w, large.jpg 1200w" 
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
  alt="响应式图片"
/>
```

适用于需要根据不同屏幕分辨率或设备类型加载不同尺寸图像的情况。



### \<iframe>

- **Sandbox**

  > 用于设置 iframe 的行为限制，增加页面安全性。通过 sandbox 属性，可以禁用 JavaScript、表单提交等功能，甚至禁止外部资源的加载。

  ```html
  <iframe src="https://baidu.com" sandbox="allow-scripts allow-same-origin"></iframe>
  ```

  这里的 sandbox 限制了 iframe 的行为，只允许执行脚本并访问相同源的资源。



### \<video> & \<audio>

> 通用

- **controls** — 默认控件
- **autoplay** — 自动播放
- **loop** — 循环播放
- **muted** — 静音
- **preload** — 如何加载媒体
  - auto 默认
  - metadata 元数据
  - none 不加载
- **cross origin** — 跨域
  - anonymous
  - Use-credentials

> video

- poster — 封面图
- playsinline — 行内播放，多用于移动端

```html
<video src="xxx" controls=“false” autoplay muted loop poster="xxx"></video>
```

这里 **视频** 有一个封面，加载完成资源后将自动循环播放，且静音。浏览器无法控制暂停，因为没有控件。效果类似一个 gif 图



## 通用属性

### title

> 提供元素的附加信息

```html
<img src="logo.png" title="网站 Logo">
```

当用户将鼠标悬停在图像上时，会显示 “网站 Logo” 的提示



### hidden

> 隐藏元素，使其不可见，但仍然存在于页面的 DOM 中。

```html
<div hidden>这是隐藏的内容</div>
```



### contentEditable

> 将元素的内容设置为可编辑状态。
>
> 启用此属性后，用户可以直接在页面上修改元素的内容，类似于文字编辑器的功能。

- **true**

  ```html
  <div contentEditable="true">内容可以在页面上编辑</div>
  ```

- **false**

  ```html
  <div contentEditable="true">
      <p contentEditable="false">不可以编辑</p>
      <p>可以编辑</p>
  </div>
  ```

- **inherit**

  ```html
  <div contentEditable="true">
      <p contentEditable="inherit">p 元素继承父元素的可编辑状态</p>
  </div>
  ```

- **plaintext-only**

  > 与 **true** 不同的是，在 paste 其他地方的文案过来的时候，会清除样式，只 paste 纯文本，而 **true** 会带上原 copy 的样式。

  ```html
  <div contentEditable="plaintext-only">可编辑</div>
  ```



### draggable

> 指定一个元素是否可以被拖动。
>
> 通过设置此属性，可以将某些元素标记为可拖动的对象，并结合 JavaScript 监听拖放事件，实现交互功能。
>
> 图片和链接默认是可拖动的。

1. 设置拖动元素

   ```html
   <div draggable="true" style="width: 100px; height: 100px; background: lightblue;">
       Drag me!
   </div>
   ```

2. 禁止默认拖动行为

   ```html
   <img src="example.jpg" draggable="false" alt="Not draggable image">
   <a href="https://example.com" draggable="false">Not draggable link</a>
   ```



### accesskey

> 为元素指定一个快捷键。通过按下指定的快捷键，用户可以快速聚焦到该元素或激活它的功能（如提交按钮或链接）。

```html
<element accesskey="key">Content</element>
```

- key：定义的快捷键
- element：支持 accesskey 的元素（按钮、链接、输入框）

| **浏览器/操作系统** |          **组合键**           |
| :-----------------: | :---------------------------: |
|  Chrome（Windows）  |        Alt + accesskey        |
|    Chrome（Mac）    | Control + Option + accesskey  |
| Firefox（Windows）  |    Alt + Shift + accesskey    |
|   Firefox（Mac）    | Control + Option + accesskey  |
|    Safari（Mac）    | Control + Option + accesskey  |
|   Edge（Windows）   |        Alt + accesskey        |
|    IE（Windows）    | Alt + accesskey（需回车激活） |

例：

```html
<a href="https://example.com" accesskey="h">Home</a>
```

在 **chrome (Mac)** 中按下 Control + Option + H（Mac）即可激活链接。相当于触发了点击



### spellcheck

> 用于启用或禁用拼写检查和语法检查功能。
>
> 该属性主要影响输入字段和可编辑内容区域。

```html
<textarea spellcheck="true">This is a samle text with errrors.</textarea>
```

拼写错误的单词（如 samle 和 errrors）会被标记为错误，通常下方会有红色波浪线（具体样式取决于浏览器）。



### dir

> 用于指定文本内容的书写方向。
>
> 它对于多语言网站尤其重要，可以确保不同语言的文本在正确的方向上显示。

- **从左到右**

  默认情况下，大多数语言（如英语、法语等）从左到右显示。您可以显式设置 dir="ltr" 来确保该方向

  ```html
  <p dir="ltr">从左到右</p>
  ```

- **从右到左**

  对于阿拉伯语、希伯来语等语言，使用 dir="rtl" 来确保文本从右到左显示

  ```html
  <p dir="rtl">هذا نص من اليمين إلى اليسار</p> <!-- 阿拉伯语：这是从右到左的文本 -->
  ```

- **自动检测方向**

  使用 dir="auto" 让浏览器根据语言或字符自动选择文本方向

  ```html
  <p dir="auto">This sentence is in English, and this one is in العربية.</p>
  ```

  例子中的英语部分会从左到右显示，阿拉伯语部分会从右到左显示。



### translate

> HTML 规范中有一个 translate 属性，用于指示某些元素的内容是否应被翻译。
>
> 它与国际化（i18n）相关，特别是在网站需要支持多语言版本时，帮助开发者控制哪些元素应该被翻译。

```htlm
<p translate="yes">这是一个可翻译的文本</p>
<p translate="no">此文本不应翻译</p>
```



### data-*

> 允许开发者为元素存储自定义数据，不会影响页面的结构或样式。你可以通过 JavaScript 获取这些数据并进行操作。

```html
<div data-user-id="12345" data-role="admin">用户信息</div>
```

```js
const element = document.querySelector('[data-user-id]');
const userId = element.dataset.userId;  // 获取自定义数据
console.log(userId);  // 12345
```



### aria-*

> 用于增强页面的可访问性，特别是为视障用户提供辅助信息，帮助屏幕阅读器理解页面的结构和行为。

```html
<button aria-label="关闭窗口">X</button>
```

这里的 aria-label 属性为按钮提供了一个描述，屏幕阅读器会读出 “关闭窗口” 而不是按钮的内容 “X”。