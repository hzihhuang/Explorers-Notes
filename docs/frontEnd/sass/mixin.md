---
title: Mixin 艺术
date: 2024-12-31 10:00:00
---

# Mixin 艺术

Mixin 是 Sass 中的一个强大功能，用于封装可复用的样式块，减少代码重复，提高代码可维护性。通过 Mixin，你可以定义一段样式并传递参数，在多个地方灵活调用。

- 定义和调用：使用 @mixin 定义，@include 调用。
- 参数化：Mixin 支持参数，使样式更加灵活。
- 条件判断：可以根据条件生成不同的样式。
- 常用应用：如按钮样式、响应式布局、边框圆角等。

## 响应式布局

快速为一个元素定义它多个设备间的样式。

```scss
.demo {
  font-size: 16px;
  @include device("pc") {
    font-size: 24px;
  }
  @include device("laptop") {
    font-size: 18px;
  }
  @include device("pad") {
    font-size: 14px;
  }
  @include device("mobile") {
    font-size: 12px;
  }
}
```

```scss
@mixin device($device) {
  @if $device == "pc" {
    @media (min-width: 1440px) {
      @content;
    }
  } @else if $device == "laptop" {
    @media (min-width: 1024px) and (max-width: 1440px) {
      @content;
    }
  } @else if $device == "pad" {
    @media (min-width: 768px) and (max-width: 1024px) {
      @content;
    }
  } @else if $device == "mobile" {
    @media (max-width: 767px) {
      @content;
    }
  }
}
```

## 原子类

快速生成原子类，减少重复代码。

### 数值类
```html
<div class="mt-14 p-16"></div>
```
```scss
// 定义单位类型
$unit: 'px';

// 定义常用的值
$atomic-classes: (
  'mt': (12, 14),
  'p': (12, 16),
);

// 定义原子类与 CSS 属性的映射
$atomic-properties: (
  'mt': 'margin-top',
  'p': 'padding',
);

// 遍历原子类并生成对应的 CSS
@each $property, $values in $atomic-classes {
  $css-property: map-get($atomic-properties, $property);
  @each $value in $values {
    // 根据映射的属性生成相应的 CSS 类
    .#{$property}-#{$value} {
      #{$css-property}: #{$value}#{$unit};
    }
  }
}
```

### 属性类

```html
<div class="flex items-center justify-center"></div>
```
```scss
// 属性类映射表：类名与对应的 CSS 规则
$utility-classes: (
  'flex'          : 'display: flex;',
  'items-center'  : 'align-items: center;',
  'justify-center': 'justify-content: center;',
);

// 遍历生成属性类的 CSS
@each $class, $rules in $utility-classes {
  .#{$class} {
    #{$rules};
  }
}
```

## 超出省略
```scss
@mixin text-ellipsis($lines: 1) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; // 用于多行兼容
  -webkit-box-orient: vertical;

  @if $lines == 1 {
    white-space: nowrap; // 单行省略
  } @else {
    -webkit-line-clamp: $lines; // 多行省略
    white-space: normal; // 恢复多行样式
  }
}

// 使用示例
.box1 {
  @include text-ellipsis();  // 单行省略
}
.box2 {
  @include text-ellipsis(3); // 省略 3 行
}
```

## 遮罩层
```scss
@mixin overlay($color: black, $opacity: 0.5) {
  background-color: rgba($color, $opacity);
  position: absolute;
  inset: 0;
}

// 使用示例
.overlay {
  @include overlay(#000, 0.7);
}
```

## 背景颜色动画
```scss
@mixin animated-background($colors, $duration: 5s) {
  // 定义唯一的动画名称
  $animation-name: bg-change-#{unique-id()};

  // 动态生成 keyframes
  @keyframes #{$animation-name} {
    @each $color, $index in $colors {
      #{percentage(($index - 1) / (length($colors) - 1))} {
        background-color: $color;
      }
    }
  }
  animation: #{$animation-name} $duration infinite alternate;
}

// 使用示例
.box {
  width: 200px;
  height: 200px;
  @include animated-background((#ff7e5f, #feb47b, #86a8e7), 10s);
}
```

