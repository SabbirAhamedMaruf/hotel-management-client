import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import bed1 from "../../assets/Images/banner/bed1.jpg";
import bed2 from "../../assets/Images/banner/bed2.jpg";
import bed3 from "../../assets/Images/banner/bed3.jpg";
import bed4 from "../../assets/Images/banner/bed4.jpg";
import bed5 from "../../assets/Images/banner/bed5.jpg";
import "aos/dist/aos.css";

const Banner = () => {
  const plugins = [
    new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: true }),
  ];
  return (
    <div className="font-Edu text-center text-white">
      <Flicking
        plugins={plugins}
        align="prev"
        circular={true}
        onMoveEnd={() => {}}
      >
        <div className="panel relative">
          <div className="absolute w-full h-screen bg-black opacity-40"></div>
          <div className="absolute top-[30%] md:top-[40%] md:left-[10%] lg:top-[30%] lg:left-[29%] md:w-[80%] lg:w-[40%] space-y-5">
            <h1 className="text-2xl md:text-4xl lg:text-7xl">
              Warmest Greetings from Ilk Lodge
            </h1>
            <p className="w-[80%] m-auto lg:w-full lg:text-2xl">
              {
                "we're delighted to have you as our guest. Prepare to be immersed in unmatched comfort and personalized service"
              }
            </p>
          </div>
          <img src={bed1} className="w-screen lg:h-screen object-cover" />
        </div>

        <div className="panel relative">
          <div className="absolute w-full h-full bg-black opacity-40"></div>
          <div className="absolute top-[30%] md:top-[40%] md:left-[10%] lg:top-[30%] lg:left-[29%] md:w-[80%] lg:w-[40%] space-y-5">
            <h1 className="text-2xl md:text-4xl lg:text-7xl">
              Step Inside, Step into Serenity! At Ilk Lodge
            </h1>
            <p className="w-[80%] m-auto lg:w-full lg:text-2xl">
              {
                "we believe in more than just check-ins; we believe in creating moments of pure bliss."
              }
            </p>
          </div>
          <img src={bed2} className="w-screen lg:h-screen object-cover" />
        </div>

        <div className="panel relative">
          <div className="absolute w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-[30%] md:top-[40%] md:left-[10%] lg:top-[30%] lg:left-[29%] md:w-[80%] lg:w-[40%] space-y-5">
            <h1 className="text-2xl md:text-4xl lg:text-7xl">
              Your Escape Awaits! Welcome to Ilk Lodge
            </h1>
            <p className="w-[80%] m-auto lg:w-full lg:text-2xl">
              {
                "where every guest is a cherished traveler. We invite you to experience the perfect blend of luxury, tranquility, and heartfelt hospitality"
              }
            </p>
          </div>
          <img src={bed3} className="w-screen lg:h-screen object-cover" />
        </div>

        <div className="panel relative">
          <div className="absolute w-full h-full bg-black opacity-40"></div>
          <div className="absolute top-[30%] md:top-[40%] md:left-[10%] lg:top-[30%] lg:left-[29%] md:w-[80%] lg:w-[40%] space-y-5">
            <h1 className="text-2xl md:text-4xl lg:text-7xl">
              Indulge in the Extraordinary! As you step through the doors of Ilk
              Lodge!
            </h1>
            <p className="w-[80%] m-auto lg:w-full lg:text-2xl">
              {
                "We take pride in exceeding your expectations, ensuring every moment is special."
              }
            </p>
          </div>
          <img
            src={bed4}
            className="w-screen h-[35vh] md:h-[64vh] lg:h-screen object-cover"
          />
        </div>

        <div className="panel relative">
          <div className="absolute w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-[30%] md:top-[40%] md:left-[10%] lg:top-[30%] lg:left-[29%] md:w-[80%] lg:w-[40%] space-y-5">
            <h1 className="text-2xl md:text-4xl lg:text-7xl">
              Welcome to Our Haven of Hospitality! At Ilk Lodge!
            </h1>
            <p className="w-[80%] m-auto lg:w-full lg:text-2xl">
              {
                "Step into a world where comfort meets luxury, and where every guest is cherished. Your memorable journey starts here!"
              }
            </p>
          </div>
          <img src={bed5} className="w-screen lg:h-screen object-cover" />
        </div>
      </Flicking>
    </div>
  );
};

export default Banner;
