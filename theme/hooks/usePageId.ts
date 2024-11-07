import { usePageData, useLocation } from 'rspress/runtime';

function usePageId() {
    const { siteData } = usePageData()
    const { pathname } = useLocation();
    
    return pathname.replace(siteData.base.replace(/\/$/, ''), '')
}

export default usePageId;