import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  const navigate = useNavigate();
  const { createUser, signInWithGoogle, UpdateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least 6 characters, an uppercase letter, and a lowercase letter."
      );
      return; 
    }
    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        UpdateUserProfile({ displayName: name, photoURL: photoURL })
          .then(() => {
            navigate("/");
          })
          .catch((updateError) => {
            setError("Error updating profile: " + updateError.message);
          });
      })
      .catch((authError) => {
        setError("Registration failed: " + authError.message);
      });
  };

  const handleRegistrationWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("User registered with Google:", result.user);
        navigate("/"); 
      })
      .catch((error) => {
        setError("Google registration failed: " + error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Join us and help make a difference.</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Profile Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Your Password"
                    className="input input-bordered w-full"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-2 text-gray-600"
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="mt-4 text-center">
                <p>Or register with:</p>
                <button
                  type="button"
                  onClick={handleRegistrationWithGoogle}
                  className="btn btn-outline flex items-center justify-center gap-2 w-full"
                >
                  <FcGoogle size={24} />
                  Google
                </button>
              </div>
              <p className="mt-4 text-center">
                Already have an account?{" "}
                <Link to="/Login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
