import { computed } from 'vue'
import { useData } from 'vitepress'

import useFormatPath from './useFormatPath'

/**
 * 获取当前页面的 pageId 用于页面统计和评论（默认为 route.path）
 */
function usePageId() {
  const { frontmatter } = useData()
  const formatPath = useFormatPath()

  return computed(() => frontmatter?.value?.pageId ?? formatPath.value)
}

export default usePageId;