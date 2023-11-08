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
  );
};

export default Sidebar;
