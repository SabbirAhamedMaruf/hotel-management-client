import Navbar from "../Shared/Navbar";
import loginbg from "../../assets/Images/login.jpg";
import { GrGoogle } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
const Login = () => {
  const [error, setError] = useState(null);
  const { loginWithEmail, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.useremail.value;
    const password = form.userpassword.value;
    setError(null);
    loginWithEmail(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setError(null);
    loginWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Ilk Lodge (Login)"}</title>
      </Helmet>
      <div className="w-[90%] lg:h-[100vh] m-auto">
        <Navbar />
        <div className="grid justify-center items-center py-5">
          <div className="flex flex-col lg:flex-row  justify-center gap-10 bg-white dark:bg-slate-700 rounded-lg p-3 lg:p-16 shadow-2xl">
            <div>
              <img
                src={loginbg}
                className="w-full lg:w-[35vw] lg:h-[65vh] rounded-xl object-cover"
              />
            </div>
            <div className=" flex flex-col justify-center gap-5">
              <h1 className="font-semibold text-2xl lg:text-4xl text-center">
                Login
              </h1>
              <form
                onSubmit={handleLoginWithEmail}
                className="w-[90%] md:w-4/5 m-auto lg:m-0 flex flex-col space-y-4"
              >
                <label
                  htmlFor="useremail"
                  className="font-semibold text-xl lg:text-2xl"
                >
                  Email
                </label>
                <input
                  className="px-4 py-2 lg:py-3 lg:w-[30vw] bg-blue-100 rounded-md outline-none text-black font-semibold"
                  type="email"
                  name="useremail"
                  placeholder="Enter your email"
                  required
                />
                <label
                  htmlFor="userpassword"
                  className="font-semibold text-xl lg:text-2xl"
                >
                  Password
                </label>
                <input
                  className="px-4 py-2 lg:py-3 lg:w-[30vw] bg-blue-100 rounded-md outline-none text-black font-bold "
                  type="password"
                  name="userpassword"
                  placeholder="Enter your password"
                  required
                />
                <input
                  className="px-4 py-2 lg:py-3 lg:w-[30vw] bg-orange-300 rounded-md outline-none text-black font-semibold text-xl duration-700 hover:bg-green-300"
                  type="submit"
                  value="Submit"
                />
              </form>
              <button
                onClick={handleGoogleLogin}
                className="w-[90%] md:w-4/5 m-auto lg:m-0 px-4 py-3 lg:w-[30vw] bg-orange-300 rounded-md outline-none text-black font-semibold  text-xl duration-700 hover:bg-green-300"
              >
                <GrGoogle className="text-xl m-auto" />
              </button>
              <p className="text-center font-semibold text-[17px]">
                Not Registerd?{" "}
                <Link
                  to="/register"
                  className="text-orange-400 duration-700 hover:text-green-400"
                >
                  Click here
                </Link>
              </p>
              <p className="text-center font-semibold text-[17px] text-orange-500">
                {error && error}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
