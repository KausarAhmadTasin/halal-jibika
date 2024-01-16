import "./ApplyBtn.css";

const ApplyBtn = ({ apply, handleAppliedClick }) => {
  return (
    <>
      {apply ? (
        <button
          onClick={() => handleAppliedClick()}
          className="primary-btn "
          id="job-apply-btn"
        >
          Applied
        </button>
      ) : (
        <button
          onClick={() => handleAppliedClick()}
          className="primary-btn "
          id="job-apply-btn"
        >
          Apply
        </button>
      )}
    </>
  );
};

export default ApplyBtn;
