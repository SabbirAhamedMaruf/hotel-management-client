import Navbar from "../Shared/Navbar";
import roombed from "../../assets/Images/rooms/rooms.jpg";
import { Link } from "react-router-dom";
import {PiEyeBold} from "react-icons/pi";
const Rooms = () => {
  return (
    <div>
      <div className="w-[95%] h-[100vh] m-auto">
        <Navbar />
        <div className="grid justify-center items-center py-5">
          <div className="relative">
            <img src={roombed} className="w-[70vw] md:w-[40vw] lg:w-[25vw] rounded-xl" />
            <p className="absolute bottom-5 left-5 lg:text-xl font-semibold text-white">Price : 67$</p>
            <Link>
              <button className="w-full h-full bg-black dark:bg-cyan-900 absolute inset-0 rounded-xl opacity-0 transition duration-700 ease-out hover:opacity-40 hover:dark:opacity-70 z-10"><PiEyeBold className="text-2xl md:text-3xl lg:text-5xl text-white dark:text-cyan-400 inline"/></button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
