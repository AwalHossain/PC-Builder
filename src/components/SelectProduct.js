import { addItem } from '<test>/redux/features/selectComponent';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

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
        <div className="bg-gray-100 shadow-xl rounded-md overflow-hidden w-full md:w-[400px]">
        <figure>
          <img
            src="https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Movie"
            className='h-60 md:h-[300px] w-full object-cover'
          />
        </figure>
        <div className="p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <div className='flex items-center gap-2 mb-3'>
            <span className="bg-gray-300 py-1 px-2 rounded-md text-sm">{product.category}</span>
            <div className="flex items-center">
              {[...Array(Math.round(product.rating))].map((_, index) => (
                <div
                  key={index}
                  className="w-4 h-4 bg-yellow-400 rounded-full"
                ></div>
              ))}
              {[...Array(5 - Math.round(product.rating))].map((_, index) => (
                <div
                  key={index}
                  className="w-4 h-4 bg-gray-300 rounded-full"
                ></div>
              ))}
            </div>
          </div>
          <p className='text-gray-600'>{product.description}</p>
          <div className='flex justify-between items-center mt-3'>
            <p className='font-semibold text-xl'>$ {product.price}</p>
            <div className={`py-1 px-2 rounded-md text-sm ${outOfStock ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>
              {product.status}
            </div>
          </div>
          {selected ? (
            <button disabled className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md cursor-not-allowed">
              Selected
            </button>
          ) : (
            <button
              disabled={outOfStock}
              onClick={onClickHandle}
              className={`mt-4 w-full py-2 rounded-md text-white ${outOfStock ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              Select
            </button>
          )}
        </div>
      </div>
      
      
    )
}
