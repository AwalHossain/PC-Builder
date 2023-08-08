import Link from 'next/link';

const CategoryCard = ({ category }) => {

  return (
    <Link href={`/categories/${category.value}`}>
    <div className="card w-32 bg-gray-800 shadow-lg rounded-xl cursor-pointer hover:scale-105 hover:bg-purple-600 transform transition-transform">
      <div className="card-body p-3">
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='text-3xl text-purple-400 mb-2'>{category.icon}</div>
          <h2 className="text-sm font-semibold text-white">{category.name}</h2>
        </div>
      </div>
    </div>
  </Link>
  
  );
};

export default CategoryCard;
