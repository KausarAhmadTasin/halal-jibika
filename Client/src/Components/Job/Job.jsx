/* eslint-disable react/prop-types */
import "./Job.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../../Contexts/FavoriteContext/FavoriteContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ApplyBtn from "../ApplyBtn/ApplyBtn";
import Loading from "../Loading/Loading";

const Job = ({ job, handleDelete }) => {
  const { id, title, logo, companyName, position } = job;
  const [heartClicked, setHeartClicked] = useState(false);
  const [apply, setApply] = useState(false);
  // const [apply, setA]
  const { addToFavorites, removeFromFavorites, isFavorite, addToApplied } =
    useFavorites();
  const navigate = useNavigate();

  const handleEdit = () => {
    const userConfirmed = window.confirm(`Do you want to edit ${title}?`);

    if (userConfirmed) {
      navigate(`/editJob`, { state: { job } });
    }
  };

  const handleFavoriteClick = () => {
    if (isFavorite(job)) {
      removeFromFavorites(job);
    } else {
      addToFavorites(job);
      setHeartClicked(!heartClicked);
      toast.success("Added to favorite!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleAppliedClick = () => {
    const userConfirmation = window.confirm(
      `Do you want to apply to ${title}?`
    );
    if (userConfirmation) {
      addToApplied(job);
      toast.success("Applied Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/jobs");
    }
    setApply(true);
  };

  if (!job) {
    return <Loading />;
  }

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
              <ApplyBtn apply={apply} handleAppliedClick={handleAppliedClick} />
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
                <FaRegEdit onClick={() => handleEdit(id)} />
              </div>
              <div className="delete">
                <MdDelete onClick={() => handleDelete(id)} />
              </div>
            </div>
          </div>
        </div>
        <hr className="jobs-hr jobs-hr2" />
      </div>
    </>
  );
};

export default Job;
