import Navbar from "../Shared/Navbar";
import errorLogo from "../../assets/Images/error.png";
import { Link, useRouteError } from "react-router-dom";
import { Helmet } from "react-helmet";
const Errorpage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="font-Jost h-[100vh] bg-blue-100 dark:bg-slate-900 text-black dark:text-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Ilk Lodge (Error)"}</title>
      </Helmet>
      <div className="w-[95%] lg:w-[90%] m-auto pt-5">
        <Navbar />
        <div className="grid justify-center items-center">
          <div className="pt-24 text-center text-xl font-semibold text-[#ce3232]">
            <img src={errorLogo} alt="errorlogo" className="w-[36rem]" />
            {error.status ? (
              <div>
                <h3>Error Code: {error.status}</h3>
                <h3>Error Code: {error.statusText}</h3>
                <h3>Error Code: {error.data}</h3>
              </div>
            ) : (
              <h3>An unknown error occured</h3>
            )}
          </div>
          <div className="relative mt-4 m-auto">
            <button  className="inline py-2 px-4 w-max  font-semibold text-white  bg-gradient-to-r from-cyan-400 to-blue-600 rounded-md">Find Home</button>
            <Link to="/"><button className="inline absolute inset-0 opacity-0 hover:opacity-100 py-2 px-4  font-semibold text-white bg-gradient-to-l from-cyan-400 to-blue-600 rounded-md transition duration-700">Find Home</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
