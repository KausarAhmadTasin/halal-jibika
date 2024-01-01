import { Link } from "react-router-dom";
import "./LatestJobs.css";

const LatestJobs = ({ job }) => {
  const { id, title, logo, companyName, position } = job;
  //   console.log(id);
  return (
    <>
      <div className="latest-box">
        <h2 className="latest-title">{title}</h2>
        <img className="latest-logo" src={logo} alt="" />
        <h3 className="latest-company">
          {" "}
          <b>Company Name:</b> {companyName}
        </h3>
        <h3 className="latest-position">
          {" "}
          <b>Responsibility: </b> {position}
        </h3>
        <div className="jobs-btn">
          <button className="primary-btn " id="job-apply-btn">
            Apply
          </button>
          <Link to={`/jobs/${id}`}>
            <button className="primary-btn " id="job-detail-btn">
              Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LatestJobs;
