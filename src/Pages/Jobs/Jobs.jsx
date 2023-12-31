import axios from "axios";
import { useEffect, useState } from "react";
import Job from "../../Components/Job/Job";

const Jobs = () => {
  const [jobs, setJobs] = useState("");
  const URL = "http://localhost:9000/jobs";

  useEffect(() => {
    axios.get(URL).then((response) => {
      setJobs(response.data);
    });
  }, []);

  // console.log(jobs);

  if (!jobs) return null;
  return (
    <>
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </>
  );
};

export default Jobs;
