<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import Visitor from "./components/Visitor.vue";
import { useData } from "vitepress";
import { provide } from "vue";
import Gitalk from "./components/Gitalk.vue";
import DocFooter from "./components/DocFooter.vue";

const { Layout } = DefaultTheme;
const { isDark } = useData();

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
    const canAnimation = "startViewTransition" in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (canAnimation) {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${Math.hypot(
                Math.max(x, innerWidth - x),
                Math.max(y, innerHeight - y)
            )}px at ${x}px ${y}px)`,
        ];
        await document.startViewTransition(() => (isDark.value = !isDark.value))
            .ready;
        document.documentElement.animate(
            {
                clipPath: isDark.value ? clipPath.reverse() : clipPath,
            },
            {
                duration: 400,
                easing: "linear",
                pseudoElement: isDark.value
                    ? "::view-transition-old(root)"
                    : "::view-transition-new(root)",
            }
        );
        return;
    } else {
        isDark.value = !isDark.value;
    }
});
</script>

<template>
    <Layout v-bind="$attrs">
        <template #nav-bar-title-after>
            <Visitor />
        </template>
        <!-- <Gitalk /> -->
    </Layout>
</template>
