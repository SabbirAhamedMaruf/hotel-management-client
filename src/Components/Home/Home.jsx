import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import UserNavbar from "./UserNavbar";
import { Map, Marker } from "pigeon-maps";
import { HiOutlinePhoneIncoming } from "react-icons/hi";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import AboutUsSectionGirl from "../../assets/Images/girl.jpg";
import hotelreview from "../../assets/Images/hotelreview.jpg";
import Banner from "./Banner";
import Testimonials from "./Testimonials";
import TermsAndPrivacyPolicy from "../Shared/TermsAndPrivacyPolicy";
import FeaturedProduct from "./FeaturedProduct";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Ilk Lodge (Home)"}</title>
      </Helmet>
      <UserNavbar />
      <div className="w-[95%] lg:w-[70%] m-auto">
        <Navbar />
      </div>
      <div className="w-[95%] lg:w-[90%] m-auto">
        <Banner />
      </div>
      <div className="w-[95%] lg:w-[90%] m-auto">
        <h1 className="font-Edu font-bold text-3xl md:text-4xl lg:text-7xl  text-center my-[10%] md:my-[5%] lg:my-[4%]">
          Our Featured Suite
        </h1>
        <p className="w-[90%] md:w-[70%] lg:w-[50%] m-auto text-center my-[10%] md:my-[5%] lg:my-[2%]">
          Discover the epitome of opulence in our featured rooms at Ilk Lodge.
          Combining exquisite design, unparalleled comfort, and panoramic
          vistas, these rooms offer a sanctuary of luxury. Immerse yourself in a
          world of elegance and sophistication, ensuring an unforgettable stay
          at our hotel.
        </p>
        <FeaturedProduct />
      </div>
      {/* Hotel Testimonials */}
      <div
        style={{
          backgroundImage: `url(${hotelreview})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="my-20 h-[60vh] lg:h-[85vh]"
      >
        <div className="absolute w-full h-[60vh] lg:h-[85vh]  bg-black opacity-60 z-0"></div>
        <div className="flex flex-col space-y-10 lg:h-full">
          <h1 className="font-Edu font-bold text-3xl md:text-4xl lg:text-7xl text-white text-center z-30 mt-[15%] md:mt-[10%] lg:mt-[7%]">
            Love from our customer
          </h1>
          <Testimonials />
        </div>
      </div>

      {/* Home page about us section */}

      <div className="grid grid-cols-2 lg:grid-cols-4 my-20">
        <div className="col-span-2">
          <Map
            height={300}
            defaultCenter={[21.417077, 91.981278]}
            defaultZoom={11}
          >
            <Marker width={50} anchor={[21.417077, 91.981278]} />
          </Map>
        </div>
        <div className="grid justify-left p-10 bg-slate-900 dark:bg-[#212538] text-white">
          <HiOutlinePhoneIncoming className="text-xl md:text-3xl lg:text-5xl" />
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
            <FaRegEnvelopeOpen className="text-xl md:text-3xl lg:text-5xl" />
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
      <div id="terms" className="my-20">
        <TermsAndPrivacyPolicy />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
