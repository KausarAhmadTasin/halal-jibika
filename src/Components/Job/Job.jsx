import "./Job.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../../Contexts/FavoriteContext/FavoriteContext";
import { toast } from "react-toastify";

const Job = ({ job }) => {
  const { id, title, logo, companyName, position } = job;
  const [heartClicked, setHeartClicked] = useState(false);

  // const { addToFavorites } = useFavorites();
  const { addToFavorites, removeFromFavorites, isFavorite, addToApplied } =
    useFavorites();

  const handleFavoriteClick = () => {
    if (isFavorite(job)) {
      // If the job is already in favorites, remove it
      removeFromFavorites(job);
    } else {
      // If the job is not in favorites, add it
      addToFavorites(job);
      setHeartClicked(!heartClicked);
    }
  };

  // const { addToApplied } = useFavorites();
  const handleAppliedClick = () => {
    confirm(`Do you want to apply to ${title}?`);
    addToApplied(job);

    // console.log("clicked");
  };
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
              <button
                onClick={() => handleAppliedClick()}
                className="primary-btn "
                id="job-apply-btn"
              >
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
                {heartClicked ? (
                  <FaHeart onClick={() => handleFavoriteClick()} />
                ) : (
                  <IoMdHeartEmpty onClick={() => handleFavoriteClick()} />
                )}
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
        <hr className="jobs-hr" />
      </div>
    </>
  );
};

export default Job;
