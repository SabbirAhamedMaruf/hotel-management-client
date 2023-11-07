import PropTypes from "prop-types";
import { useContext, useState } from "react";
import useAxiosSeure from "../../Hooks/useAxiosSecure";
import { NotificationContext } from "../../Hooks/Notification";
import { AuthContext } from "../../Provider/AuthProvider";

const SingleUserBookingTableRow = ({ data }) => {
  
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSeure();
  const { handleSuccessToast, handleErrorToast } =
    useContext(NotificationContext);
  const { date, roomId, roomPrice, roomPhoto } = data.currentRoomData || {};

  //   Code for review funtionality
  // getting date for review text
const reviewTime = new Date();
const postedDate = (`${reviewTime.getFullYear()}-${(reviewTime.getMonth())+1}-${reviewTime.getDate()}`);

  const [reviewText, setReviewText] = useState(null);
  const handleSetReviewText = (e) => {
    setReviewText(e.target.value);
  };

  const [userRating, setUserRating] = useState(null);
  const handleUserRating = (e) => {
    setUserRating(e.target.value);
  };


  const handleSendReviewText = (id) => {
    const reviewData = { id, reviewText,userRating,postedDate, name:user.displayName, photo:user.photoURL};
    if (reviewText === null) {
      handleErrorToast("Please add some review text!");
    } else {
      axiosSecure.patch("/addreview", reviewData).then((res) => {
        if (res.data.acknowledged) {
          handleSuccessToast("Review added successfully!");
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

      <td>
        <div>
          <button
            className="p-1 lg:px-2 lg:py-2 bg-green-400 text-white rounded-md border-2 border-transparent hover:border-white"
            onClick={() => document.getElementById(roomId).showModal()}
          >
            Review
          </button>
          <dialog id={roomId} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-white dark:bg-[#212538] text-black dark:text-white">
              <h3 className="font-bold text-2xl text-left">
                How was your experience
              </h3>

              <div className="modal-action justify-start">
                <form method="dialog" className="flex flex-col space-y-5">

                  {/* <div className="rating rating-md">
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
                  </div> */}

                  <select name="rating" onChange={handleUserRating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                  <input
                    onChange={handleSetReviewText}
                    className="py-2 px-4 w-[24vw] text-[17px] bg-blue-50 text-black font-semibold rounded-md outline-none"
                    type="text"
                    name="review"
                    placeholder="Write a review"
                  />
                  {/* if there is a button in form, it will close the modal */}
                  <div className="flex justify-center gap-10">
                    <button
                      onClick={() => handleSendReviewText(roomId)}
                      className="p-2 bg-orange-300 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300"
                    >
                      Send
                    </button>
                    <button className="p-2 bg-red-500 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300">
                      Close
                    </button>
                  </div>
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
            onClick={() => document.getElementById("update").showModal()}
          >
            Update
          </button>
          <dialog id="update" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-blue-200">
              <h3 className="font-bold text-2xl">How was your experience</h3>

              <div className="modal-action justify-start">
                <form method="dialog" className="flex flex-col space-y-5">
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
            onClick={() => document.getElementById("delete").showModal()}
          >
            Delete
          </button>
          <dialog id="delete" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-blue-200">
              <h3 className="font-bold text-2xl text-left">
                How was your experience
              </h3>

              <div className="modal-action justify-start">
                <form method="dialog" className="flex flex-col space-y-5">
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
  );
};

SingleUserBookingTableRow.propTypes = {
  data: PropTypes.object,
};

export default SingleUserBookingTableRow;
