import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import logoWhite from "../../assets/Images/logo-white.png";
import "../../index.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { BiSolidMoon } from "react-icons/bi";
import { FaSun } from "react-icons/fa";
import { useTheme } from "../../Hooks/useTheme";

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
            <div
              tabIndex={0}
              className="navMenu menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-60 md:w-72 z-10 bg-white dark:bg-[#212538]"
            >
              {user && (
                <div className="flex justify-center items-center gap-5 bg-gradient-to-r from-cyan-400 to-blue-600 p-1 rounded-xl">
                  <h3 className="text-white text-normal md:text-[16px]">
                    {user.displayName}
                  </h3>
                  <img
                    src={user.photoURL}
                    className="rounded-full w-16 md:w-20"
                  />
                </div>
              )}
              <div className="flex flex-col text-normal text-[16px] text-center my-2  space-y-2">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/rooms">Rooms</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
                {!user && <NavLink to="/login">Login</NavLink>}
              </div>
              {user && (
                <div className="text-center flex flex-col text-[16px] space-y-2">
                  <NavLink to="/mybookings">My Bookings</NavLink>
                  <NavLink to="/addroom">Add Room</NavLink>
                  <button
                    onClick={() => handleUserSignOut()}
                    className="block bg-cyan-700 p-2 rounded-xl"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
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
            {user && (
              <div className="dropdown z-40">
                <button>Dashboard</button>
                <div
                  tabIndex={0}
                  className="navMenu  dropdown-content mt-8 px-3  py-4 shadow rounded-b-xl w-60 md:w-72 z-10 bg-blue-50 dark:bg-slate-900"
                >
                  {user && (
                    <div className="flex justify-center items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-600 p-1 rounded-xl">
                      <h3 className="text-white text-normal md:text-[16px]">
                        {user.displayName}
                      </h3>
                      <img
                        src={user.photoURL}
                        className="rounded-full w-16 md:w-20"
                      />
                    </div>
                  )}
                  <div className="flex flex-col text-normal text-[16px] text-center my-5 space-y-2">
                    <NavLink to="/mybookings">My Bookings</NavLink>
                    <NavLink to="/addroom">Add Room</NavLink>
                  </div>
                </div>
              </div>
            )}
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
            <div className="hidden lg:block">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold px-2 py-1 md:px-3 lg:px-4 lg:py-2 rounded-md">
                Book Now
              </button>
              <Link to="/rooms">
                <button
                  onClick={() => handleUserSignOut()}
                  className="bg-gradient-to-l from-cyan-400 to-blue-600 text-white font-bold px-2 py-1 md:px-3 lg:px-4 lg:py-2 rounded-md absolute inset-0 opacity-0 transition duration-700 hover:opacity-100"
                >
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
