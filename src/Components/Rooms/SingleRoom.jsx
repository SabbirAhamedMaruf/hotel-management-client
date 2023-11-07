import { Link } from "react-router-dom";
import { PiEyeBold } from "react-icons/pi";
import PropTypes from "prop-types";

const SingleRoom = ({ data }) => {
  const { _id, photo, price, reviewCount } = data || {};

  return (
    <div>
      <div className="relative justify-self-center">
        <img
          src={photo}
          className="md:w-[50vw] md:h-[30vh] lg:w-[22vw]  lg:h-[32vh] object-cover rounded-xl"
        />
        <div>
          <p className="absolute bottom-5 left-5 lg:text-xl font-semibold text-white">
            Price : {price}$
          </p>
            <p className="absolute bottom-5 right-5 lg:text-xl font-semibold text-white">
              Review : {reviewCount}
            </p>
        </div>
        <Link to={`/rooms/${_id}`}>
          <button className="md:w-[43.8vw] md:h-[30vh] lg:w-[22vw]  lg:h-[32vh] object-cover bg-black dark:bg-cyan-900 absolute inset-0 rounded-xl opacity-0 transition duration-700 ease-out hover:opacity-40 hover:dark:opacity-70 z-10">
            <PiEyeBold className="text-2xl md:text-3xl lg:text-5xl text-white dark:text-cyan-400 inline" />
          </button>
        </Link>
      </div>
    </div>
  );
};

SingleRoom.propTypes = {
  data: PropTypes.object,
};
export default SingleRoom;
