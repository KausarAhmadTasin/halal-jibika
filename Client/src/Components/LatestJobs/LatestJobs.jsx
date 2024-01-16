import { Link, useNavigate } from "react-router-dom";
import "./LatestJobs.css";
import ApplyBtn from "../ApplyBtn/ApplyBtn";
import { useFavorites } from "../../Contexts/FavoriteContext/FavoriteContext";
import { toast } from "react-toastify";

const LatestJobs = ({ job }) => {
  const { id, title, logo, companyName, position } = job;

  const { addToApplied } = useFavorites();
  const navigate = useNavigate();

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
  };

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
          <ApplyBtn handleAppliedClick={handleAppliedClick} />

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
