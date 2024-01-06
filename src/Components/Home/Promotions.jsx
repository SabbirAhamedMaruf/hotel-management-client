import { useEffect, useState } from "react";
import managerPhoto from "../../assets/Images/Promotions/manager.jpg";
import promotionBanner from "../../assets/Images/Promotions/promotionBanner.jpg";
import useAxiosSeure from "../../Hooks/useAxiosSecure";

const Promotions = () => {
  const [promotionRooms, setPromotionRooms] = useState([]);
  const axiosSecure = useAxiosSeure();

  useEffect(() => {
    axiosSecure.get("/promotions").then((res) => setPromotionRooms(res.data));
  }, [axiosSecure]);

  console.log(promotionRooms)

  return (
    <div className="w-[85vw] mx-auto my-20 flex flex-col lg:flex-row justify-center items-center gap-10">
      <div className="lg:w-1/3 flex  flex-col space-y-5 lg:space-y-10">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl font-Edu text-center lg:text-left">
          Check the Promotions
        </h1>
        <p className="lg:w-2/3 text-justify lg:text-left">
          Experience unparalleled luxury and comfort with our exclusive hotel
          booking offers. Indulge in opulent stays, unlock special perks, and
          create lasting memories. Reserve your dream getaway today and elevate
          your travel experience with us.
        </p>
        <div className="flex items-center gap-5">
          <img src={managerPhoto} className="w-10 lg:w-24 rounded-full" />
          <h1 className="text-[18px] lg:text-2xl font-semibold">Ryan Miller</h1>
        </div>
      </div>
      <div className="relative hidden lg:block w-1/3 mr-0 lg:mr-20">
        <img src={promotionBanner} className="w-96 rounded-xl" />
        <div className="absolute w-[20vw] h-full bg-black inset-0 opacity-30 rounded-lg"></div>
      </div>


      
      <div className="lg:absolute w-full lg:w-[450px] right-72 space-y-10">
        {promotionRooms.map((i) => (
          <div
            className="flex justify-around items-center gap-10 rounded-lg h-32 lg:shadow-md lg:p-2 z-30"
            key={i._id}
          >
            <img src={i.photo} className="w-32 h-28 object-cover rounded-md" />
            <div>
              <h1>One Weeks</h1>
              <h1>{i.type}</h1>
            </div>
            <h1 className="px-4 py-1 bg-[#ffab50] text-white rounded-md">
              {i.price}$
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
