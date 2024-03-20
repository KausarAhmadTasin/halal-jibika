import { useEffect, useState } from "react";
import Job from "../../Components/Job/Job";
import "./Jobs.css";
import ApplyJobSide from "../../Components/ApplyJobSide/ApplyJobSide";
import AppliedJobsSide from "../../Components/AppliedJobsSide/AppliedJobsSide";
import Loading from "../../Components/Loading/Loading";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../Config/Firebase";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const URL = "https://kausar-ahmad.onrender.com/jobs";
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setJobs(response.data);
    });
  }, [URL]);

  const handleDelete = (id) => {
    const shouldDelete = window.confirm("Do you want to delete the post!");

    if (shouldDelete) {
      axios.delete(`${URL}/${id}`).then(() => {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
      });
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true);
    }
  });

  if (!jobs) {
    return <Loading />;
  }

  if (jobs.length === 0) {
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
        {isUser ? (
          <AppliedJobsSide />
        ) : (
          <div className="no-applied">
            <p>Please log in to see applied jobs!</p>
            <NavLink to="/login">
              {" "}
              <button className="primary-btn " id="no-applied">
                Load Applied Jobs
              </button>{" "}
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Jobs;
