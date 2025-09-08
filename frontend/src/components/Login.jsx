import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    document.getElementById("my_modal_3").close();
    navigate("/");
  };

  const handleSignup = () => {
    document.getElementById("my_modal_3").close();
    navigate("/signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    email, password;
    try {
      const response = await axios.post("https://mybookstore-9rbu.onrender.com/login", {
        email,
        password,
      });
      localStorage.setItem("isLoggedIn", true);
      document.getElementById("my_modal_3").close();
      toast.success("Login Successfully");
      navigate("/");
    } catch (err) {
      document.getElementById("my_modal_3").close();
      toast.error(
        err?.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-2xl text-center mb-4">Login</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-2">
              Login
            </button>
          </form>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <button onClick={handleSignup} className="text-blue-500">
              Sign up
            </button>
          </p>
        </div>
      </dialog>
    </>
  );
};

export default Login;
