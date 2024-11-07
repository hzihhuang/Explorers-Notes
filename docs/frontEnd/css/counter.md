---
title: CSS3 counter 计数器
date: 2023-08-17 10:28:00
---

# CSS3 counter 计数器

CSS计数器（[counter](https://caniuse.com/?search=counter)）属性允许我们自动对页面上的元素进行编号，这在创建有序列表或章节标题时非常有用。

## 什么是CSS计数器？

CSS计数器是一组用于自动递增编号的数据，它们可以通过CSS规则来增加、重置或显示。

## 如何使用CSS计数器？

使用CSS计数器通常涉及以下步骤：

1. 定义一个计数器
2. 使用 `counter-increment` 属性递增计数器
3. 使用 `content` 属性和 `counter()` 或 `counters()` 函数来显示计数器的值

下面我们将创建一个包含主列表项和子列表项的有序列表，并使用CSS计数器为它们自动编号。

### 定义CSS样式

首先，我们定义CSS样式。

```css
<style>
html { 
  /*  在 html 上定义计数器 h1 和 h2  */
  counter-reset: h1 h2;
}
.list {
  counter-reset: h2; /* 重置 h2 计数器 */
  /* h1 计数器自增 1 */
  counter-increment: h1;
}
.list::before {
  /* 使用 h1 计数器并使用 trad-chinese-informal 类型表述 */
  content: counter(h1, trad-chinese-informal);
}
.list div::before {
  counter-increment: h2;
  content: counter(h2)'、';
}
</style>
```

### 创建HTML结构

接下来，我们创建列表的HTML结构。
```html
<div class="list">
  <div>item</div>
  <div>item</div>
  <div>item</div>
  <div>item</div>
  <div>item</div>
  <div>item</div>
  <div>item</div>
  <div>item</div>
</div>
<div class="list">
  <div>item</div>
  <div>item</div>
</div>
```


## 试一试
[试试看，自己动手探索一下吧](https://codepen.io/hzihhuang/pen/oNJvPEK)