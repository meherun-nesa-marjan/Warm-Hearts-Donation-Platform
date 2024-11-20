import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");


  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); 
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log("Logged in user:", result.user);
        e.target.reset();
        navigate(from, { replace: true });
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        setError("Invalid email or password. Please try again.");
        toast.error("Login failed. Check your credentials.");
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google login user:", result.user);
        navigate(from, { replace: true });
        toast.success("Login successful with Google!");
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
        toast.error("Google login failed. Please try again.");
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login to Access More Info</h1>
            <p className="py-6">Welcome back! Please login to continue.</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/ForgetPassword" className="text-blue-500 hover:underline">
                    Forgot Password?
                  </Link>
                </label>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>} {/* Show error below form */}

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <div className="text-center mt-4">
                <p className="mb-2">Or login with:</p>
                <button
                  type="button"
                  onClick={handleLoginWithGoogle}
                  className="btn btn-outline flex items-center justify-center gap-2 w-full"
                >
                  <FcGoogle size={24} />
                  Google
                </button>
              </div>

              <p className="mt-4 text-center">
                Don't have an account?{" "}
                <Link to="/Registration" className="text-blue-500 hover:underline">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Login;
