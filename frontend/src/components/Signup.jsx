import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signup`, // ✅ env से URL
        {
          name,
          email,
          password,
        }
      );

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.success("Signup Successfully");
      navigate("/");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Signup failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Create an Account
        </h2>
        <form className="space-y-5" onSubmit={handleSignup}>
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              ref={nameRef}
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              ref={passwordRef}
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-800"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
