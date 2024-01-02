import React from "react";

const ApplyBtn = ({ handleAppliedClick }) => {
  return (
    <>
      <button
        onClick={() => handleAppliedClick()}
        className="primary-btn "
        id="job-apply-btn"
      >
        Apply
      </button>
    </>
  );
};

export default ApplyBtn;
