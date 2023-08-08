
import Banner from '<test>/components/Banner';
import Featured from '<test>/components/Featured';
import RootLayout from '<test>/components/RootLayout/RootLayout';
import Head from 'next/head';



export default function Home({ products }) {
  console.log(products,'chiemomi');
  return (
    <div className='min-h-screen'>
      <Head>
        <title>Pc Builder - Home</title>
      </Head>
      <Banner />
      <Featured products={products} />
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
      const res = await fetch('https://pc-builder-server-opal.vercel.app/products');
      const products = await res.json();
      
      // Log fetched products
      console.log('Fetched products:', products);
      
      return { props: { products } };
  } catch (error) {
      console.error('Error fetching products:', error);
      return { props: { products: [] } };
  }
};
