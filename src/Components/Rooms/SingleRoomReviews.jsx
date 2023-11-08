import PropTypes from 'prop-types';
const SingleRoomReviews = ({data}) => {
    const {name,photo,postedDate,reviewText,userRating} = data || {};
  return (
    <div>
      <div className="flex justify-center items-center gap-5 w-full lg:h-[15vh] rounded-xl p-5 bg-blue-50 dark:bg-[#212538] border-2 border-gray-400">
        <img src={photo} className="w-14 lg:w-24 rounded-full" />
        <div>
          <h3 className="font-bold lg:text-xl">{name}</h3>
          <h3 className="lg:font-semibold">Rating {userRating}/5</h3>
          <p className="lg:font-semibold">
            Time : {postedDate}
          </p>
          <p className="text-[12px] md:text-[14px]">
            {reviewText}
          </p>
        </div>
      </div>
    </div>
  );
};
SingleRoomReviews.propTypes ={
    data : PropTypes.object
}
export default SingleRoomReviews;
