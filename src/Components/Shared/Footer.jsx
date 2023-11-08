import logoWhite from "../../assets/Images/logo-white.png";
import { Link } from "react-router-dom";
import { GrFacebook } from "react-icons/gr";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Footer = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ once: true });
    }, 1000);
  }, []);
  return (
    <div>
      <footer data-aos="fade-up" className="flex flex-col md:flex-row justify-around space-y-5 md:space-y-0 text-center  px-2 lg:px-10 py-32 bg-black dark:bg-[#212538] text-white">
        <aside>
          <Link>
            <img src={logoWhite} className="m-auto w-24 lg:w-44" />
            <h1 className="font-semibold text-xl lg:text-3xl ml-3">
              Ilk Lodge
            </h1>
          </Link>
          <div className="flex items-center gap-4 ml-28 md:ml-0 mt-5">
            <Link>
              <GrFacebook className="text-4xl p-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-white" />
            </Link>
            <Link>
              <BsTwitter className="text-4xl p-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-white" />
            </Link>
            <Link>
              <PiInstagramLogoFill className="text-4xl p-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-white" />
            </Link>
            <Link>
              <BsYoutube className="text-4xl p-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full text-white" />
            </Link>
          </div>
        </aside>
        <nav>
          <header className="uppercase font-semibold text-[1rem] text-cyan-300">
            Services
          </header>
          <div className="flex flex-row md:flex-col gap-5 justify-center mt-2 md:mt-5">
            <a className="lg:text-[15px] hover:text-cyan-300">Branding</a>
            <a className="lg:text-[15px] hover:text-cyan-300">Hotels</a>
            <a className="lg:text-[15px] hover:text-cyan-300">Marketing</a>
            <a className="lg:text-[15px] hover:text-cyan-300">Advertisement</a>
          </div>
        </nav>
        <nav className="flex flex-col space-y-5">
          <header className="uppercase font-semibold text-[1rem] text-cyan-300">
            Company
          </header>
          <div className="flex flex-row md:flex-col gap-5 justify-center mt-2 md:mt-5">
            <a className="lg:text-[15px] hover:text-cyan-300">About us</a>
            <a className="lg:text-[15px] hover:text-cyan-300">Contact</a>
            <a className="lg:text-[15px] hover:text-cyan-300">Jobs</a>
          </div>
        </nav>
        <nav className="flex flex-col space-y-5">
          <header className="uppercase font-semibold text-[1rem] text-cyan-300">
            Legal
          </header>
          <div className="flex flex-row md:flex-col gap-5 justify-center mt-2 md:mt-5">
            <a className="text-[15px] hover:text-cyan-300">Terms of use</a>
            <a className="text-[15px] hover:text-cyan-300">Privacy policy</a>
            <a className="text-[15px] hover:text-cyan-300">Cookie policy</a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
