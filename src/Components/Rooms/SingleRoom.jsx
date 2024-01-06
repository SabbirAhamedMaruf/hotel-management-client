import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { SiZerodha } from "react-icons/si";

import PropTypes from "prop-types";

const SingleRoom = ({ data }) => {
  const { _id, photo, price, reviewCount, type, size } = data || {};

  return (
    <div>
      <div className="card w-[350px] md:w-80 lg:w-96 md:h-[55vh] lg:h-[50vh] bg-[#ffffff] shadow-xl rounded-none mx-auto">
        <figure>
          <img src={photo} className="h-60 w-full" />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-5 lg:gap-10 text-gray-500">
            <div className="flex items-center gap-2 lg:gap-5">
              <FaUserAlt />{" "}
              <span className="text-[16px]">Review: {reviewCount}</span>
            </div>
            <div className="flex items-center gap-2 lg:gap-5">
              <SiZerodha />{" "}
              <span className="text-[16px]">
                Size: {size} ft<sup>2</sup>
              </span>
            </div>
          </div>
          <h2 className="font-Edu text-2xl lg:text-3xl">{type}</h2>
          <p></p>
          <div className="flex items-center">
            <p className="text-xl">
              <span className="text-[#fdba74] font-bold">${price}</span> per
              night
            </p>
            <Link to={`/rooms/${_id}`}>
              {" "}
              <button className="bg-[#fdba74] text-black font-bold px-2 py-1 md:px-3 lg:px-4 lg:py-3 ">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleRoom.propTypes = {
  data: PropTypes.object,
};
export default SingleRoom;
