import { MODE } from '@/utils/common'

/** 访客量 */
const Visitor = () => {
    if (MODE === 'development') return null;
    return (
        <img
            className="ml-8 px"
            src={`https://visitor-badge.laobi.icu/badge?page_id=hzihhuang_dev`}
        />
    )
}

export default Visitor