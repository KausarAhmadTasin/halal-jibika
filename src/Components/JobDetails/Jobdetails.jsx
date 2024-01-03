import { useLoaderData, useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import "./JobDetails.css";
import ApplyBtn from "../ApplyBtn/ApplyBtn";
import { useFavorites } from "../../Contexts/FavoriteContext/FavoriteContext";
import Job from "../Job/Job";

const Jobdetails = () => {
  const navigate = useNavigate();
  const { addToApplied } = useFavorites();

  const handleAppliedClick = () => {
    const userConfirmation = window.confirm(
      `Do you want to apply to ${title}?`
    );

    if (userConfirmation) {
      addToApplied(Job);
      navigate("/jobs");
    }
  };

  const {
    data: { id, title, logo, companyName, position, description },
  } = useLoaderData();
  return (
    <>
      <div className="boxd-container">
        <div className="jobd-box">
          <div className="inner-box">
            <div className="job-content">
              <h2 className="job-title jobd-h2">{title}</h2>
              <img className="jobd-logo" src={logo} alt="" />
              <div className="job-desc">
                <p>
                  {" "}
                  <b>Job No: </b> {id}
                </p>
                <h3 className="jobd-company">
                  {" "}
                  <b>Company Name:</b> {companyName}
                </h3>
                <h3 className="jobd-position">
                  {" "}
                  <b>Responsibility: </b> {position}
                </h3>
                <h3 className="jobd-position">
                  {" "}
                  <b>Job Description: </b> {description}
                </h3>
              </div>
            </div>
            <div className="jobs-btn">
              <ApplyBtn handleAppliedClick={handleAppliedClick} />
            </div>
            <hr className="jobds-hr" />
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
    </>
  );
};

export default Jobdetails;
