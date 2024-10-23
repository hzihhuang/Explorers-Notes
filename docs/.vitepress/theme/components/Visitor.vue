<script setup lang="ts">
import { useData } from 'vitepress'
const { theme } = useData()
const { visitor } = theme.value
const show = import.meta.env.MODE !== "development"
</script>

<template>
  <img
    class="visitor"
    :src="`https://visitor-badge.laobi.icu/badge?page_id=${visitor.badgeId}`"
    onerror="this.style.display='none'"
    v-if="show"
  />
</template>

<style scoped>
.visitor {
  margin-left: 8px;
}
@media (min-width: 768px) and (max-width: 920px) {
  .visitor {
    display: none;
  }
}
</style>