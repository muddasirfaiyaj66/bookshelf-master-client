import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import useAuth from "../../hooks/useAuth";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { CiDark,CiLight } from "react-icons/ci";


const MainLayout = ({ children }) => {
  const [mode,setMode] = useState("light");
  const { user, logOut } = useAuth();



  function changeTheme() {
    const html = document.documentElement;
    console.log(html);
    

    if(mode === "light"){
        html.classList.remove('light');
        html.classList.add('dark');
        setMode("dark");
    localStorage.setItem("mode", "dark")
    } if(mode === "dark"){
        html.classList.remove('dark')
        html.classList.add('light');
        setMode("light");
        localStorage.setItem("mode","light")
    }
    
  }

 
  useEffect(()=>{

    const currentMode = localStorage.getItem("mode") || "light"
    document.documentElement.classList.add(currentMode)
    setMode(currentMode)

      
    
  }, [])

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-200">
          <Navbar />
          <div className="mr-3">
            <button className="btn btn-md" onClick={changeTheme}>
            <span className="text-xl">{mode === "light" ? <CiDark></CiDark> : mode==="dark"? <CiLight></CiLight> : ''}</span>
            </button>
          </div>
          <div className="mr-5">
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL ? user.photoURL : "nouser.png"}
                      alt={user.displayName}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-sm  btn-ghost bg-red-500 text-white font-bold"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm  btn-ghost hover:bg-[#F47025] px-8 bg-black text-white font-bold">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
        {/* Page content here */}
        {children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
