---
title: 属性篇
date: 2025-01-015 14:00:00
---

# HTML 属性篇

不常见但有时非常有用的功能性属性

## 元素独有


### \<a\> — download
- **作用**：指定链接点击后下载指定的文件，而不是导航到文件。
- **使用场景**：当你需要提供文件下载链接时，可以使用 download 属性，直接让用户下载文件。

```html
<a href="file.pdf" download="example">下载 PDF 文件</a>
```
在这个例子中，点击链接时浏览器会下载 file.pdf，并将文件名显示为 example.pdf。

### \<img\> 标签 - srcset 和 sizes
- **作用**：这两个属性用于为响应式图像提供多个来源，浏览器会根据屏幕尺寸和分辨率自动选择最适合的图片。
  -	srcset：指定一组图像及其尺寸或分辨率。
  -	sizes：告知浏览器图片在不同视口宽度下应占据的显示宽度，帮助浏览器决定应加载哪一张图片。
-	**使用场景**：适用于需要根据不同屏幕分辨率或设备类型加载不同尺寸图像的情况。

```html
<img 
  src="small.jpg" 
  srcset="small.jpg 600w, medium.jpg 1000w, large.jpg 1200w" 
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
  alt="响应式图片"
/>
```

### \<iframe\> 标签 - sandbox
- **作用**：用于设置 iframe 的行为限制，增加页面安全性。通过 sandbox 属性，可以禁用 JavaScript、表单提交等功能，甚至禁止外部资源的加载。
- **使用场景**：如果你嵌入的内容来自不可信的来源，使用 sandbox 可以限制其功能，防止潜在的安全风险。
```html
<iframe src="https://baidu.com" sandbox="allow-scripts allow-same-origin"></iframe>
```
这里的 sandbox 限制了 iframe 的行为，只允许执行脚本并访问相同源的资源。


## 通用属性

### title
- **作用**：提供元素的附加信息。当用户将鼠标悬停在元素上时，浏览器会显示 title 属性的内容。
- **使用场景**：通常用于提供额外的提示信息，例如在图像上添加描述，或者在链接上显示更多信息。
```html
<img src="logo.png" title="网站 Logo">
```
在这个例子中，当用户将鼠标悬停在图像上时，会显示 “网站 Logo” 的提示。

### hidden
- **作用**：隐藏元素，使其不可见，但仍然存在于页面的 DOM 中。
- **使用场景**：适用于需要动态显示或隐藏内容的情况，尤其是通过 JavaScript 控制的交互元素。
```html
<div hidden>这是隐藏的内容</div>
```
通过 hidden 属性，元素不会显示，但可以通过 JavaScript 控制其显示状态。

### data-*
- **作用**：允许开发者为元素存储自定义数据，不会影响页面的结构或样式。你可以通过 JavaScript 获取这些数据并进行操作。
- **使用场景**：常用于存储与页面元素相关的额外数据，如用户 ID、产品 ID 等。
```html
<div data-user-id="12345" data-role="admin">用户信息</div>
```
```js
const element = document.querySelector('[data-user-id]');
const userId = element.dataset.userId;  // 获取自定义数据
console.log(userId);  // 12345
```
### aria-*
- **作用**：这些属性用于增强页面的可访问性，特别是为视障用户提供辅助信息，帮助屏幕阅读器理解页面的结构和行为。
- **使用场景**：通常与交互性元素（如按钮、链接、表单）一起使用，帮助改进用户体验。
```html
<button aria-label="关闭窗口">X</button>
```
这里的 aria-label 属性为按钮提供了一个描述，屏幕阅读器会读出 “关闭窗口” 而不是按钮的内容 “X”。