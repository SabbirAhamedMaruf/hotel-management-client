import { useEffect, useState } from "react";
import useAxiosSeure from "../../Hooks/useAxiosSecure";
import SingleRoom from "../Rooms/SingleRoom";

const FeaturedProduct = () => {
  const [featuedProduct, setFeatuedProduct] = useState([]);
  const axiosSecure = useAxiosSeure();

  useEffect(() => {
    axiosSecure
      .get("/featuredProduct")
      .then((res) => setFeatuedProduct(res.data));
  }, [axiosSecure]);

  return (
    <div className="m-auto w-[90%] lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {featuedProduct.map((i) => (
        <SingleRoom key={i._id} data={i}></SingleRoom>
      ))}
    </div>
  );
};

export default FeaturedProduct;
