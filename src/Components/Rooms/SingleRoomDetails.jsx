import Navbar from "../Shared/Navbar";
import roombanner from "../../assets/Images/rooms/bg.jpg";
import { BsBuildingCheck, BsCurrencyDollar, BsPeople } from "react-icons/bs";
import { LuBike } from "react-icons/Lu";
import { ImGlass } from "react-icons/im";
import { BiSwim } from "react-icons/bi";
import { SlSizeFullscreen } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import useAxiosSeure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import { NotificationContext } from "../../Hooks/Notification";
import SingleRoomReviews from "./SingleRoomReviews";
import { Helmet } from "react-helmet";

const SingleRoomDetails = () => {
  const [currentRoomDetail, setCurrentRoomDetail] = useState([]);
  const [fetch, setFetch] = useState(true);
  const [currentRoomReviews, setCurrentRoomReviews] = useState([]);

  const { handleSuccessToast, handleErrorToast } =
    useContext(NotificationContext);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSeure();
  const { id } = useParams();

  const { available, description, photo, price, size, offer } =
    currentRoomDetail || {};

  // Booking date
  const [bookingDate, handleBookingDate] = useState(null);

  const handleDateChange = (e) => {
    handleBookingDate(e.target.value);
  };

  // Handle Modal Interaction
  const handleModalOpen = () => {
    if (bookingDate === null) {
      handleErrorToast("Date field is emapty!");
    } else {
      document.getElementById("my_modal_5").showModal();
    }
  };

  // handleBooking
  const handleConfimBooking = () => {
    const date = bookingDate;
    const roomId = currentRoomDetail._id;
    const roomPrice = currentRoomDetail.price;
    const roomPhoto = currentRoomDetail.photo;

    const bookingData = { date, roomId, roomPrice, roomPhoto };

    console.log(bookingData);
    axiosSecure
      .patch(`/rooms/singleRoomDetails/bookRoom?user=${user.email}`, {
        bookingData,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          handleSuccessToast("Room Booked successfully!");
          setFetch(!fetch);
        } else {
          handleErrorToast(
            "An error occured. Please check internet conneciton!"
          );
        }
      });
  };

  // Data fetching
  useEffect(() => {
    axiosSecure.get(`/rooms/singleRoomDetails/${id}`).then((res) => {
      setCurrentRoomDetail(res.data.roomData);
      setCurrentRoomReviews(res.data.reviews);
    });
  }, [axiosSecure, id, fetch]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Ilk Lodge (Room details)"}</title>
      </Helmet>
      <div className="w-[90vw] m-auto">
        <Navbar />
      </div>
      <div className="bg-white dark:bg-slate-900">
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
              Room with View
            </h1>
          </div>

          <div className="bg-blue-50 dark:bg-slate-900 py-10 lg:py-20">
            <div className="flex flex-col md:flex-row items-center gap-10 w-[90vw] m-auto">
              <div className="relative">
                <img
                  src={photo}
                  className="md:w-[70vw] lg:w-[50vw] lg:h-[60vh] object-cover rounded-xl"
                />
                {offer === "none" ? (
                  <div></div>
                ) : (
                  <div>
                    <div className="absolute bottom-0 w-full h-[5vh] lg:h-[7vh] bg-black opacity-30 z-10"></div>
                    <div className="absolute bottom-2 lg:bottom-5 left-5 z-30">
                      <p className="lg:text-2xl text-white">{offer}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-[#212538] text-white w-full md:w-[30vw] h-[25vh] md:h-[35vh] lg:w-[40vw] lg:h-[60vh] rounded-xl">
                <div>
                  <div className="flex  justify-center items-center md:items-start flex-col  h-full p-11 lg:p-20">
                    {available ? (
                      <div className="space-x-5 md:space-x-0  md:space-y-10 lg:space-y-24">
                        <div className="flex flex-col md:gap-10 lg:gap-20">
                          <label className="lg:text-4xl" htmlFor="checkin">
                            <BsBuildingCheck className="inline" /> Check In
                          </label>

                          <input
                            onChange={handleDateChange}
                            className="bg-[#212538] lg:text-xl  outline-none"
                            type="date"
                            name="checkin"
                            required
                          />
                        </div>

                        {user ? (
                          // Booking modal
                          <div>
                            <button
                              className="p-2 lg:w-[30vw] lg:py-2 bg-orange-300 rounded-md outline-none text-black font-semibold lg:text-xl duration-700 hover:bg-green-300"
                              onClick={() => handleModalOpen()}
                            >
                              Book Now
                            </button>

                            <dialog
                              id="my_modal_5"
                              className="modal modal-bottom sm:modal-middle"
                            >
                              <div className="modal-box bg-white dark:bg-[#212538] text-black dark:text-white">
                                <h3 className="font-bold text-2xl">
                                  Confirm Booking
                                </h3>

                                {/* Data Field */}
                                <div className="mt-10 font-semibold">
                                  <p>Booking Data : {bookingDate}</p>
                                  <p>Room Price : {currentRoomDetail.price}$</p>
                                  <p>
                                    Room Size : {currentRoomDetail.size} square
                                    feet
                                  </p>
                                </div>

                                <div className="modal-action">
                                  <form
                                    method="dialog"
                                    className="flex justify-between gap-4"
                                  >
                                    {/* if there is a button in form, it will close the modal */}
                                    <button
                                      onClick={handleConfimBooking}
                                      className="w-full p-4 bg-green-400 text-white font-semibold rounded-xl "
                                    >
                                      Confrim
                                    </button>
                                    <button className="w-full p-4 bg-red-400 text-white font-semibold rounded-xl ">
                                      Close
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </dialog>
                          </div>
                        ) : (
                          <Link to="/login">
                            <input
                              className="mt-5 md:mt-10 lg:mt-32 p-2 lg:w-[30vw] lg:py-2 bg-orange-300 rounded-md outline-none text-black font-semibold lg:text-xl duration-700 hover:bg-green-300"
                              type="submit"
                              value="Login here to book"
                            />
                          </Link>
                        )}
                      </div>
                    ) : (
                      <p className="text-xl text-center md:pt-10 lg:text-2xl lg:p-36 text-red-400">
                        This room is currently booked
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[90vw] m-auto py-10 flex flex-col lg:flex-row gap-10 justify-between text-gray-600 dark:text-white">
              <div className="lg:w-[50vw]">
                <h1 className="text-center text-3xl mt-6"> Room Description</h1>
                <div className="grid grid-cols-3 text-center  py-5  rounded-xl">
                  <div className="flex flex-col justify-center items-center">
                    <BsPeople className="text-3xl md:text-4xl lg:text-5xl" />
                    <p className="md:text-xl lg:text-xl">4 Guest</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <SlSizeFullscreen className="text-2xl md:text-3xl lg:text-4xl" />
                    <p className="md:text-xl lg:text-xl mt-1">
                      {size} square feet
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <BsCurrencyDollar className="text-3xl md:text-4xl lg:text-5xl" />
                    <p className="md:text-xl lg:text-xl">{price}$ per night</p>
                  </div>
                </div>

                <h1 className="text-center text-3xl mt-6">Room Service</h1>

                <div className="grid grid-cols-3 text-center  my-3 p-5 text-gray-500 dark:text-white rounded-xl">
                  <div className="flex flex-col justify-center items-center">
                    <LuBike className="text-3xl md:text-4xl lg:text-5xl" />
                    <p className="md:text-xl lg:text-xl">Bike Rental</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <ImGlass className="text-3xl md:text-4xl lg:text-5xl " />
                    <p className="md:text-xl lg:text-xl mt-1">Welcome Drink</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <BiSwim className="text-3xl md:text-4xl lg:text-5xl " />
                    <p className="md:text-xl lg:text-xl">Swimming Pool</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-center text-3xl mt-6">Description</h1>
                  <p className="text-justify mt-2 text-normal lg:font-semibold lg:p-5 rounded-xl">
                    {description}
                  </p>
                </div>
              </div>

              <div className="roomDetailTestimonial w-[90vw] lg:h-[61vh] lg:w-[40vw]  rounded-xl  space-y-3">
                {currentRoomReviews.length === 0 ? (
                  <p className="text-center lg:text-left">Add your reviews</p>
                ) : (
                  currentRoomReviews.map((i) => (
                    <SingleRoomReviews key={i._id} data={i}></SingleRoomReviews>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomDetails;

// TODO add review comment inside detail page

// TODO  make a condition for room booking button based on available field on room page
