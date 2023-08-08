import Link from 'next/link';

const DropdownMenu = ({ categories }) => {

  return (
    <ul className="p-2">
             {               categories.map(category => <li key={category.name}>
                                <Link href={`/categories/${category.value}`}>{category.name}</Link>
                            </li>)}
                        </ul>
  );
};

export default DropdownMenu;
