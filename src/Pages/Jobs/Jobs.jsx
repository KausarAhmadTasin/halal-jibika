import axios from "axios";
import { useEffect, useState } from "react";
import Job from "../../Components/Job/Job";
import "./Jobs.css";
import { Link } from "react-router-dom";
import ApplyJobSide from "../../Components/ApplyJobSide/ApplyJobSide";
import AppliedJobsSide from "../../Components/AppliedJobsSide/AppliedJobsSide";
const Jobs = () => {
  const [jobs, setJobs] = useState("");
  const URL = "http://localhost:9000/jobs";

  useEffect(() => {
    axios.get(URL).then((response) => {
      setJobs(response.data);
    });
  }, []);

  // console.log(jobs);

  if (!jobs)
    return (
      <>
        <h1>No jobs added!</h1>
      </>
    );
  return (
    <>
      <div className="jobs-container">
        <ApplyJobSide />
        <div className="jobs-box">
          {jobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
        <AppliedJobsSide />
      </div>
    </>
  );
};

export default Jobs;
