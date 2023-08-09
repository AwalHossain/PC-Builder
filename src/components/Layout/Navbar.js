import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
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

  const router = useRouter()
  const {data: session, status} = useSession()
  const handleSignOut = async () => {
    await signOut()
  }
  return (
    <div className="navbar bg-gray-800 z-10 static">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 rounded-box w-52">
            <li>
              <a className="text-white ">Categories</a>
              <DropdownMenu categories={categories} />
            </li>
           
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl text-white">
        PCMasterCraft
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          <li tabIndex={0} >
            <details>
              <summary className="text-white">Categories</summary>
              <div className="absolute z-10 bg-gray-400">
                <DropdownMenu categories={categories} />
              </div>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {/* <a className="btn btn-secondary">PC BUILD</a> */}

{status === 'authenticated' ? (
  <Link className="  text-white " href="/pc-build">
    PC Build
  </Link>
) : (
  <button disabled style={{ }}>
    <Link className="  text-white " href="/login">
      PC Build
    </Link>
  </button>
)}

        {
          status === 'authenticated' ?
          <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> :
           <Link href="/login" className='btn btn-primary'>Sign In</Link>

        }
      </div>
    </div>
  );
  
  
  };
  
  export default Navbar;
  
  
  
  
  

