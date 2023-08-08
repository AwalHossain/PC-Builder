import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { ImCross } from 'react-icons/im';

export default function CategoryItem({ category }) {
    const { selectedItems } = useSelector((state) => state.selectComponent)
    const selected = selectedItems.find(item => item.category === category.value)

    return (
        <div key={category.name} className='flex items-center gap-5'>
            <div className='bg-sky-200 p-2 rounded'>
                <div className='text-2xl text-sky-900'>{category.icon}</div>
            </div>
            <div className='flex-grow'>
                <p className='text-lg font-semibold -mb-2'>{category.name}</p>
                {selected ? <span className='text-sm'>{selected.title} - ${selected.price}</span> : <span className='text-xs text-red-400'>Not Selected</span>}
            </div>
            <Link href={`/select-component/${category.value}`} className={`btn btn-sm ${selected ? "btn-error" : "btn-accent "}`}>{selected ? <ImCross /> : "Select"}</Link>
        </div>
    )
}
