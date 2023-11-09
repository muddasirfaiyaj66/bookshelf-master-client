import {  NavLink } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import logo from '../../assets/logo/LogoLight.png'
import dark from '../../assets/logo/logoDark.png'

const Navbar = () => {

  return (
    <div className=" w-full max-w-[1250px] px-[25px] mx-auto">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
     <div className='-mt-5 flex-1 '>
        <img src={logo}  className='w-[250px] ' alt="" />
     </div>
      <div className="flex-none hidden lg:block">
        <div className="flex items-center gap-2">
          {/* Navbar menu content here */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'btn bg-[#F47025] text-white hover:text-black btn-md' : 'btn btn-ghost btn-md'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/add-book"
            className={({ isActive }) =>
              isActive ? 'btn bg-[#F47025] text-white hover:text-black btn-md' : 'btn btn-ghost btn-md'
            }
          >
            Add Book
          </NavLink>
          <NavLink
            to="/all-book"
            className={({ isActive }) =>
              isActive ? 'btn bg-[#F47025] text-white hover:text-black btn-md' : 'btn btn-ghost btn-md'
            }
          >
            All Book
          </NavLink>
          <NavLink
            to="/borrowed-books"
            className={({ isActive }) =>
              isActive ? 'btn bg-[#F47025] text-white hover:text-black btn-md' : 'btn btn-ghost btn-md'
            }
          >
            Borrowed Books
          </NavLink>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
