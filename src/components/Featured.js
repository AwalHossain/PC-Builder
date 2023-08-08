import ProductCard from "./ProductCard";

const  Featured = ({ products }) =>{
    console.log(products,"checking");
    return (
        <div className='section_main'>
            <h1 className='section_title'>Featured Product</h1>
            <div className='flex flex-wrap justify-center gap-10'>
                {products?.data.map(product => <ProductCard key={product._id} product={product} />)}
            </div>
        </div>
    )
}


export default Featured;

