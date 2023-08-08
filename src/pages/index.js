import RootLayout from '<test>/components/RootLayout/RootLayout';
import Head from 'next/head';


export default function Home({ products }) {

  return (
    <div className='min-h-screen'>
      <Head>
        <title>Pc Builder - Home</title>
      </Head>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};