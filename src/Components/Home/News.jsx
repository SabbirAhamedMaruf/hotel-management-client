import { Helmet } from "react-helmet";
import Navbar from "../Shared/Navbar";
import { useEffect, useState } from "react";
import useAxiosSeure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const axiosSecure = useAxiosSeure();
  useEffect(() => {
    axiosSecure.get("/news").then((res) => setNews(res.data));
  }, [axiosSecure]);

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
              <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl py-8  font-Edu">
                News
              </h1>

              <div className="m-auto w-[90%] md:w-[80%] pb-8 space-y-5">
                {news.map((i) => (
                  <div
                    key={i._id}
                    className="card md:card-side bg-base-100 shadow-xl"
                  >
                    <figure>
                      <img
                        src={i.cover}
                        className="w-full h-[200px] md:w-[200px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover"
                      />
                    </figure>
                    <div className="md:w-2/3 card-body">
                      <h2 className="font-semibold text-xl lg:text-3xl">
                        {i.title}
                      </h2>
                      <p className="text-2xl">{i.description}</p>
                      <Link to="/news">
                        <button className=" px-3 py-2 font-semibold bg-[#fdba74] w-max">
                        Read More
                      </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
