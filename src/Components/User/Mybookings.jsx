import Navbar from "../Shared/Navbar";
import roombanner from "../../assets/Images/rooms/bg.jpg";
import useAxiosSeure from "../../Hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SingleUserBookingTableRow from "./SingleUserBookingTableRow";
import { Helmet } from "react-helmet";

const Mybookings = () => {
  const [fetch,setfetch] = useState(false);
  const [userBookedRooms , setUserBookedRooms] = useState([]);
  const {user} = useContext(AuthContext);
  const userEmail = user.email;
  const axiosSecure = useAxiosSeure();


  useEffect(()=>{
    axiosSecure.post("/mybookings",{userEmail})
    .then(res=>setUserBookedRooms(res.data))
  },[axiosSecure,userEmail,fetch])

 
  console.log("user booked rooms collection",userBookedRooms);


  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Ilk Lodge (My Bookings)"}</title>
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
              Your Bookings
            </h1>
          </div>
          <div className="pb-60 bg-blue-50 dark:bg-slate-900">
            <div className="w-[90vw] m-auto">
              <div className="overflow-x-auto">
                <table className="table text-center lg:text-xl mt-20 mb-96 md:mb-80 lg:mb-36">
                  {/* head */}
                  <thead className="lg:text-xl">
                    <tr>
                      <th>Room</th>
                      <th>Price</th>
                      <th>Booked Date</th>
                      <th>Review</th>
                      <th>Update Order</th>
                      <th>Delete Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                      userBookedRooms?.map(i=><SingleUserBookingTableRow fetch={fetch} setfetch={setfetch} key={i._id} data={i}></SingleUserBookingTableRow>)
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mybookings;

// TODO add a hight within a if else condition like if booking is 1 then h-[100vh] otherwise h-auto
