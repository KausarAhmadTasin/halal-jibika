import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-message">Error in Signup / Signin</h1>
      <p className="error-description">
        There was an error during the signup process. Please try again.
      </p>
      <a href="/" className="back-btn">
        Go Back to Home
      </a>
    </div>
  );
};

export default Error;
