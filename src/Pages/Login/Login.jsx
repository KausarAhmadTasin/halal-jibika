import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../Config/Firebase";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Header from "../../Components/Header/Header";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import { toast } from "react-toastify";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
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
  const navigate = useNavigate();

  const backClick = () => {
    navigate(-1);
  };

  const loginHandle = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      return toast.error("Email and password are required!");
    }

    try {
      await signInWithEmailAndPassword(email, password);
      if (user) {
        navigate("/");
        toast.success("Logged in!");
      }
    } catch (error) {
      // Handle specific Firebase email/password sign-in error here
      toast.error("Invalid email or password!");
    }
  };

  return (
    <>
      <Header />
      <div className="reg-container">
        <h2 className="text-center">Log in into your account</h2>

        <div className="login-container">
          <form onSubmit={loginHandle} className="block">
            <div className="single-input">
              <input
                className="input-box"
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
            </div>

            <div className="single-input">
              <input
                className="input-box"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <input type="submit" value="Log In" className="log-up-btn" />
          </form>
          <div className="foot-note">
            <p>Do not have an account? </p>
            <button className="log-in-recomend-btn">
              {" "}
              <Link to="/signup">Create a free account</Link>{" "}
            </button>
          </div>
          <div className="google-github">
            <button className="btn-flex" onClick={handleGoogleSignup}>
              Sign-up with <FcGoogle />
            </button>
            <button className="btn-flex" onClick={handleGithubSignup}>
              Sign-up with <FaGithub />
            </button>
          </div>
          <button className="goback-btn" onClick={() => backClick()}>
            <div className="btn-flex">
              <IoMdArrowRoundBack />
              Go back
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
