---
title: Masonry 瀑布流
date: 2023-08-18 10:18:00
---

# Masonry 瀑布流

> 大概是今年 23 年 5 月份左右，在遇到的一个实现 `Masonry` 的问题，现在过了段时间在这里再讨论一下实现方案以及一些优缺点。

## 介绍
> 瀑布流是一种很受图片网站欢迎的布局方式，英文名: Masonry Layout
>
> 特点: 内容由不同高度的方格从左到右自上而下依次排列组成。有种参差不齐又缺又很整齐的感觉。
> 以下站点皆是瀑布流布局的例子

- [Pexels](https://www.pexels.com/zh-cn/)
- [花瓣网](https://huaban.com/discovery)
- [Pinterset](https://www.pinterest.com/)
- [Civitai](https://civitai.com/)
## JS 实现
> 自己写或是加载其他人已经写好的库。目前这种方式是最容易也最完美的方案

原理基本上都是通过 `JavaScript` 计算共有多少个卡片，再计算每个卡片的宽度和高度，因父容器的宽度每行放置多少个卡片等等要求。将全部卡片的 `position` 都设置成 `absolute` 逐一计算去 `top` 和 `left` 定位。

由于所有卡片位置都是计算出来的，所以还能在父容器宽度改变的时候，将卡片动态移动并且重新排列。

唯一的不足是因为介入了太多的计算，卡片多的时候不建议根据父元素宽度动态重新排列，否则可能会出现卡顿现象。并且由于计算需要时间完成，在完成之前卡片并未设置位置，所以基本上都堆叠在左上角了


- 原生: [Masonry.js](https://masonry.desandro.com/)、[Isotope.js](https://isotope.metafizzy.co/)
- React：[react-responsive-masonry](https://github.com/cedricdelpoux/react-responsive-masonry)、[react-masonry-component](https://github.com/hoschi/react-masonry-component)
- Vue: [vue-waterfall](https://github.com/MopTym/vue-waterfall)、[vue-waterfall-easy](https://github.com/lfyfly/vue-waterfall-easy/tree/master)、[vue-virtual-collection](https://github.com/starkwang/vue-virtual-collection)、[vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout)


## CSS 实现
> CSS 直接支持，性能优秀。
### 多列布局
```scss
.masonry {
  /* 设置四列，每列间距 0 */
  column-count: 4;
  column-gap: 0;
}
```
> 只需要两行代码就能实现。但是它有一个缺陷，就是只能**从上到下，再从左到右**排列。
>
> 如果我们想列出的内容是根据时间由新至旧排列，这样的排列顺序就未必合适了。我们辉期望它是由左到右，再由上到下排列。

[案例一](https://codepen.io/hzihhuang/pen/NWeWRzp)

### Flex 布局
> 利用 flex 竖着排列，固定容器高度让它自动换行实现，如果想要完美展示需要我们计算最合适的容器高度。
>
> 缺陷同上
> 
> 但是由于 flex 中有一个 order 的属性，可以让我们自己控制图片的排列顺序，所以可控性会高一点，甚至经过计算后也能实现 `从左到右，从上至下`的排列
```scss
.masonry {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 2800px;
}
```
[案例二](https://codepen.io/hzihhuang/pen/Yzdzpzw::fa-solid)

### Grid 布局新特性（实验阶段）
> grid-template-rows: masonry;
> 可在 火狐浏览器（开启实验模式） 中试用

```html
<div class="masonry">
  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>
  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>
  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>
  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>
  <div class="item"><img src="https://picsum.photos/160/90" alt=""></div>
  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>
  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>
  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>
  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>
  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>
  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>
  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>
  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>
  <div class="item"><img src="https://picsum.photos/160/90" alt=""></div>
  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>
  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>
  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>
  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>
  <div class="item"><img src="https://picsum.photos/160/90" alt=""></div>
  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>
  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>
  <div class="item"><img src="https://picsum.photos/160/90" alt=""></div>
  <div class="item"><img src="https://picsum.photos/90/160" alt=""></div>
  <div class="item"><img src="https://picsum.photos/100/100" alt=""></div>
</div>
<style>
  .masonry {
    display: none;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: masonry;
    gap: 16px
  }
  @supports (grid-template-rows: masonry) {
    .masonry {
      display: grid;
    }
  }
  .item {
    width: 100%;
    overflow: hidden;
    height: auto;
    border-radius: 8px;
  }
  .item > img {
    display: block;
    width: 100%;
    height: auto;
  }
</style>
```

## 结尾
> 最后可以看出，`Masonry` 完美的解决方法还未出现，都有各自的优劣势，不过现在用 `js` 会比较方便功能性会强。
> 很多使用 `js` 实现 `Masonry` 网站都基本上限制了他的动态设置列数，或者延迟计算（等待容器宽度变化停止后）。主要是当卡片变多的时候动态计算会大幅度影响性能，所以限制列数或者延迟计算是必要的。

- [花瓣网](https://huaban.com/discovery) 没有限制，在浏览器大小变化时会卡顿是一个很好的例子。
- [Pexels](https://www.pexels.com/zh-cn/) 则是限制了它的变化。
- [Civitai](https://civitai.com/) 进行了延迟计算，等待容器宽度停止变化后再计算变化。