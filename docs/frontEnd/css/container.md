---
title: container 容器查询
date: 2023-08-18 10:18:00
---

# CSS3 容器查询 简明指南

## 1. 什么是容器查询？

容器查询（Container Queries）是 CSS 中的一项新功能，它可以根据一个容器元素的尺寸来改变该元素内部内容的样式，而不仅仅是基于视口（浏览器窗口）尺寸。这样，我们就能创建更加灵活和自适应的布局。

### 示例：

假设有一个容器宽度变化的卡片组件，我们可以使用容器查询调整卡片样式：

```css
/* 当容器宽度大于500px时，卡片的背景色变为红色 */
@container (min-width: 500px) {
  .card {
    background-color: red;
  }
}
```

## 2. 如何使用容器查询？

### 2.1 启用容器查询

首先，容器元素需要声明 `contain` 属性，才能作为容器查询的参考元素。

```css
.container {
  contain: layout style;
}
```

### 2.2 容器查询的基本语法

容器查询语法类似于媒体查询，我们可以根据容器的宽度、高度来应用不同的样式。

```css
/* 当容器宽度大于500px时，改变卡片的布局 */
@container (min-width: 500px) {
  .card {
    display: flex;
  }
}
```

## 3. 容器查询的实际应用

### 3.1 响应式组件设计

容器查询可以让我们设计响应式的组件，而不需要依赖视口的大小。比如在一个组件的容器变宽时，我们调整它的布局和样式。

```css
/* 容器宽度大于600px时，改变按钮的字体大小 */
@container (min-width: 600px) {
  .button {
    font-size: 18px;
  }
}

/* 容器宽度小于600px时，改变按钮的字体大小 */
@container (max-width: 599px) {
  .button {
    font-size: 12px;
  }
}
```

### 3.2 适应不同容器的布局

容器查询也可以帮助调整组件内的元素布局，比如在一个容器内，网格布局可以根据容器的宽度来改变列数。

```css
/* 容器宽度大于800px时，使用3列布局 */
@container (min-width: 800px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 容器宽度小于800px时，使用2列布局 */
@container (max-width: 799px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## 4. 总结

容器查询让我们能够根据容器的尺寸来动态调整布局和样式，而不依赖于视口。这使得响应式设计更加灵活和精细，特别是对于组件级别的设计。
