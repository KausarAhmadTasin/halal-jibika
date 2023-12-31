import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import auth from "../../Config/Firebase";
import Header from "../../Components/Header/Header";

// import Loading from "../../components/Loading/Loading";

const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitHubUser, gitHubLoading, githubError] =
    useSignInWithGithub(auth);

  const backClick = () => {
    navigate(-1);
  };

  const signupSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.cpassword.value;

    // console.log(name, email, password, confirmPassword);

    if (password !== confirmPassword) {
      return toast.error("Password does not match!");
    } else {
      createUserWithEmailAndPassword(email, password);

      navigate("/");
      return toast.success("Sign Up Successfully");
    }
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user || googleUser || gitHubUser) {
    navigate("/");
  }

  return (
    <>
      <Header />
      <div className="reg-container">
        <div className="reg-box">
          <h2 className="text-center">Create a new account</h2>

          <div className="login-container">
            <form onSubmit={signupSubmit}>
              <div className="block">
                <div className="single-input">
                  <label htmlFor="name"></label>
                  <input
                    className="input-box"
                    id="name"
                    name="name"
                    autoFocus
                    placeholder="Full name..."
                  />
                </div>
                <div className="single-input ">
                  <label htmlFor="email"></label>
                  <input
                    className="input-box"
                    type="email"
                    id="email"
                    name="email"
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
                    placeholder="Password"
                  />
                </div>
                <div className="single-input">
                  <label htmlFor="password"></label>
                  <input
                    className="input-box"
                    type="password"
                    id="c-password"
                    name="cpassword"
                    placeholder="Confirm Password"
                  />
                </div>

                <div>
                  <input
                    type="submit"
                    value="Sign Up"
                    className="sign-up-btn"
                  />
                </div>
              </div>
              <div className="foot-note">
                <p>Already have an account?</p>
                <button className="log-in-recomend-btn">
                  {" "}
                  <Link to="/login">Log-in</Link>{" "}
                </button>
              </div>
              <div>
                <div className="google-github">
                  <button onClick={() => signInWithGoogle()}>
                    <div className="btn-flex">
                      Sign-up with <FcGoogle />
                    </div>
                  </button>
                  <button onClick={() => signInWithGithub()}>
                    <div className="btn-flex">
                      Sign-up with <FaGithub />
                    </div>
                  </button>
                </div>
                <button className="goback-btn" onClick={backClick}>
                  <div className="btn-flex">
                    <IoMdArrowRoundBack />
                    Go back
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
