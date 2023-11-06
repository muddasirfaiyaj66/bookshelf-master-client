import {  NavLink } from 'react-router-dom';


const Sidebar = () => {

  return (
    <div className="flex flex-col gap-2">
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
            to="/about"
            className={({ isActive }) =>
              isActive ? 'btn bg-[#F47025] text-white hover:text-black btn-md' : 'btn btn-ghost btn-md'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'btn bg-[#F47025] text-white hover:text-black btn-md' : 'btn btn-ghost btn-md'
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'btn bg-[#F47025] text-white hover:text-black btn-md' : 'btn btn-ghost btn-md'
            }
          >
            Services
          </NavLink>
      
                   
    </div>
  );
};

export default Sidebar;
