import Navbar from "../Shared/Navbar";
import useAxiosSeure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { NotificationContext } from "../../Hooks/Notification";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const AddRoom = () => {
  const {user} = useContext(AuthContext);
  const { handleSuccessToast, handleErrorToast } =
    useContext(NotificationContext);
  const axiosSecure = useAxiosSeure();
  const handleAddRoom = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.roomphoto.value;
    const price = parseInt(form.roomprice.value);
    const featured = Boolean(form.isfeatured.value);
    const size = parseInt(form.roomsize.value);
    const description = form.roomdescription.value;
    const available = true;
    const lastbookDate = "";

    const currentRoomData = {
      photo,
      price,
      featured,
      size,
      available,
      lastbookDate,
      description,
    };

    axiosSecure.post(`/addroom?userEmail=${user.email}`, currentRoomData).then((res) => {
      if (res.data.acknowledged) {
        handleSuccessToast("Room information added successfully!");
        form.reset();
      } else {
        handleErrorToast("An error occured. Please check connection!");
      }
    });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Ilk Lodge (Add Room)"}</title>
      </Helmet>
      <div>
        <div>
          <div className="pb-10">
            <div className="w-[90vw] m-auto">
              <Navbar />
            </div>
            <div className="w-[90vw] p-4 lg:p-14 m-auto shadow-2xl rounded-lg my-14 bg-white dark:bg-[#334155]">
              <h1 className="text-center font-bold text-4xl py-8 ">Add Room</h1>
              <div className="m-auto w-[80%] pb-8">
                <form
                  onSubmit={handleAddRoom}
                  className="grid lg:grid-cols-2 gap-8 pt-12"
                >
                  {/* Left side */}
                  <div className="grid lg:grid-cols-2 space-y-5">
                    {/* Photo */}
                    <label className="font-bold text-xl" htmlFor="email">
                      Room Photo
                    </label>
                    <input
                      className="col-span-2 py-2 px-4 text-black bg-blue-100 rounded-md font-semibold outline-none"
                      type="text"
                      name="roomphoto"
                      required
                      placeholder="Enter your photo url"
                    />

                    {/* Name */}
                    <label className="font-bold text-xl" htmlFor="password">
                      Room Price
                    </label>
                    <input
                      className="col-span-2 py-2 px-4 text-black bg-blue-100 rounded-md font-semibold outline-none"
                      type="number"
                      name="roomprice"
                      required
                      placeholder="Enter your room price"
                    />

                    {/* Is Featured */}
                    <label className="font-bold text-xl" htmlFor="password">
                      Is Featured?
                    </label>
                    <select
                      name="isfeatured"
                      required
                      className="col-span-2 py-2 px-4 text-black bg-blue-100 rounded-md font-semibold outline-none"
                    >
                      <option value="false">False</option>
                      <option value="true">True</option>
                    </select>
                  </div>

                  {/* Right side */}
                  <div className="grid lg:grid-cols-2 space-y-5">
                    {/* Warrenty */}
                    <label className="font-bold text-xl" htmlFor="password">
                      Room Size
                    </label>
                    <input
                      className="col-span-2 py-2 px-4 text-black bg-blue-100 rounded-md font-semibold outline-none"
                      type="number"
                      name="roomsize"
                      required
                      placeholder="Enter your room size"
                      min={0}
                    />

                    {/* Short Descriptions */}
                    <label className="font-bold text-xl" htmlFor="password">
                      Description
                    </label>
                    <textarea
                      className="col-span-2 py-2 px-4 text-black bg-blue-100 rounded-md font-semibold outline-none"
                      name="roomdescription"
                      cols="30"
                      rows="5"
                      placeholder="Enter your room description"
                    ></textarea>
                  </div>

                  <input
                    className="px-4 py-2 lg:py-3 lg:w-[33vw] bg-orange-300 rounded-md outline-none text-black font-semibold text-xl duration-700 hover:bg-green-300"
                    type="submit"
                    value="Add Room"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
