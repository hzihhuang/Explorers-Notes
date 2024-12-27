---
title: JavaScript 观察者 API
date: 2024-12-27 16:00:00
---

# JavaScript 观察者 API

在现代 Web 开发中，观察者模式是一种非常重要的设计模式，它允许我们监听和响应对象的变化。JavaScript 提供了几种强大的观察者 API，使得我们能够轻松地处理 DOM 变化、视口变化、元素尺寸变化等各种动态场景。本文将介绍四种常见的观察者 API：`MutationObserver`、`IntersectionObserver`、`ResizeObserver` 和 `PerformanceObserver`。

## 1. **MutationObserver：监听 DOM 变动**

### 1.1 什么是 `MutationObserver`？

`MutationObserver` 是一个用于观察 DOM 树变化的 API。当 DOM 中的元素发生变化时（如添加、删除子节点或更改属性等），`MutationObserver` 可以发出通知。这在某些场景下非常有用，例如，当我们想要在某些 DOM 元素变化时自动触发某些操作时。

### 1.2 典型用法

我们可以创建一个 `MutationObserver` 实例，并通过指定配置来监听特定的 DOM 变化。以下是一个基本示例：

```javascript
const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === "childList") {
      console.log("子节点发生变化");
    } else if (mutation.type === "attributes") {
      console.log("元素属性发生变化");
    }
  });
});

const config = { attributes: true, childList: true, subtree: true };
observer.observe(document.body, config);

// 停止观察
// observer.disconnect();
```

### 1.3 常见用途

- 监听 DOM 结构的动态变化
- 监听元素属性的变化，如 class、style 等
- 适用于处理由 JavaScript 动态生成的内容

## 2. **IntersectionObserver：监听元素与视口交集**

### 2.1 什么是 `IntersectionObserver`？

`IntersectionObserver` 用于监听元素与视口（或其他元素）的交叉情况。它常用于实现懒加载、无限滚动等功能，能够在元素进入或离开视口时触发回调函数，从而做出响应。

### 2.2 典型用法

我们可以使用 `IntersectionObserver` 来监听某个元素是否进入视口，并执行相应的操作。例如：

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("元素进入视口");
      } else {
        console.log("元素离开视口");
      }
    });
  },
  { threshold: 0.5 }
);

const target = document.querySelector("#target");
observer.observe(target);
```

### 2.3 常见用途

- 实现懒加载：当图片或其他内容进入视口时才加载
- 无限滚动：当页面滚动到底部时，加载更多内容
- 实现可视区域检测：例如，判断广告元素是否完全进入视口

## 3. **ResizeObserver：监听元素尺寸变化**

### 3.1 什么是 `ResizeObserver`？

`ResizeObserver` 允许我们监听元素的尺寸变化，它能够在元素大小发生变化时触发回调，常用于响应式设计中，帮助我们在窗口或元素大小改变时进行调整。

### 3.2 典型用法

我们可以通过 `ResizeObserver` 来监控元素尺寸的变化，并根据变化调整布局或执行其他操作：

```javascript
const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    console.log("元素尺寸变化:", entry.contentRect);
  });
});

const target = document.querySelector("#target");
observer.observe(target);
```

### 3.3 常见用途

- 响应式设计：根据元素的尺寸变化调整布局
- 动态调整元素位置或大小：例如，调整视频播放器的大小
- 监控布局变化，确保 UI 元素始终在正确的位置

## 4. **PerformanceObserver：监听性能相关事件**

### 4.1 什么是 `PerformanceObserver`？

`PerformanceObserver` 是用于监控性能相关事件的 API。它可以监听浏览器的性能信息，如资源加载、页面渲染时间等。该 API 主要用于性能分析和优化。

### 4.2 典型用法

我们可以使用 `PerformanceObserver` 来监听性能相关的条目，例如资源加载、页面加载等：

```javascript
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ entryTypes: ["resource", "navigation"] });
```

### 4.3 常见用途

- 页面加载性能分析：监控页面加载时间、资源加载时间
- 优化页面渲染：分析关键渲染指标，如 `first-contentful-paint` (FCP)
- 资源加载优化：监控图片、脚本等静态资源的加载情况

## 5. **总结**

JavaScript 中的观察者 API 提供了灵活、性能高效的方式来监听 DOM 变化、元素交集、尺寸变化和性能数据。使用这些 API，可以帮助我们构建更具响应性和高效的 Web 应用。

- **`MutationObserver`** 用于监听 DOM 结构的变化
- **`IntersectionObserver`** 用于监听元素与视口的交集
- **`ResizeObserver`** 用于监听元素尺寸的变化
- **`PerformanceObserver`** 用于监听性能相关的事件

这些 API 的使用可以提升应用性能，减少不必要的资源消耗，并增强用户体验。掌握这些工具，将帮助开发者更好地处理动态内容和性能问题。
