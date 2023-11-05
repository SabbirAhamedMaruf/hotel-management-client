import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { BiSolidMoon } from "react-icons/bi";
import { FaSun } from "react-icons/fa";
import { useTheme } from "../../Hooks/useTheme";
import logo from "../../assets/Images/logo.png";
import logoWhite from "../../assets/Images/logo-white.png";
import "../../index.css"

const Navbar = () => {

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
              className="navMenu menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/rooms">Rooms</NavLink>
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

          <ul className="navMenu hidden lg:inline font-semibold space-x-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/rooms">Rooms</NavLink>
            <NavLink to="/aboutus">About Us</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
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
