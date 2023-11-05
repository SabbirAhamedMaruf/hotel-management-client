import { PiQuotesFill } from "react-icons/pi";
import PropTypes from "prop-types";

const HomeSingleTestimonialData = ({ data }) => {
  const { photo, name, reviewText } = data || {};
  return (
    <div className="flex justify-center items-center gap-5 rounded-xl p-5 bg-white dark:bg-[#212538] text-black dark:text-white h-[24vh] lg:h-[35vh] w-[95vw] md:w-[60vw] lg:w-[30vw] mr-20">
      <figure className="flex-1">
        <img
          src={photo}
          className="h-32 md:h-36 lg:h-full rounded-full lg:rounded-xl object-cover "
        />
      </figure>
      <div className="flex-1  text-left">
        <h1 className="flex justify-end">
          <PiQuotesFill className="text-xl lg:text-4xl opacity-40" />
        </h1>
        <h2 className="card-title">{name}</h2>
        <div className="rating rating-md">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
        </div>
        <p className="text-[13px] lg:text-[17px] md:text-normal">{reviewText}</p>
      </div>
    </div>
  );
};
HomeSingleTestimonialData.propTypes = {
  data: PropTypes.object,
};

export default HomeSingleTestimonialData;
