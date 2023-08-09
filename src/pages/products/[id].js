import RootLayout from '<test>/components/Layout/RootLayout';
import Reviews from '<test>/components/UI/Reviews';
import Head from 'next/head';
import Image from 'next/image';
import { BsArrowReturnRight } from 'react-icons/bs';

export default function ProductDetails({ product }) {

    return (
        <>
            <Head>
                <title>{product.title}</title>
            </Head>
            <div className='min-h-screen py-8 px-4'>
                <div className='flex flex-col gap-5 md:flex-row'>
                    <div className='flex-1'>
                        <Image src="https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" width={500} height={500} className='w-full' />
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-primary font-semibold text-2xl'>{product.title}</h1>
                        <div className=' flex items-center gap-4 mt-2'>
                            <div className="badge badge-secondary">{product.category}</div>
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-2'>
                            <p className='font-bold text-2xl'>$ {product.price}</p>
                            <div className="badge badge-sm badge-success">{product.status}</div>
                        </div>
                        <div className='mt-4'>
                            <div>
                                <h3 className='font-semibold text-lg'>Key Features:</h3>
                                <ul className='ml-3'>

                                    {
                                        product.keyfeatures.map(feature => <div key={feature} className='flex items-center gap-3'>
                                            <BsArrowReturnRight />
                                            <li>{feature}</li>
                                            {/*  <li><span className='font-semibold'>Model:</span> PRO MP241X</li> */}
                                        </div>)
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <p className='text-xl mt-4'>{product.description}</p>
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

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://pc-builder-server-opal.vercel.app/products/${params?.id}`)
    const data = await res.json()

    return { props: { product: data.data } }
}