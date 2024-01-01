import { useLoaderData } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import "./JobDetails.css";

const Jobdetails = () => {
  const {
    data: { id, title, logo, companyName, position },
  } = useLoaderData();
  return (
    <>
      <div className="jobd-box">
        <div className="inner-box">
          <h2 className="job-title">{title}</h2>
          <img className="job-logo" src={logo} alt="" />
          <p>
            {" "}
            <b>Job No: </b> {id}
          </p>
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
    </>
  );
};

export default Jobdetails;
