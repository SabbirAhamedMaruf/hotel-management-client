import Navbar from "../Shared/Navbar";
import roombed from "../../assets/Images/rooms/rooms.jpg";
import { Link } from "react-router-dom";
import { PiEyeBold } from "react-icons/pi";
import roombanner from "../../assets/Images/rooms/bg.jpg";
const Rooms = () => {
  return (
    <div>
      <div className="w-[90vw] m-auto">
        <Navbar />
      </div>
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
            Search
          </h1>
        </div>

        <div className="bg-blue-50 dark:bg-slate-900 py-10 lg:py-20">
          <div className="w-[90vw] m-auto flex flex-col lg:flex-row justify-center gap-5">
            <div className="h-[10vw] lg:w-[20vw] lg:h-[66.2vh] lg:bg-[#212538] rounded-xl">
              {/* TODO slider goes here */}
              <div></div>
            </div>

            <div className="lg:w-[70vw] grid  md:grid-cols-2 lg:grid-cols-3 gap-5">



              <div className="relative justify-self-center">
                <img
                  src={roombed}
                  className="md:w-[50vw] md:h-[30vh] lg:w-[22vw]  lg:h-[32vh] object-cover rounded-xl"
                />
                <p className="absolute bottom-5 left-5 lg:text-xl font-semibold text-white">
                  Price : 67$
                </p>
                <Link>
                  <button className="md:w-[43.8vw] md:h-[30vh] lg:w-[22vw]  lg:h-[32vh] object-cover bg-black dark:bg-cyan-900 absolute inset-0 rounded-xl opacity-0 transition duration-700 ease-out hover:opacity-40 hover:dark:opacity-70 z-10">
                    <PiEyeBold className="text-2xl md:text-3xl lg:text-5xl text-white dark:text-cyan-400 inline" />
                  </button>
                </Link>
              </div>











            </div>















          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
