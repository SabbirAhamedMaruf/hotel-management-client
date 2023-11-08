import { MdPayment } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

const UserNavbar = () => {
  const { user, handleUserSignOut } = useContext(AuthContext);
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ once: true });
    }, 1000);
  }, []);
  return (
    <div data-aos="fade-down" className="hidden lg:block bg-slate-900 text-white py-2">
      <div className="w-[70%] m-auto grid grid-cols-3 items-center px-6  font-semibold">
        <div className="flex items-center gap-4">
          <h3 className="hover:text-cyan-400">Follow Us On</h3>
          <Link>
            <GrFacebook className="hover:text-blue-400" />
          </Link>
          <Link>
            <BsTwitter className="hover:text-sky-400" />
          </Link>
          <Link>
            <BsInstagram className="hover:text-rose-400" />
          </Link>
          <Link>
            <BsYoutube className="hover:text-red-500" />
          </Link>
        </div>

        <div className="justify-self-center flex items-center gap-10">
          <Link className="flex items-center hover:text-cyan-400">
            <MdPayment className="inline text-xl mr-2" />
            <span>Payment Options</span>
          </Link>
          <button className="flex items-center hover:text-cyan-400">
            <CgNotes className="inline text-xl mr-2" />
            <span>Terms and Conditions</span>
          </button>
        </div>

        <div className="justify-self-end flex items-center space-x-5">
          <div className="relative">
            {user ? (
              <>
                <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold px-2 py-1 md:px-3 lg:px-7 lg:py-2 rounded-md">
                  Logout
                </button>
                <button
                  onClick={() => handleUserSignOut()}
                  className="bg-gradient-to-l from-cyan-400 to-blue-600 text-white font-bold px-2 py-1 md:px-3 lg:px-4 lg:py-2 rounded-md absolute inset-0 opacity-0 transition duration-700 hover:opacity-100"
                >
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

export default UserNavbar;


// TODO create clicking option of terms and condition. By click terms and condition text on navbar to go terms and condition section