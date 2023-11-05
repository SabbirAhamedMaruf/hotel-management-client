import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import UserNavbar from "./UserNavbar";
import { Map, Marker } from "pigeon-maps";
import { TbPhoneCheck } from "react-icons/tb";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import AboutUsSectionGirl from "../../assets/Images/girl.jpg";
const Home = () => {
  return (
    <div>
      <UserNavbar />
      <div className="w-[95%] lg:w-[70%] m-auto">
        <Navbar />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <Map
            height={300}
            defaultCenter={[21.417077, 91.981278]}
            defaultZoom={11}
          >
            <Marker width={50} anchor={[21.417077, 91.981278]} />
          </Map>
        </div>
        <div className="grid justify-left p-10 bg-slate-900 text-white">
          <TbPhoneCheck className="lg:text-5xl" />
          <h1 className="lg:text-3xl">Contact Us</h1>
          <div className="ml-5 lg:space-y-2">
            <p>Reservation :</p>
            <p>+555-123-4567</p>
            <p>Booking :</p>
            <p>+555-987-6543</p>
          </div>
        </div>
        <div className="relative">
          <img
            src={AboutUsSectionGirl}
            className="w-full h-[28vh] lg:h-full object-cover"
          />
          <div className="absolute w-full h-full bg-cyan-400 top-0 opacity-50"></div>
          <div className="absolute p-10  text-white top-0">
            <FaRegEnvelopeOpen className="lg:text-5xl" />
            <h1 className="lg:text-3xl mt-3">Drop a line</h1>
            <div className="ml-5 lg:space-y-2">
              <p>Information</p>
              <p>info@hotel.com</p>
              <p>Reception</p>
              <p>book@hotel.com</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

// TODO navbar Footer Errorpage ok
