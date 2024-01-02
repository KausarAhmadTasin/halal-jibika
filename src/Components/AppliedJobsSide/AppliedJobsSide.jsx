import { useFavorites } from "../../Contexts/FavoriteContext/FavoriteContext";
import "./AppliedJobs.css";
const AppliedJobsSide = () => {
  const { applied, removeFromApplied } = useFavorites();

  const handleRemoveClick = (jobId) => {
    // Remove the job from the applied list
    removeFromApplied(jobId);
  };
  return (
    <>
      <div className="Applied-jobs-container">
        <h2 className="post-title">Your applied jobs</h2>
        <div className="applied-list">
          {applied.map((job) => (
            <ul key={job.id}>
              <div className="applied-details">
                <div className="applied-text">
                  <li>
                    {" "}
                    <h4>{job.title}</h4>{" "}
                  </li>
                  <li>{job.position}</li>
                </div>
                <button
                  onClick={() => handleRemoveClick(job.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobsSide;
