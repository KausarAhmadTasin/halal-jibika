import "./Job.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const Job = ({ job }) => {
  const { title, logo, companyName, position } = job;
  console.log(logo);
  return (
    <>
      <div className="job-box-container">
        <div className="job-box">
          <div className="inner-box">
            <h2 className="job-title">{title}</h2>
            <img className="job-logo" src={logo} alt="" />
            <h3 className="job-company">
              {" "}
              <b>Company:</b> {companyName}
            </h3>
            <h3 className="job-position">
              {" "}
              <b>Position: </b> {position}
            </h3>
            <button className="primary-btn " id="job-detail-btn">
              Details
            </button>
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
