import RootLayout from '<test>/components/Layout/RootLayout';
import Reviews from '<test>/components/UI/Reviews';
import Head from 'next/head';

export default function ProductDetails({ product }) {

    return (
<>
  <Head>
    <title>{product.title}</title>
  </Head>
  <div className='min-h-screen py-8 px-4'>
    <div className='flex flex-col md:flex-row gap-8'>
      <div className='md:w-1/2'>
        <img
          src="https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Shoes"
          className='w-full rounded-lg'
        />
      </div>
      <div className='md:w-1/2'>
        <h1 className='text-3xl font-semibold mb-2'>{product.title}</h1>
        <div className='flex items-center gap-2 mb-4'>
          <span className="bg-gray-200 py-1 px-2 rounded-md text-sm">{product.category}</span>
          <div className="flex items-center">
            <div className="bg-yellow-400 rounded-full w-4 h-4 mr-1"></div>
            <div className="bg-yellow-400 rounded-full w-4 h-4 mr-1"></div>
            <div className="bg-yellow-400 rounded-full w-4 h-4 mr-1"></div>
            <div className="bg-yellow-400 rounded-full w-4 h-4 mr-1"></div>
            <div className="bg-yellow-400 rounded-full w-4 h-4 mr-1"></div>
          </div>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-xl font-semibold'>$ {product.price}</p>
          <div className="bg-green-500 py-1 px-2 rounded-md text-sm">{product.status}</div>
        </div>
        <div>
          <h3 className='text-xl font-semibold mb-2'>Key Features:</h3>
          <ul className='list-disc ml-6 space-y-2'>
            {product.keyfeatures.map(feature => (
              <li key={feature} className='flex items-center gap-2'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <p className='text-lg mt-8'>{product.description}</p>
    <Reviews />
  </div>
</>
    
    )
}

ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};


export const getStaticPaths = async () => {
    const res = await fetch('https://pc-builder-server-opal.vercel.app/products')
    const products = await res.json()

    const paths = products.data.map((product) => ({
        params: { id: product._id },
    }))
console.log(paths,'checking path');
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://pc-builder-server-opal.vercel.app/products/${params?.id}`)
    const data = await res.json()

    return { props: { product: data.data } }
}