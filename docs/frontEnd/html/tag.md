---
title: 标签篇
date: 2025-01-16 16:00:00
---

# 标签篇

## \<progress>

> 进度条：表示任务的完成度。它通常用在上传、下载或长时间运行的操作中。



<progress value="70" max="100"> </progress>

```html
<progress value="70" max="100"> </progress>
```

在这个示例中，进度条的当前值是 70，最大值为 100，表示任务完成了 70%。



## \<meter>

> 测量值：它通常用于表示某个量度范围内的当前值。

<meter value="0.6" min="0" max="1">60%</meter>

```html
<meter value="0.6" min="0" max="1">60%</meter>
```



## \<picture>

> 用于响应式图像，它允许根据不同的条件（如屏幕尺寸、图像格式）选择合适的图像资源。

```html
<picture>
  <source media="(max-width: 600px)" srcset="small.jpg">
  <source media="(min-width: 601px)" srcset="large.jpg">
  <img src="default.jpg" alt="Responsive Image">
</picture>
```



## \<source>

> 通常与 <audio> 或 <video> 标签一起使用，用来指定多种格式的资源，以适应不同浏览器的支持。

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogv" type="video/ogg">
  <p>您的浏览器不支持视频播放。</p>
</video>
```

在这个例子中，浏览器会根据支持的格式加载视频。如果浏览器不支持 MP4 格式，它会尝试加载 OGG 格式的视频。



## \<template>

> 用于定义不立即渲染的 HTML 模板，通常在 JavaScript 中通过克隆模板来动态渲染。

```html
<template id="my-template">
  <p>这是一段模板内容。</p>
</template>

<script>
  const template = document.getElementById("my-template");
  const clone = document.importNode(template.content, true);
  document.body.appendChild(clone);
</script>
```

在这个示例中，\<template> 中的内容不会立即渲染，只有在 JavaScript 中通过 document.importNode() 复制并插入到页面中时才会显示。



## \<details> 和 \<summary>

> 用于创建一个可展开/收起的区域，而 <summary> 标签定义了该区域的可点击部分。

<details>
  <summary>点击展开更多信息</summary>
  <p>这是详细信息部分。</p>
</details>

```html
<details>
  <summary>点击展开更多信息</summary>
  <p>这是详细信息部分。</p>
</details>
```

当用户点击 \<summary> 中的文本时，\<details> 中的内容会展开或收起。



## \<dialog>

> 用于创建对话框，它可以弹出一个可交互的窗口。

<dialog id="myDialog">
  <p>这是一个对话框。</p>
  <button onclick="document.getElementById('myDialog').close()">关闭</button>
</dialog>
<button onclick="document.getElementById('myDialog').showModal()">打开对话框</button>

```html
<dialog id="myDialog">
  <p>这是一个对话框。</p>
  <button onclick="document.getElementById('myDialog').close()">关闭</button>
</dialog>
<button onclick="document.getElementById('myDialog').showModal()">打开对话框</button>
```



## \<select> 

> 用于创建一个下拉选择菜单

- 单选

  <form>
    <label for="fruit">选择你喜欢的水果:</label>
    <select id="fruit" name="fruit">
      <option value="apple">苹果</option>
      <option value="banana">香蕉</option>
      <option value="orange">橙子</option>
    </select>
  </form>

  ```html
  <form>
    <label for="fruit">选择你喜欢的水果:</label>
    <select id="fruit" name="fruit">
      <option value="apple">苹果</option>
      <option value="banana">香蕉</option>
      <option value="orange">橙子</option>
    </select>
  </form>
  ```

- 多选

  <form>
    <label for="fruits">选择你喜欢的水果:</label>
    <select id="fruits" name="fruits" multiple>
      <option value="apple">苹果</option>
      <option value="banana">香蕉</option>
      <option value="orange">橙子</option>
    </select>
  </form>

  ```html
  <form>
    <label for="fruits">选择你喜欢的水果:</label>
    <select id="fruits" name="fruits" multiple>
      <option value="apple">苹果</option>
      <option value="banana">香蕉</option>
      <option value="orange">橙子</option>
    </select>
  </form>
  ```

- 分组

  <form>
    <label for="car">选择汽车品牌:</label>
    <select id="car" name="car">
      <optgroup label="德国">
        <option value="audi">奥迪</option>
        <option value="bmw">宝马</option>
      </optgroup>
      <optgroup label="日本">
        <option value="toyota">丰田</option>
        <option value="honda">本田</option>
      </optgroup>
    </select>
  </form>

  ```html
  <form>
    <label for="car">选择汽车品牌:</label>
    <select id="car" name="car">
      <optgroup label="德国">
        <option value="audi">奥迪</option>
        <option value="bmw">宝马</option>
      </optgroup>
      <optgroup label="日本">
        <option value="toyota">丰田</option>
        <option value="honda">本田</option>
      </optgroup>
    </select>
  </form>
  ```

  

