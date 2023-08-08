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
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>categories</a>
                <DropdownMenu categories={categories} />
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
               <DropdownMenu categories={categories} />
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-secondary">Button</a>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  
  
  
  
  

// {
//     <div className="navbar bg-base-200">
//     <div className="flex-1">
//         <Link href="/" className="btn btn-ghost font-mono normal-case text-xl">PC Builder</Link>
//     </div>
//     <div className="flex-none">
//         <ul className="menu menu-horizontal px-1">
//             <li>
//                 <details>
//                     <summary>
//                         Category
//                     </summary>
//                     <ul className="p-2 bg-base-200 z-50">



//                     </ul>
//                 </details>
//             </li>
//         </ul>
//         <Link href="/pc-build" className='btn btn-primary'>PC Build</Link>
//     </div>
// </div>
// }