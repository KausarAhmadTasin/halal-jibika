import axios from "axios";
import { useEffect, useState } from "react";
import Job from "../../Components/Job/Job";
import "./Jobs.css";
import { Link } from "react-router-dom";
import ApplyJobSide from "../../Components/ApplyJobSide/ApplyJobSide";
import AppliedJobsSide from "../../Components/AppliedJobsSide/AppliedJobsSide";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const URL = "http://localhost:9000/jobs";

  useEffect(() => {
    axios.get(URL).then((response) => {
      setJobs(response.data);
    });
  }, [URL]);

  const handleDelete = (id) => {
    axios.delete(`${URL}/${id}`).then(() => {
      confirm("Do you want to delete the post!");
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    });
  };

  if (!jobs || jobs.length === 0) {
    return (
      <>
        <h1>No jobs added!</h1>
      </>
    );
  }

  return (
    <>
      <div className="jobs-container">
        <ApplyJobSide />
        <div className="jobs-box">
          {jobs.map((job) => (
            <Job key={job.id} job={job} handleDelete={handleDelete} />
          ))}
        </div>
        <AppliedJobsSide />
      </div>
    </>
  );
};

export default Jobs;
