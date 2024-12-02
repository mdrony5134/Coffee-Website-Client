import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const SingUp = () => {
  const { googleAuth, singUp, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // google singup
  const handleGoogleSingUp = async () => {
    try {
      await googleAuth();
      toast.success("Singup successfully with google", {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      console.log("singup error", error.message);
      toast.error("Google singup error, please try again!", {
        position: "top-center",
      });
    }
  };

  // user singup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState("");

  // console.log(email)
  const handleSingUp = async (e) => {
    e.preventDefault();
    console.log(name, email, password, photoURL);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be one uppercase letter, must be lowercase letter and must be 6 character long!"
      );
      return;
    }
    setError("");

    // console.log("click");
    const createdAt = user?.createdAt;
    console.log("user", user);
    console.log("singup:",createdAt)
    const newUser = { name, email, photoURL, createdAt };
    try {
      await singUp(name, email, photoURL, password);
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed to save user data.");
      }

      const result = await response.json();
      console.log("User saved:", result);
      toast.success("Singup successfully with google", {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      console.log("singup error", error.message);
      toast.error(`singup failed, ${error.message}`, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="md:pt-40 pt-32 pb-16">
      <div className="flex bg-white mx-5 md:px-0 rounded-lg shadow-lg overflow-hidden md:mx-auto max-w-sm lg:max-w-7xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover w-full overflow-hidden"
          style={{
            backgroundImage: "url('/images/singup-img.webp')",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h1 className="logo text-center font-bold text-[#374151] text-[40px]">
            Espresso Emporium
          </h1>
          <button
            onClick={handleGoogleSingUp}
            className="w-full mx-auto max-w-sm font-bold shadow-sm rounded-lg py-2 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-4"
          >
            <div className="bg-white p-2 rounded-full">
              <svg className="w-4" viewBox="0 0 533.5 544.3">
                <path
                  d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                  fill="#4285f4"
                />
                <path
                  d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                  fill="#34a853"
                />
                <path
                  d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                  fill="#fbbc04"
                />
                <path
                  d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                  fill="#ea4335"
                />
              </svg>
            </div>
            <span className="ml-4">Sing Up with Google</span>
          </button>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" className="text-xs text-center text-gray-500 uppercase">
              or SingUp with email
            </a>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSingUp}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Photo URL
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <div className="text-red-600 mt-1">{error}</div>}
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-[#D2B48C] border-[#331A15] text-[#331A15] font-bold py-2 px-4 w-full rounded"
              >
                Sing Up
              </button>
            </div>
          </form>
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute md:right-44 right-[70px] md:bottom-[38px] -bottom-[108px]"
          >
            {showPassword ? (
              <IoEye className="text-xl" />
            ) : (
              <IoEyeOff className="text-xl" />
            )}
          </button>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="/login" className="text-xs text-gray-500 uppercase">
              or Login
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
