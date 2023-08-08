
import RootLayout from '<test>/components/Layout/RootLayout';
import ProductCard from '<test>/components/ProductCard';
import Head from 'next/head';

export default function CategoryDetails({ products }) {

    return (
        <>  
            <Head>
                <title>PC Build - {products.length > 0 ? products[0].category : 'Loading'}</title>
            </Head>
            <div className='py-8'>
                <h2 className='text-3xl font-bold text-center mb-8'>Category - {products[0].category}</h2>
                <div className='flex flex-wrap justify-center gap-10'>
                    {products.map(product => <ProductCard key={product._id} product={product} />)}
                </div>
            </div>
        </>
    )
}

CategoryDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch('https://pc-builder-server-opal.vercel.app/products')
    const products = await res.json()

    const paths = products.data.map((product) => ({
        params: { category: product.category },
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://pc-builder-server-opal.vercel.app/productsByCategory/${params?.category}`)
    const data = await res.json()

    return { props: { products: data.data } }
}