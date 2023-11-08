import Navbar from "../Shared/Navbar";
import roombanner from "../../assets/Images/rooms/bg.jpg";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import logoWhite from "../../assets/Images/logo-white.png";
import { useTheme } from "../../Hooks/useTheme";
import { GrFacebook } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { Helmet } from "react-helmet";


const Aboutus = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Ilk Lodge (About us)"}</title>
      </Helmet>
      <div className="w-[90vw] m-auto">
        <Navbar />
      </div>
      <div className="bg-blue-50 dark:bg-slate-900">
        <div
          style={{
            backgroundImage: `url(${roombanner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="relative h-[30vh] md:h-[40vh]"
        >
          <div className="absolute w-full h-full inset-0 bg-black opacity-30 z-0"></div>
          <div className="flex justify-center items-center h-full">
            <h1 className="font-Edu font-bold text-3xl md:text-4xl lg:text-7xl text-white text-center z-30">
              About Us
            </h1>
          </div>
          <div className="bg-blue-50 dark:bg-slate-900 py-10 ">
            <div className="w-[90vw] m-auto">
              <div className="flex flex-col items-center">
                <Link to="/">
                  {theme === "light" ? (
                    <img src={logo} className="w-60" />
                  ) : (
                    <img src={logoWhite} className="w-60" />
                  )}
                  <h1 className="font-semibold ml-10 text-4xl">Ilk Lodge</h1>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
                  <div className="p-10 lg:w-[24vw] flex gap-10 items-center  bg-white dark:bg-[#212538] shadow-xl rounded-xl">
                    <img
                      src="https://i.ibb.co/2jDVLSP/CEO.jpg"
                      className="w-40 h-40 object-cover rounded-lg"
                    />
                    <div className="space-y-7">
                      <h3 className="text-2xl font-bold">Founder</h3>
                      <h3 className="text-xl">John Smith</h3>
                      <div className="flex items-center gap-4 mt-5">
                        <Link>
                          <GrFacebook className="text-xl  " />
                        </Link>
                        <Link>
                          <BsTwitter className="text-xl  " />
                        </Link>
                        <Link>
                          <FiInstagram className="text-xl" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="p-10 lg:w-[24vw] flex gap-10 items-center  bg-white dark:bg-[#212538] shadow-xl rounded-xl">
                    <img
                      src="https://i.ibb.co/t2K1376/General-Manager.jpg"
                      className="w-40 h-40 object-cover rounded-lg"
                    />
                    <div className="space-y-7">
                      <h3 className="text-2xl font-bold">CEO</h3>
                      <h3 className="text-xl">Jane Doe</h3>
                      <div className="flex items-center gap-4 mt-5">
                        <Link>
                          <GrFacebook className="text-xl  " />
                        </Link>
                        <Link>
                          <BsTwitter className="text-xl  " />
                        </Link>
                        <Link>
                          <FiInstagram className="text-xl" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="p-10 lg:w-[24vw] flex gap-10 items-center  bg-white dark:bg-[#212538] shadow-xl rounded-xl">
                    <img
                      src="https://i.ibb.co/y5MqpnX/man-1.jpg"
                      className="w-40 h-40 object-cover rounded-lg"
                    />
                    <div className="space-y-7">
                      <h3 className="text-2xl font-bold">GM</h3>
                      <h3 className="text-xl">Michael Johnson</h3>
                      <div className="flex items-center gap-4 mt-5">
                        <Link>
                          <GrFacebook className="text-xl  " />
                        </Link>
                        <Link>
                          <BsTwitter className="text-xl  " />
                        </Link>
                        <Link>
                          <FiInstagram className="text-xl " />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-10 mt-10 w-[70vw] md:w-[80] lg:w-[40vw]">
                <h1 className="font-semibold text-4xl">Our Story</h1>   
                <p className="text-xl">Nestled amidst nature, Ilk Lodge offers a tranquil escape, blending luxury with the beauty of the surroundings. Our story is woven with a commitment to providing unparalleled hospitality and unforgettable experiences.</p>
                <h1 className="font-semibold text-4xl">History</h1>   
                <p className="text-xl">Established in the heart of scenic landscapes, Ilk Lodge has been a beacon of hospitality since [year of establishment]. With a rich heritage, we have welcomed travelers from around the world, creating cherished memories over the years.</p>
                <h1 className="font-semibold text-4xl">Our Mission</h1>   
                <p className="text-xl">At Ilk Lodge, our mission is to exceed guest expectations by delivering exceptional services, embracing sustainability, and creating a warm, welcoming environment. We strive to be the epitome of luxury and eco-consciousness.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

// TODO design about us page and import data from chatgpt. text already generated. check that
