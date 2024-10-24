.
<script setup lang="ts">
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css';
import usePageId from '../utils/usePageId';
import { computed } from 'vue';

const pageId = usePageId();

const options = computed(() => ({
    clientID: 'Ov23li8KldjgRlDCK5Zs',
    clientSecret: 'f1dd1dcdaadbaeddb5630c449f9fd476d35c27fa',
    repo: 'Explorers-Notes-Gitalk',
    owner: 'hzihhuang',
    admin: ['hzihhuang', 'hzihhuang-site'],
    id: pageId,      // 页面的唯一标识
    distractionFreeMode: false  // 弹幕模式
}))
</script>

<template>
    <Gitalk :options="options" />
</template>