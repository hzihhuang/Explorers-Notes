import { BubbleDataType } from '@ant-design/x/es/bubble/BubbleList';
import { useLocalStorageState } from 'ahooks';

const useHistory = () => {
    const [] = useLocalStorageState<BubbleDataType[][]>('bubble-data-history', []);
}

export default useHistory;