import clsx from 'clsx';
import { ItemsType } from './list';
import { ReactNode } from 'react';

const Links = ({ list }: { list: ItemsType[] }) => {
    const itemClassName = clsx(
        'flex flex-col gap-4 px-6 py-4',
        'bg-gray-100 rounded-md cursor-pointer border border-transparent transition',
        'hover:border-gray-400',
        'dark:bg-gray-700'
    );

    const getIcon = (icon: ReactNode) => {
        // 检查是否为图片 url 或者 base64
        if (typeof icon === 'string' && (icon.startsWith('http') || icon.startsWith('data:image'))) {
            return (
                <div className='w-12 h-12 bg-gray-200 p-2 rounded-md shrink-0'>
                    <img className='w-full h-full object-scale-down' src={icon} alt="" />
                </div>
            )
        }
        return icon;
    }
    return (
        <div className='grid gap-4' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr)) ' }}>
            {list.map((i, idx) => (
                <a className={itemClassName} href={i.link} key={i.title + idx}>
                    <div className='flex items-center gap-4 h-10'>
                        {i.icon && getIcon(i.icon)}
                        <div className='text-lg font-bold'>{i.title}</div>
                    </div>
                    <div className='text-sm'>{i.desc}</div>
                </a>
            ))}
        </div>
    )
}

export default Links