import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import registerbg from "../../assets/Images/registerbg.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const Register = () => {
  const [error, setError] = useState(null);
  const { createAccountWithEmail, handleUserSignOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const photo = form.userphoto.value;
    const email = form.useremail.value;
    const password = form.userpassword.value;
    setError(null);
    // Password validation
    if (password.length < 6) {
      setError("Password should contain at least 6 character!");
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should contain one uppercase letter!");
    } else if (!/[$*@#!?]/.test(password)) {
      setError("Password should contian one special character!");
    } else {
      createAccountWithEmail(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: `${name}`,
            photoURL: `${photo}`,
          });
          console.log(result.user);
          handleUserSignOut();
          navigate("/login");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Ilk Lodge (Register)"}</title>
      </Helmet>
      <div className="w-[90%] lg:h-[100vh] m-auto">
        <Navbar />
        <div className="grid justify-center items-center py-5">
          <div className="flex flex-col lg:flex-row-reverse  justify-center gap-10 bg-white dark:bg-slate-700 rounded-lg p-3 lg:p-16 shadow-2xl">
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
              <form
                onSubmit={handleEmailLogin}
                className="w-[90%] md:w-4/5 m-auto lg:m-0 flex flex-col space-y-4"
              >
                <label
                  htmlFor="username"
                  className="font-semibold text-xl lg:text-2xl"
                >
                  Name
                </label>
                <input
                  className="px-4 py-2 lg:py-3 lg:w-[30vw] bg-blue-100 rounded-md outline-none text-black font-semibold"
                  type="text"
                  name="username"
                  placeholder="Enter your name"
                  required
                />

                <label
                  htmlFor="userphoto"
                  className="font-semibold text-xl lg:text-2xl"
                >
                  Photo
                </label>
                <input
                  className="px-4 py-2 lg:py-3 lg:w-[30vw] bg-blue-100 rounded-md outline-none text-black font-semibold"
                  type="text"
                  name="userphoto"
                  placeholder="Enter your photo url"
                  required
                />

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
              <p className="text-center font-semibold text-[17px]">
                Already Registerd?{" "}
                <Link
                  to="/login"
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

export default Register;
