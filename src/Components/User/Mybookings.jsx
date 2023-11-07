import Navbar from "../Shared/Navbar";
import roombanner from "../../assets/Images/rooms/bg.jpg";
import bed1 from "../../assets/Images/banner/bed1.jpg";
import useAxiosSeure from "../../Hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Mybookings = () => {
  const [userBookedRooms , setUserBookedRooms] = useState([]);
  const {user} = useContext(AuthContext);
  const userEmail = user.email;
  console.log(userEmail);
  const axiosSecure = useAxiosSeure();


  useEffect(()=>{
    axiosSecure.post("/mybookings",{userEmail})
    .then(res=>setUserBookedRooms(res.data))
  },[axiosSecure,userEmail])



  return (
    <div>
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
          <div className="bg-blue-50 dark:bg-slate-900">
            <div className="w-[90vw] m-auto">
              <div className="overflow-x-auto">
                <table className="table text-center lg:text-xl mt-20 mb-96 md:mb-80 lg:mb-36">
                  {/* head */}
                  <thead className="lg:text-xl">
                    <tr>
                      <th>No.</th>
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
                    <tr>
                      <td>1</td>
                      <div className="avatar p-2">
                        <div className="rounded w-20 h-14 md:w-32 md:h-24 lg:w-60 lg:h-40">
                          <img src={bed1} />
                        </div>
                      </div>
                      <td>67$</td>
                      <td>6-11-2023</td>

                      <td>
                        <div>
                          <button
                            className="p-1 lg:px-2 lg:py-2 bg-green-400 text-white rounded-md border-2 border-transparent hover:border-white"
                            onClick={() =>
                              document.getElementById("review").showModal()
                            }
                          >
                            Review
                          </button>
                          <dialog
                            id="review"
                            className="modal modal-bottom sm:modal-middle"
                          >
                            <div className="modal-box bg-blue-200">
                              <h3 className="font-bold text-2xl text-left">
                                How was your experience
                              </h3>

                              <div className="modal-action justify-start">
                                <form
                                  method="dialog"
                                  className="flex flex-col space-y-5"
                                >
                                  <div className="rating rating-md">
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                      checked
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                  </div>
                                  <input
                                    className="py-2 px-4 w-[24vw] text-[17px] bg-blue-50 rounded-md outline-none"
                                    type="text"
                                    name="review"
                                    placeholder="Write a review"
                                  />
                                  {/* if there is a button in form, it will close the modal */}
                                  <button className="py-2 bg-orange-300 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300">
                                    Close
                                  </button>
                                </form>
                              </div>
                            </div>
                          </dialog>
                        </div>
                      </td>

                      <td>
                        {" "}
                        <div>
                          <button
                            className="p-1 lg:px-2 lg:py-2 bg-orange-400 text-white rounded-md border-2 border-transparent hover:border-white"
                            onClick={() =>
                              document.getElementById("update").showModal()
                            }
                          >
                            Update
                          </button>
                          <dialog
                            id="update"
                            className="modal modal-bottom sm:modal-middle"
                          >
                            <div className="modal-box bg-blue-200">
                              <h3 className="font-bold text-2xl">
                                How was your experience
                              </h3>

                              <div className="modal-action justify-start">
                                <form
                                  method="dialog"
                                  className="flex flex-col space-y-5"
                                >
                                  <div className="rating rating-md">
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                      checked
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                  </div>
                                  <input
                                    className="py-2 px-4 w-[24vw] text-[17px] bg-blue-50 rounded-md outline-none"
                                    type="text"
                                    name="review"
                                    placeholder="Write a review"
                                  />
                                  {/* if there is a button in form, it will close the modal */}
                                  <button className="py-2 bg-orange-300 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300">
                                    Close
                                  </button>
                                </form>
                              </div>
                            </div>
                          </dialog>
                        </div>
                      </td>
                      <td>
                        <div>
                          <button
                            className="p-1 lg:px-2 bg-red-500 text-white rounded-md border-2 border-transparent hover:border-white"
                            onClick={() =>
                              document.getElementById("delete").showModal()
                            }
                          >
                            Delete
                          </button>
                          <dialog
                            id="delete"
                            className="modal modal-bottom sm:modal-middle"
                          >
                            <div className="modal-box bg-blue-200">
                              <h3 className="font-bold text-2xl text-left">
                                How was your experience
                              </h3>

                              <div className="modal-action justify-start">
                                <form
                                  method="dialog"
                                  className="flex flex-col space-y-5"
                                >
                                  <div className="rating rating-md">
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                      checked
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                      type="radio"
                                      name="rating-8"
                                      className="mask mask-star-2 bg-orange-400"
                                    />
                                  </div>
                                  <input
                                    className="py-2 px-4 w-[24vw] text-[17px] bg-blue-50 rounded-md outline-none"
                                    type="text"
                                    name="review"
                                    placeholder="Write a review"
                                  />
                                  {/* if there is a button in form, it will close the modal */}
                                  <button className="py-2 bg-orange-300 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300">
                                    Close
                                  </button>
                                </form>
                              </div>
                            </div>
                          </dialog>
                        </div>
                      </td>
                    </tr>
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
