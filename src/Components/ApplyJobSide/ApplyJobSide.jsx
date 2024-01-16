import { Link } from "react-router-dom";

const ApplyJobSide = () => {
  return (
    <>
      <div className="apply-job-box">
        <h2 className="post-title">Want an Employee? Post New Job!</h2>

        <Link to="/post">
          <button className="primary-btn apply-post-btn" id="post-job-btn2">
            Post Job
          </button>
        </Link>
      </div>
    </>
  );
};

export default ApplyJobSide;
