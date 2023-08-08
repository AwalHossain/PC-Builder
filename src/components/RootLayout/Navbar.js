import Link from "next/link";
import DropdownMenu from "./SharedMenu";

const categories = [
    { name: "CPU", value: "CPU" },
    { name: "Motherboard", value: "Motherboard" },
    { name: "RAM", value: "RAM" },
    { name: "Power Supply", value: "Power-Supply-Unit" },
    { name: "Storage", value: "Storage-Device" },
    { name: "Monitor", value: "Monitor" },
    { name: "Ohters", value: "Others" },
]

const Navbar = () => {
  return (
    <div className="navbar bg-gray-800 z-10 static">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52">
            <li><a className="text-white hover:text-gray-400">Item 1</a></li>
            <li>
              <a className="text-white hover:text-gray-400">Categories</a>
              <DropdownMenu categories={categories} />
            </li>
            <li><a className="text-white hover:text-gray-400">Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-white">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="text-white hover:text-gray-400">Item 1</a></li>
          <li tabIndex={0} >
            <details>
              <summary className="text-white hover:text-gray-400">Categories</summary>
              <div className="absolute z-10 bg-white">
                <DropdownMenu categories={categories} />
              </div>
            </details>
          </li>
          <li><a className="text-white hover:text-gray-400">Item 3</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn btn-secondary">PC BUILD</a> */}
        <Link href="/pc-build" className='btn btn-primary'>PC Build</Link>
      </div>
    </div>
  );
  
  
  };
  
  export default Navbar;
  
  
  
  
  

