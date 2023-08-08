import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {

    return (
        <div className="card w-96 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl hover:-translate-y-1 transition-transform">
        <div className="relative">
          <Image src="https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" width={500} height={500} />
        </div>
        <div className="card-body p-6">
          <div className="flex justify-between items-center mb-2">
            <div className="rating rating-xs">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-white">{product.title}</h2>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <div className="flex justify-between items-center mb-2">
            <div className="badge badge-secondary bg-blue-600 text-white text-sm py-1 px-2 rounded">{product.category}</div>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl text-blue-400">$ {product.price}</p>
            <div className="badge badge-sm badge-success bg-green-600 text-white py-1 px-2 rounded">{product.status}</div>
          </div>
          <Link href={`/products/${product._id}`} className='btn btn-primary mt-4'>
            See Details
          </Link>
        </div>
      </div>
      
      
      
    )
}
