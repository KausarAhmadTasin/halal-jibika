import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import auth from "../../Config/Firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";

import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import Header from "../../Components/Header/Header";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignup = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleGithubSignup = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
      });
  };

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate("/");
  }

  return (
    <>
      <Header />
      <div className="reg-container">
        <h2 className="text-center">Create a new account</h2>

        <div className="signup-container">
          <form>
            <div className="single-input">
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

            <input
              onClick={() => createUserWithEmailAndPassword(email, password)}
              type="submit"
              value="Sign Up"
              className="sign-up-btn"
            />
          </form>

          <div className="foot-note">
            <p>Already have an account? </p>
            <button className="log-in-recommend-btn">
              {" "}
              <Link to="/login">Log in</Link>{" "}
            </button>
          </div>

          <div className="google-github">
            <button onClick={handleGoogleSignup} className="btn-flex">
              Sign up with <FcGoogle />
            </button>
            <button onClick={() => handleGithubSignup()} className="btn-flex">
              Sign up with <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
