.
<script setup lang="ts">
import Gitalk from "gitalk";
import "gitalk/dist/gitalk.css";
import usePageId from "../hooks/usePageId";
import { onMounted } from "vue";

const pageId = usePageId();

onMounted(() => {
  new Gitalk({
    clientID: "Ov23li8KldjgRlDCK5Zs",
    clientSecret: "f1dd1dcdaadbaeddb5630c449f9fd476d35c27fa",
    repo: "Explorers-Notes-Gitalk",
    owner: "hzihhuang",
    admin: ["hzihhuang", "hzihhuang-site"],
    id: pageId.value, // 页面的唯一标识
    distractionFreeMode: false, // 弹幕模式
  }).render("gitalk-container");
});
</script>

<template>
  <div id="gitalk-container" />
</template>
