import Navbar from "../Shared/Navbar";
import roombanner from "../../assets/Images/rooms/bg.jpg";
import useAxiosSeure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import SingleRoom from "./SingleRoom";



const Rooms = () => {
  const [roomsData, setRoomData ] = useState([]);
  const [sortByHighToLow, setSortByHighToLow] = useState(true);
  const axiosSecure = useAxiosSeure();


  // Filter
  const handleFilter =(e)=>{
    if(e.target.value === "high"){
      setSortByHighToLow(true);
    }else{
      setSortByHighToLow(false)
    }
  }



  useEffect(()=>{
    axiosSecure.get(`/rooms?sortByHighToLow=${sortByHighToLow}`)
    .then(res => {
      setRoomData(res.data)
    })
  },[axiosSecure,sortByHighToLow])







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
            <div className="flex flex-col p-20 space-y-5 h-[10vw] lg:w-[20vw] lg:h-[66.2vh] lg:bg-[#212538] text-white rounded-xl">








              <label htmlFor="range" className="text-3xl">Filter by price</label>
              <select onChange={handleFilter} name="range" className="px-4 py-2 lg:py-2  bg-blue-100 rounded-md outline-none text-black font-semibold">
                <option value="high">High to low</option>
                <option value="low">Low to high</option>
              </select>
  








            </div>

            <div className="lg:w-[70vw] grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              roomsData?.map(i=><SingleRoom key={i._id} data={i}></SingleRoom>)
            }

            </div>















          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
