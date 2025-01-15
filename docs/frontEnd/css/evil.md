---
title: CSS 邪门左道
date: 2024-10-28 12:00:00
---

# CSS 邪门左道

总结记录一些奇技淫巧。

## 文本截断（单行与多行）

### 单行文本截断

当文本内容超出容器宽度时，通过 text-overflow 实现优雅的省略号效果。

```css
.truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

### 多行文本截断

使用 -webkit-line-clamp 实现多行截断效果（需配合 display: -webkit-box）。

```csss
.multiline-truncate {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3; /* 显示 3 行 */
}
```

## 强制黑白显示

利用 filter 强制转换为黑白风格。

```css
.grayscale {
  filter: grayscale(100%);
}
```

## 文字镂空效果

通过 background-clip 实现文字镂空效果，文字仅显示背景图片的内容。

```css
.hollow-text {
  font-size: 48px;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(45deg, #ff0000, #0000ff);
  -webkit-background-clip: text;
}
```

## icon 控制颜色
```css
.icon {
  width: 100px;
  height: 100px;
  /* 设置 icon 颜色 可以渐变色*/
  background: linear-gradient(45deg, #3498db, #2ecc71);
  /* 使用「远程 or 本地」图像作为遮罩 */
  mask-image: url('xxx.png');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}
```

## 控制元素比例

### padding

通过 padding 和百分比实现比例锁定，创建一个总是正方形的容器。

```css
.square {
  width: 100%;
  padding-top: 100%; /* 高度等于宽度 */
  position: relative;
}

.square-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
```

### aspect-ratio

现代浏览器支持 aspect-ratio 属性，可以直接定义宽高比。如果考虑兼容性不推荐使用

```css
.square {
  width: 200px; /* 或其他任意宽度 */
  aspect-ratio: 1 / 1; /* 宽高比 1:1 */
  background: #3498db;
}
```

## 垂直水平居中

### flexbox

flexbox 是实现垂直居中的最推荐方法，简单灵活。

```css
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 200px;
  background: #f1c40f;
}
```

### grid

grid 布局提供更强大的布局能力。

```css
.container {
  display: grid;
  place-items: center; /* 水平和垂直居中 */
  height: 200px;
  background: #3498db;
}
```

### position & transform

通过 position 和 transform 实现。

```css
.container {
  position: relative;
  height: 200px;
  background: #e74c3c;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 水平和垂直居中 */
}
```

### table

通过模拟表格实现垂直居中。

```css
.container {
  display: table;
  height: 200px;
  width: 100%;
  background: #9b59b6;
}

.content {
  display: table-cell;
  vertical-align: middle; /* 垂直居中 */
  text-align: center; /* 水平居中（可选） */
}
```

### 文本垂直居中

适用于单行文本：

```css
.container {
  height: 200px;
  line-height: 200px; /* 行高等于容器高度 */
  text-align: center; /* 水平居中（可选） */
  background: #2ecc71;
}
```
