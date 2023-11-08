import PropTypes from "prop-types";
import { useContext, useState } from "react";
import useAxiosSeure from "../../Hooks/useAxiosSecure";
import { NotificationContext } from "../../Hooks/Notification";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from "moment";

const SingleUserBookingTableRow = ({ fetch,setfetch,data }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSeure();
  const { handleSuccessToast, handleErrorToast } =
    useContext(NotificationContext);
  const { date, roomId, roomPrice, roomPhoto } = data.currentRoomData || {};

  //   Code for review funtionality
  // my modal
  const [showReviewModal, setShowReviewModal] = useState(false);

  // getting date for review text
  const reviewTime = new Date();
  const postedDate = `${reviewTime.getFullYear()}-${
    reviewTime.getMonth() + 1
  }-${reviewTime.getDate()}`;

  const [reviewText, setReviewText] = useState(null);
  const handleSetReviewText = (e) => {
    setReviewText(e.target.value);
  };

  const [userRating, setUserRating] = useState(null);
  const handleUserRating = (e) => {
    setUserRating(e.target.value);
  };

  const handleSendReviewText = (id) => {
    const reviewData = {
      id,
      reviewText,
      userRating,
      postedDate,
      name: user.displayName,
      photo: user.photoURL,
    };
    if (reviewText === null) {
      handleErrorToast("Please add some review text!");
    } else {
      axiosSecure.patch(`/addreview?userEmail=${user.email}`, reviewData).then((res) => {
        if (res.data.acknowledged) {
          handleSuccessToast("Review added successfully!");
          setShowReviewModal(false);
        } else {
          handleErrorToast("An error occured. Please check connection!");
        }
      });
    }
  };

  //   Code for update date funtionality
  const [newDate, setNewDate] = useState(date);
  // my modal
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const handleNewDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleUpdateBookedDate = (id, roomId) => {
    if (moment(newDate, "YYYY-MM-DD").diff(moment(date, "YYYY-MM-DD")) === 0) {
      handleErrorToast("Please select a different date to update!");
    } else {
      axiosSecure
        .patch(
          `/updateBookedDate?newDate=${newDate}&bookedId=${id}&roomId=${roomId}&userEmail=${user.email}`
        )
        .then((res) => {
          if (res.data.acknowledged) {
            handleSuccessToast("Booked date updated successfully!");
            setShowUpdateModal(false);
            setfetch(!fetch);
          } else {
            handleErrorToast("An error occured. Please check connection!");
          }
        });
    }
  };

  //   Code for Delete booking funtionality
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const handleDeleteBookedRoom = (id, roomId) => {
    if (moment(date, "YYYY-MM-DD").diff(moment(), "days") < 1) {
      handleErrorToast("User can cancel booking 1 day before booked date!");
    } else {
      axiosSecure
        .delete(`/deletebookedroom?id=${id}&roomId=${roomId}&userEmail=${user.email}`)
        .then((res) => {
          if (res.data.acknowledged) {
            handleSuccessToast("Order cancelelled successfully!");
            setShowDeleteModal(false);
            setfetch(!fetch);
          } else {
            handleErrorToast("An error occured. Please check connection!");
          }
        });
    }
  };

  return (
    <tr>
      <div className="avatar p-2">
        <div className="rounded w-20 h-14 md:w-32 md:h-24 lg:w-60 lg:h-40">
          <img src={roomPhoto} />
        </div>
      </div>
      <td>{roomPrice}$</td>
      <td>{date}</td>

      {/* Review */}
      <td>
        <div>
          {/* My Custom Modal */}
          <button
            className="p-1 lg:px-2 lg:py-2 bg-green-400 text-white rounded-md border-2 border-transparent hover:border-white"
            onClick={() => setShowReviewModal(true)}
          >
            Review
          </button>
          {showReviewModal && (
            <div>
              <div className="fixed inset-0 bg-[rgba(189,189,189,0.4)] z-10">
                <div className="fixed top-[35%] left-[35%] p-10 space-y-10 bg-white dark:bg-[#212538] rounded-xl ">
                  <h3 className="font-bold text-2xl text-left">
                    How was your experience
                  </h3>
                  <div>
                    <form method="dialog" className="flex flex-col space-y-5">
                      <select
                        className="bg-white dark:bg-[#212538] "
                        name="rating"
                        onChange={handleUserRating}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                      <input
                        onChange={handleSetReviewText}
                        className="py-2 px-4 w-[24vw] text-[17px] bg-blue-50 dark:bg-[#323856] text-black font-semibold rounded-md outline-none"
                        type="text"
                        name="review"
                        placeholder="Write a review"
                      />
                    </form>
                  </div>
                  <div className="flex justify-center gap-10">
                    <button
                      onClick={() => handleSendReviewText(roomId)}
                      className="p-2 bg-orange-300 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300"
                    >
                      Send
                    </button>
                    <button
                      onClick={() => setShowReviewModal(false)}
                      className="p-2 bg-red-500 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </td>

      {/* Update */}
      <td>
        <div>
          {/* My Custom Modal */}
          <button
            className="p-1 lg:px-2 lg:py-2 bg-orange-400 text-white rounded-md border-2 border-transparent hover:border-white"
            onClick={() => setShowUpdateModal(true)}
          >
            Update
          </button>
          {showUpdateModal && (
            <div>
              <div className="fixed inset-0 bg-[rgba(189,189,189,0.4)] z-10">
                <div className="fixed top-[35%] left-[35%] p-10 space-y-10 bg-white dark:bg-[#212538] rounded-xl ">
                  <h3 className="font-bold text-2xl text-left">
                    How was your experience
                  </h3>
                  <div>
                    <form method="dialog" className="flex flex-col space-y-5">
                      <input
                        onChange={handleNewDateChange}
                        defaultValue={date}
                        className="py-2 px-4 w-[24vw] text-[17px] bg-blue-50 text-black font-semibold rounded-md outline-none"
                        type="date"
                        name="updateDate"
                      />
                    </form>
                  </div>
                  <div className="flex justify-center gap-10">
                    <button
                      onClick={() => handleUpdateBookedDate(data._id, roomId)}
                      className="p-2 bg-orange-300 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300"
                    >
                      Send
                    </button>
                    <button
                      onClick={() => setShowUpdateModal(false)}
                      className="p-2 bg-red-500 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>












        <div>
          <dialog id="update" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-white dark:bg-[#212538] text-black dark:text-white h-[50vh]">
              <h3 className="font-bold text-2xl">Update booking date</h3>
              <div className="modal-action">
                <form
                  method="dialog"
                  className="flex flex-col justify-center space-y-60"
                >
                  {/* if there is a button in form, it will close the modal */}
                  <div className="flex justify-center gap-10">
                    <button
                      onClick={() => handleUpdateBookedDate()}
                      className="p-2 bg-green-400 rounded-md outline-none  font-semibold  text-xl duration-700 hover:bg-green-300"
                    >
                      Confirm
                    </button>
                    <button className="px-4 py-2 bg-red-500 rounded-md outline-none font-semibold  text-xl duration-700 hover:bg-green-300">
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </td>









      {/* Delete */}
      <td>

      <div>
          {/* My Custom Modal */}
          <button
            className="p-1 lg:px-2 lg:py-2 bg-red-500 text-white rounded-md border-2 border-transparent hover:border-white"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </button>
          {showDeleteModal && (
            <div>
              <div className="fixed inset-0 bg-[rgba(189,189,189,0.4)] z-10">
                <div className="fixed top-[35%] left-[35%] p-10 space-y-10 bg-white dark:bg-[#212538] rounded-xl ">
                  <h3 className="font-bold text-2xl text-left">
                   Delete booked room?
                  </h3>
                  <div className="flex justify-center gap-10">
                    <button
                      onClick={() => handleDeleteBookedRoom(data._id, roomId)}
                      className="px-4 py-2 bg-orange-300 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="px-4 py-2 bg-red-500 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>



      </td>
    </tr>
  );
};

SingleUserBookingTableRow.propTypes = {
  data: PropTypes.object,
  setfetch: PropTypes.func,
  fetch : PropTypes.bool
};

export default SingleUserBookingTableRow;

