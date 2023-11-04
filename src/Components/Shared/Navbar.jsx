import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { BiSolidMoon } from "react-icons/bi";
import { FaSun } from "react-icons/fa";
import { useTheme } from "../../Hooks/useTheme";
import logo from "../../assets/Images/logo.png";
import logoWhite from "../../assets/Images/logo-white.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, handleUserSignOut } = useContext(AuthContext);
  const { theme, changeTheme } = useTheme();
  return (
    <div>
      <div className="grid grid-cols-3 items-center px-6">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiOutlineMenuAlt1 className="text-xl md:text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </ul>
          </div>

          <Link to="/" className="hidden lg:block">
            {theme === "light" ? (
              <img src={logo} className="w-24" />
            ) : (
              <img src={logoWhite} className="w-24" />
            )}
            <h1 className="font-semibold ml-3">Ilk Lodge</h1>
          </Link>
        </div>

        <div className="justify-self-center">
          <Link to="/" className="lg:hidden">
            {theme === "light" ? (
              <img src={logo} className="w-14" />
            ) : (
              <img src={logoWhite} className="w-14" />
            )}
            <h1 className="font-semibold">Ilk Lodge</h1>
          </Link>

          <ul className="hidden lg:inline font-semibold space-x-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </ul>
        </div>

        <div className="justify-self-end flex items-center space-x-5">
          <button onClick={changeTheme}>
            {theme === "light" ? (
              <BiSolidMoon className="inline text-xl" />
            ) : (
              <FaSun className="inline text-xl" />
            )}
          </button>

          <div className="relative">
            {user ? (
              <>
                <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold px-2 py-1 md:px-3 lg:px-4 lg:py-2 rounded-md">
                  Logout
                </button>

                <button onClick={()=>handleUserSignOut()} className="bg-gradient-to-l from-cyan-400 to-blue-600 text-white font-bold px-2 py-1 md:px-3 lg:px-4 lg:py-2 rounded-md absolute inset-0 opacity-0 transition duration-700 hover:opacity-100">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold px-2 py-1 md:px-3 lg:px-4 lg:py-2 rounded-md">
                  Login
                </button>
                <Link to="/login">
                  <button className="bg-gradient-to-l from-cyan-400 to-blue-600 text-white font-bold px-2 py-1 md:px-3 lg:px-4 lg:py-2 rounded-md absolute inset-0 opacity-0 transition duration-700 hover:opacity-100">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*
 
 <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> 

 */
