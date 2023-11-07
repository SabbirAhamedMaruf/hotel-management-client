import { useEffect, useState } from "react";
import useAxiosSeure from "../../Hooks/useAxiosSecure";
import Marquee from "react-fast-marquee";
import HomeSingleTestimonialData from "../Shared/HomeSingleTestimonialData";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const axiosSecure = useAxiosSeure();

  // Home page testimonial
  useEffect(() => {
    axiosSecure
      .get("/testimonial")
      .then((result) => setTestimonialData(result.data));
  }, [axiosSecure]);


  return (
    <div className="w-full">
      <Marquee speed={100}>
        {testimonialData?.map((i) => (
          <HomeSingleTestimonialData
            key={i._id}
            data={i}
          ></HomeSingleTestimonialData>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;

// TODO Create a page where admin can insert new room follow room requirments from there.
// TODO create room gallery visit awsome component
// TODO you wanted to add a drop down menu when it show user name and and signout. It can be implemented but use can use secondary navber to display user information.

