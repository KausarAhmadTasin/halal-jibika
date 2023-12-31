import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import auth from "../../Config/Firebase";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitHubUser, gitHubLoading, githubError] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();

  const backClick = () => {
    navigate(-1);
  };
  if (googleError || githubError) {
    return (
      <div>
        <p>Error: {googleError.message}</p>
      </div>
    );
  }
  if (googleLoading || gitHubLoading) {
    return <p>Loading...</p>;
  }
  if (googleUser || gitHubUser) {
    navigate("/");
  }

  return (
    <>
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
    </>
  );
};

export default SocialLogin;
