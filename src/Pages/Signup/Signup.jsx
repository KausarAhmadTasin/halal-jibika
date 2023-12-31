import { Link } from "react-router-dom";
import "./Signup.css";
import Header from "../../Components/Header/Header";
const Signup = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const auth = getAuth(app);
  // const navigate = useNavigate();

  // const submitEmail = (e) => {
  //   e.preventDefault();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       alert("Signed up successfully!");
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // };

  return (
    <>
      <Header />
      <div className="signup-section">
        <h1 className="text-center titile-text">Halal Jibika</h1>
        <h2 className="text-center ma-b-1-5rem">Create a new account</h2>

        <div className="login-container">
          <div className="block">
            <div className="single-input ma-b-1-5rem">
              <label htmlFor="name"></label>
              <input
                className="input-box"
                type="text"
                id="name"
                autoFocus
                placeholder="Full name..."
              />
            </div>
            <div className="single-input ma-b-1-5rem">
              <label htmlFor="email"></label>
              <input
                className="input-box"
                type="email"
                id="email"
                // onChange={(e) => setEmail(e.target.value)}
                // value={email}
                placeholder="Email address"
              />
            </div>

            <div className="single-input ma-b-1-5rem">
              <label htmlFor="password"></label>
              <input
                className="input-box"
                type="password"
                id="password"
                // onChange={(e) => setPassword(e.target.value)}
                // value={password}
                placeholder="Password"
              />
            </div>

            <input
              type="submit"
              // onClick={submitEmail}
              value="Sign Up"
              className="ma-b-1-5rem width-10rem sign-up-btn"
            />
          </div>
          <div className="foot-note">
            <p>Already have an account? </p>
            <button className="width-20rem log-in-rec">
              <Link to="/login">Log-in</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
