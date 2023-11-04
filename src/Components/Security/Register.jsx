import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import registerbg from "../../assets/Images/registerbg.jpg";

const Register = () => {
  return (
    <div>
      <div className="w-[95%] lg:h-[100vh] m-auto">
        <Navbar />
        <div className="grid justify-center items-center py-5">
          <div className="flex flex-col lg:flex-row-reverse  justify-center gap-10 bg-white dark:bg-slate-700 rounded-lg p-3 lg:p-16 shadow-lg">
            <div>
              <img
                src={registerbg}
                className="w-full lg:w-[35vw] lg:h-[70vh] rounded-xl object-cover"
              />
            </div>
            <div className=" flex flex-col justify-center gap-5">
              <h1 className="font-semibold text-2xl lg:text-4xl text-center">
                Register
              </h1>
              <form className="w-[90%] md:w-4/5 m-auto lg:m-0 flex flex-col space-y-4">
                <label
                  htmlFor="name"
                  className="font-semibold text-xl lg:text-2xl"
                >
                  Name
                </label>
                <input
                  className="px-4 py-2 lg:py-3 lg:w-[30vw] bg-blue-100 rounded-md outline-none text-black font-semibold"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
                <label
                  htmlFor="photo"
                  className="font-semibold text-xl lg:text-2xl"
                >
                  Photo
                </label>
                <input
                  className="px-4 py-2 lg:py-3 lg:w-[30vw] bg-blue-100 rounded-md outline-none text-black font-semibold"
                  type="text"
                  name="photo"
                  placeholder="Enter your photo url"
                  required
                />
                <label
                  htmlFor="email"
                  className="font-semibold text-xl lg:text-2xl"
                >
                  Email
                </label>
                <input
                  className="px-4 py-2 lg:py-3 lg:w-[30vw] bg-blue-100 rounded-md outline-none text-black font-semibold"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <label
                  htmlFor="password"
                  className="font-semibold text-xl lg:text-2xl"
                >
                  Password
                </label>
                <input
                  className="px-4 py-2 lg:py-3 lg:w-[30vw] bg-blue-100 rounded-md outline-none text-black font-bold "
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <input
                  className="px-4 py-2 lg:py-3 lg:w-[30vw] bg-orange-300 rounded-md outline-none text-black font-semibold text-xl duration-700 hover:bg-green-300"
                  type="submit"
                  value="Submit"
                />
              </form>
              <p className="text-center font-semibold text-[17px]">
                Already Registerd?{" "}
                <Link
                  to="/login"
                  className="text-orange-400 duration-700 hover:text-green-400"
                >
                  Click here
                </Link>
              </p>
              <p className="text-center font-semibold text-[17px] ">
                Error message goes here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
