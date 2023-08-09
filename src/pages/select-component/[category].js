import RootLayout from '<test>/components/Layout/RootLayout';
import PreviousBtn from '<test>/components/PreviousBtn';
import SelectProduct from '<test>/components/SelectProduct';
import Head from 'next/head';

export default function CategoryComponent({ products }) {

    return (
        <>
            <Head>
                <title>Select Component - {products[0].category}</title>
            </Head>
            <div className='py-5 px-2 mb-6'>
                <h2 className='text-center text-3xl font-semibold mt-6'>Category - {products[0].category}</h2>
                <div className='flex flex-wrap gap-5 justify-center mt-8'>
                    {products.map(product => <SelectProduct key={product._id} product={product} />)}
                </div>
                <PreviousBtn />
            </div>
        </>
    )
}

CategoryComponent.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps(context) {
    const { params } = context
    const res = await fetch(`https://pc-craftmaster-server.vercel.app/productsByCategory/${params?.category}`)
    const data = await res.json()

    return { props: { products: data.data } }
}














/* export const getStaticPaths = async () => {
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
} */