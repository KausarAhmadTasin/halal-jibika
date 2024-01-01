import "./Job.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const { id, title, logo, companyName, position } = job;
  // console.log(logo);
  return (
    <>
      <div className="job-box-container">
        <div className="job-box">
          <div className="inner-box">
            <h2 className="job-title">{title}</h2>
            <img className="job-logo" src={logo} alt="" />
            <h3 className="job-company">
              {" "}
              <b>Company Name:</b> {companyName}
            </h3>
            <h3 className="job-position">
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
            <hr className="jobs-hr" />
            <div className="crud-options">
              <div className="heart">
                {" "}
                <IoMdHeartEmpty />
              </div>
              <div className="edit">
                <FaRegEdit />
              </div>
              <div className="delete">
                <MdDelete />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="jobs-hr" />
    </>
  );
};

export default Job;
