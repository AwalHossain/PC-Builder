import Link from 'next/link';
import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux';

export default function CategoryItem({ category }) {
    const { selectedItems } = useSelector((state) => state.selectComponent)
    const selected = selectedItems.find(item => item.category === category.value)

    return (
        <div key={category.name} className="c-item blank p-4 border-b border-gray-300 flex flex-col sm:flex-row items-center">
            <div className="img bg-blue-100 rounded overflow-hidden w-16 h-16 flex items-center justify-center flex-shrink-0 mb-2 sm:mb-0">
                <span className="text-2xl">{category.icon}</span>
            </div>
            <div className="details flex-1 flex flex-col sm:flex-row justify-between pl-0 sm:pl-10 items-center">
                <div className="component-name mb-2 sm:mb-0">
                    <span className="text-lg font-semibold">{category.name}</span>
                    <span className="mark bg-gray-700 text-white ml-2 px-2 rounded font-normal">Required</span>
                </div>
                <div className='flex-grow px-2'>
                {selected ? <span className='text-lg text-red-800'>{selected.title} - ${selected.price}</span> : <span className='text-xs text-red-400'>Not Selected</span>}
            </div>
                <Link href={`/select-component/${category.value}`} className="btn st-outline text-blue-500 mt-2 sm:mt-0">
                    {selected ? <ImCross /> : "Select"}
                </Link>
            </div>
        </div>
    )
}
