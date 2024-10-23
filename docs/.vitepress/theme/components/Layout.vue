<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme';
import Visitor from './Visitor.vue';

const { Layout } = DefaultTheme;

</script>

<template>
    <Layout v-bind="$attrs">
        <template #nav-bar-title-after>
            <Visitor />
        </template>
    </Layout>
</template>