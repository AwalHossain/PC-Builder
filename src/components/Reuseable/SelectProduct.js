import { addItem } from '<test>/redux/features/selectComponent'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function SelectProduct({ product }) {
    const dispatch = useDispatch()
    const router = useRouter();

    const onClickHandle = () => {
        dispatch(addItem(product))
        router.back()
    }
    const { selectedItems } = useSelector((state) => state.selectComponent)
    const selected = selectedItems.find(item => item._id === product._id)

    const outOfStock = product?.category === "Out of Stock"

    return (
        <div className="card bg-base-200 shadow-xl w-[400px] rounded">
            <figure>
                <Image src="https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Movie" height={500} width={500} className='h-full' />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {product.title}
                </h2>
                <div className='flex justify-between items-center'>
                    <div className="badge badge-secondary">{product.category}</div>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <p>{product.description}</p>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-2xl'>$ {product.price}</p>
                    <div className={`badge badge-sm ${outOfStock ? "badge-error" : "badge-success"}`}>{product.status}</div>
                </div>
                {selected ?
                    <button disabled className="btn btn-full btn-primary">Selected</button> :
                    <button disabled={outOfStock} onClick={onClickHandle} className="btn btn-full btn-primary">Select</button>}
            </div>
        </div>
    )
}
