import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Login.css";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import auth from "../../Config/Firebase";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Header from "../../Components/Header/Header";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // The code below will only execute if the login is successful
      if (email === user.email && password === user.password) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
      // Handle specific error cases, e.g., display an error message to the user
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        // Handle incorrect email or password error
        // Display an error message or perform other actions as needed
      }
      // You can add more specific error handling based on error codes if necessary
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className="reg-container">
        <h2 className="text-center">Log in into your account</h2>

        <div className="login-container">
          <form className="block" onSubmit={handleSubmit}>
            <div className="single-input">
              <label htmlFor="email"></label>
              <input
                className="input-box"
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email address"
              />
            </div>

            <div className="single-input">
              <label htmlFor="password"></label>
              <input
                className="input-box"
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
            </div>

            <input type="submit" value="Log In" className="sign-up-btn" />
          </form>
          <div className="foot-note">
            <p>Do not have an account? </p>
            <button className="log-in-recomend-btn">
              {" "}
              <Link to="/signup">Create a free account</Link>{" "}
            </button>
          </div>
          <SocialLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
